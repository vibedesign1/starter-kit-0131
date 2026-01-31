import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { AppShell } from '../components/navigation/AppShell';
import { CreateStep1BasicInfo } from '../sections/create/CreateStep1BasicInfo';
import { CreateStep2AddBooks } from '../sections/create/CreateStep2AddBooks';
import { CreateStep2BookDetail } from '../sections/create/CreateStep2BookDetail';
import { CreateStep3Arrange } from '../sections/create/CreateStep3Arrange';
import { CreateStep4Preview } from '../sections/create/CreateStep4Preview';

/**
 * CreateExhibitionPage 페이지
 *
 * 전시 만들기 페이지.
 * 4단계 플로우로 전시를 생성하는 페이지이다.
 *
 * 동작 방식:
 * 1. activeStep에 따라 해당 단계 섹션을 표시
 * 2. Step1: 기본 정보 입력 (제목, 소개글, 테마)
 * 3. Step2: 책 추가 (검색 + 선택) / 책 상세 입력
 * 4. Step3: 전시 구성 (배치 방식, 순서)
 * 5. Step4: 미리보기 + 완료
 *
 * Props:
 * @param {number} initialStep - 시작 단계 (0-3) [Optional, 기본값: 0]
 * @param {Array} searchResults - 책 검색 결과 [Optional]
 * @param {function} onSearch - 검색 핸들러 [Optional]
 * @param {function} onComplete - 전시 완료 핸들러 [Optional]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <CreateExhibitionPage
 *   searchResults={results}
 *   onSearch={handleSearch}
 *   onComplete={handleComplete}
 * />
 */
export function CreateExhibitionPage({
  initialStep = 0,
  searchResults = [],
  onSearch,
  onComplete,
  sx,
  ...props
}) {
  const [activeStep, setActiveStep] = useState(initialStep);
  const [basicInfo, setBasicInfo] = useState({ title: '', description: '', theme: 'classic' });
  const [selectedBooks, setSelectedBooks] = useState([]);
  const [bookDetails, setBookDetails] = useState({});
  const [arrangement, setArrangement] = useState('chronological');
  const [editingBook, setEditingBook] = useState(null);

  const handleBasicInfoChange = (field, value) => {
    setBasicInfo((prev) => ({ ...prev, [field]: value }));
  };

  const handleBookToggle = (book) => {
    setSelectedBooks((prev) => {
      const exists = prev.find((b) => b.id === book.id);
      if (exists) return prev.filter((b) => b.id !== book.id);
      return [...prev, book];
    });
  };

  const handleBookDetailChange = (field, value) => {
    if (!editingBook) return;
    setBookDetails((prev) => ({
      ...prev,
      [editingBook.id]: {
        ...(prev[editingBook.id] || {}),
        [field]: value,
      },
    }));
  };

  const handleBookDetailSave = () => {
    setEditingBook(null);
  };

  const handleStepClick = (step) => {
    if (step < activeStep) setActiveStep(step);
  };

  const renderStep = () => {
    if (editingBook) {
      return (
        <CreateStep2BookDetail
          bookInfo={ {
            title: editingBook.title,
            author: editingBook.author,
            publisher: editingBook.publisher,
            coverImage: editingBook.coverImage,
          } }
          values={ bookDetails[editingBook.id] || {} }
          onChange={ handleBookDetailChange }
          onSave={ handleBookDetailSave }
          onBack={ () => setEditingBook(null) }
        />
      );
    }

    switch (activeStep) {
    case 0:
      return (
        <CreateStep1BasicInfo
          values={ basicInfo }
          onChange={ handleBasicInfoChange }
          onNext={ () => setActiveStep(1) }
          onStepClick={ handleStepClick }
        />
      );
    case 1:
      return (
        <CreateStep2AddBooks
          searchResults={ searchResults }
          selectedBooks={ selectedBooks }
          onSearch={ onSearch }
          onBookToggle={ handleBookToggle }
          onBookDetail={ (book) => setEditingBook(book) }
          onNext={ () => setActiveStep(2) }
          onPrev={ () => setActiveStep(0) }
          onStepClick={ handleStepClick }
        />
      );
    case 2:
      return (
        <CreateStep3Arrange
          books={ selectedBooks }
          arrangement={ arrangement }
          onArrangementChange={ setArrangement }
          onNext={ () => setActiveStep(3) }
          onPrev={ () => setActiveStep(1) }
          onStepClick={ handleStepClick }
        />
      );
    case 3:
      return (
        <CreateStep4Preview
          title={ basicInfo.title }
          books={ selectedBooks }
          onComplete={ onComplete }
          onPrev={ () => setActiveStep(2) }
          onStepClick={ handleStepClick }
        />
      );
    default:
      return null;
    }
  };

  return (
    <AppShell
      logo={
        <Typography variant="subtitle1" sx={ { fontWeight: 700 } }>
          나의 추억 전시관
        </Typography>
      }
      sx={ { ...sx } }
      { ...props }
    >
      <Box sx={ { px: { xs: 2, sm: 3 }, py: 4 } }>
        { renderStep() }
      </Box>
    </AppShell>
  );
}
