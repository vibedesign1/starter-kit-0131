import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import { StepIndicator } from '../../components/shared/StepIndicator';
import { SearchBar } from '../../components/input/SearchBar';
import { BookSearchResult } from '../../components/shared/BookSearchResult';
import { BookCard } from '../../components/card/BookCard';
import { createExhibitionSteps } from '../../data/exhibitionMockData';

/**
 * CreateStep2AddBooks 섹션
 *
 * 전시 만들기 2단계: 책 추가.
 * 검색으로 책을 찾고 전시에 추가한다.
 *
 * 동작 방식:
 * 1. StepIndicator로 현재 2단계임을 표시
 * 2. 검색 바로 책 검색
 * 3. 검색 결과에서 책 선택/해제
 * 4. 하단에 추가된 책 목록 카드로 표시
 * 5. 추가된 책 클릭 시 상세 입력으로 이동
 *
 * Props:
 * @param {Array} searchResults - 검색 결과 책 목록 [Optional, 기본값: []]
 * @param {Array} selectedBooks - 선택된 책 목록 [Required]
 * @param {function} onSearch - 검색 핸들러 (query) => void [Optional]
 * @param {function} onBookToggle - 책 선택/해제 핸들러 (book) => void [Optional]
 * @param {function} onBookDetail - 책 상세 입력 핸들러 (book) => void [Optional]
 * @param {function} onNext - 다음 단계 핸들러 [Optional]
 * @param {function} onPrev - 이전 단계 핸들러 [Optional]
 * @param {function} onStepClick - 스텝 클릭 핸들러 [Optional]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <CreateStep2AddBooks
 *   searchResults={results}
 *   selectedBooks={selected}
 *   onSearch={handleSearch}
 *   onBookToggle={handleToggle}
 *   onNext={handleNext}
 * />
 */
export function CreateStep2AddBooks({
  searchResults = [],
  selectedBooks = [],
  onSearch,
  onBookToggle,
  onBookDetail,
  onNext,
  onPrev,
  onStepClick,
  sx,
  ...props
}) {
  const [searchQuery, setSearchQuery] = useState('');

  const selectedIds = selectedBooks.map((b) => b.id);

  return (
    <Box sx={ { maxWidth: 700, mx: 'auto', ...sx } } { ...props }>
      <StepIndicator
        activeStep={ 1 }
        steps={ createExhibitionSteps }
        onStepClick={ onStepClick }
      />

      <Typography variant="h5" sx={ { fontWeight: 700, mb: 1 } }>
        책 추가
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={ { mb: 3 } }>
        전시에 넣을 책을 검색하여 추가해주세요.
      </Typography>

      { /* 검색 영역 */ }
      <SearchBar
        value={ searchQuery }
        placeholder="책 제목, 저자로 검색..."
        onChange={ setSearchQuery }
        onSearch={ onSearch }
        isFullWidth
        sx={ { mb: 2 } }
      />

      { /* 검색 결과 */ }
      { searchResults.length > 0 && (
        <Box sx={ { mb: 4, border: '1px solid', borderColor: 'divider' } }>
          <Typography
            variant="caption"
            color="text.secondary"
            sx={ { display: 'block', px: 1.5, py: 1, backgroundColor: 'grey.50' } }
          >
            검색 결과 { searchResults.length }건
          </Typography>
          { searchResults.map((book) => (
            <BookSearchResult
              key={ book.id }
              coverImage={ book.coverImage }
              title={ book.title }
              author={ book.author }
              publisher={ book.publisher }
              isSelected={ selectedIds.includes(book.id) }
              onClick={ onBookToggle ? () => onBookToggle(book) : undefined }
            />
          )) }
        </Box>
      ) }

      { /* 추가된 책 목록 */ }
      { selectedBooks.length > 0 && (
        <Box sx={ { mb: 3 } }>
          <Typography variant="subtitle2" sx={ { fontWeight: 600, mb: 2 } }>
            추가된 책 ({ selectedBooks.length }권)
          </Typography>
          <Grid container spacing={ 2 }>
            { selectedBooks.map((book) => (
              <Grid key={ book.id } size={ { xs: 6, sm: 4 } }>
                <BookCard
                  coverImage={ book.coverImage }
                  title={ book.title }
                  author={ book.author }
                  layout="compact"
                  isInteractive
                  onClick={ onBookDetail ? () => onBookDetail(book) : undefined }
                />
              </Grid>
            )) }
          </Grid>
        </Box>
      ) }

      { /* 네비게이션 버튼 */ }
      <Stack direction="row" justifyContent="space-between" sx={ { pt: 2 } }>
        <Button
          variant="text"
          onClick={ onPrev }
          sx={ { textTransform: 'none' } }
        >
          이전
        </Button>
        <Button
          variant="contained"
          onClick={ onNext }
          disabled={ selectedBooks.length === 0 }
          sx={ { textTransform: 'none', px: 4 } }
        >
          다음
        </Button>
      </Stack>
    </Box>
  );
}
