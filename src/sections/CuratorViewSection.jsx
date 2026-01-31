import { useState } from 'react';
import Box from '@mui/material/Box';
import { CuratorView } from '../components/data/CuratorView';

/**
 * CuratorViewSection 섹션
 *
 * 큐레이터 뷰 전체 섹션.
 * CuratorView에 내부 상태 관리를 추가하여 이전/다음 네비게이션을 처리한다.
 *
 * 동작 방식:
 * 1. CuratorView 컴포넌트를 래핑하여 책 전환 상태를 관리
 * 2. 이전/다음 버튼으로 책 간 이동
 * 3. 뒤로가기 버튼으로 복도 뷰로 복귀
 *
 * Props:
 * @param {Array} books - 책 목록 [Required]
 * @param {number} initialIndex - 시작 인덱스 [Optional, 기본값: 0]
 * @param {function} onBack - 뒤로가기 (복도 뷰) 핸들러 [Optional]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <CuratorViewSection
 *   books={bookList}
 *   initialIndex={2}
 *   onBack={handleBack}
 * />
 */
export function CuratorViewSection({
  books = [],
  initialIndex = 0,
  onBack,
  sx,
  ...props
}) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  if (books.length === 0) return null;

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(books.length - 1, prev + 1));
  };

  return (
    <Box
      sx={ {
        maxWidth: 900,
        mx: 'auto',
        px: { xs: 2, sm: 3 },
        py: 4,
        ...sx,
      } }
      { ...props }
    >
      <CuratorView
        book={ books[currentIndex] }
        currentIndex={ currentIndex }
        totalBooks={ books.length }
        onPrev={ handlePrev }
        onNext={ handleNext }
        onBack={ onBack }
      />
    </Box>
  );
}
