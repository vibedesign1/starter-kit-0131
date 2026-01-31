import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import { ChevronLeft, ChevronRight, ArrowLeft, MapPin, Calendar, Users } from 'lucide-react';
import { StarRating } from '../shared/StarRating';
import { QuotedContainer } from '../typography/QuotedContainer';

/**
 * CuratorView 컴포넌트
 *
 * 큐레이터가 유물을 상세히 설명하는 느낌의 책 상세 뷰.
 * 책 한 권의 모든 정보를 보여주며 이전/다음 네비게이션을 제공한다.
 *
 * 동작 방식:
 * 1. 좌측에 책 표지, 우측에 상세 정보가 표시됨 (반응형: 모바일은 상하)
 * 2. 코멘트, 추억 스토리, 인용문, 메타 정보 순서로 표시
 * 3. 하단에 이전/다음 책 네비게이션 버튼
 * 4. 상단에 뒤로가기 버튼
 *
 * Props:
 * @param {object} book - 책 정보 전체 [Required]
 * @param {number} currentIndex - 현재 인덱스 [Optional]
 * @param {number} totalBooks - 전체 책 수 [Optional]
 * @param {function} onPrev - 이전 책 핸들러 [Optional]
 * @param {function} onNext - 다음 책 핸들러 [Optional]
 * @param {function} onBack - 복도 뷰로 돌아가기 핸들러 [Optional]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <CuratorView
 *   book={bookData}
 *   currentIndex={0}
 *   totalBooks={5}
 *   onPrev={handlePrev}
 *   onNext={handleNext}
 *   onBack={handleBack}
 * />
 */
export function CuratorView({
  book = {},
  currentIndex,
  totalBooks,
  onPrev,
  onNext,
  onBack,
  sx,
  ...props
}) {
  const hasPagination = currentIndex !== undefined && totalBooks !== undefined;

  return (
    <Box sx={ { ...sx } } { ...props }>
      { /* 상단 헤더 */ }
      <Box
        sx={ {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          mb: 3,
        } }
      >
        { onBack && (
          <Button
            variant="text"
            startIcon={ <ArrowLeft size={ 16 } /> }
            onClick={ onBack }
            sx={ { textTransform: 'none' } }
          >
            복도 뷰
          </Button>
        ) }
        { hasPagination && (
          <Typography variant="body2" color="text.secondary">
            { currentIndex + 1 } / { totalBooks }
          </Typography>
        ) }
      </Box>

      { /* 메인 콘텐츠: 표지 + 상세 정보 */ }
      <Box
        sx={ {
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: { xs: 3, md: 4 },
          mb: 4,
        } }
      >
        { /* 좌측: 책 표지 */ }
        <Box
          sx={ {
            width: { xs: '100%', md: 280 },
            flexShrink: 0,
          } }
        >
          <Box
            sx={ {
              width: { xs: 200, md: '100%' },
              mx: { xs: 'auto', md: 0 },
              aspectRatio: '3/4',
              backgroundColor: 'grey.200',
              overflow: 'hidden',
              boxShadow: '0 4px 24px rgba(0,0,0,0.12)',
            } }
          >
            { book.coverImage && (
              <Box
                component="img"
                src={ book.coverImage }
                alt={ book.title }
                sx={ { width: '100%', height: '100%', objectFit: 'cover' } }
              />
            ) }
          </Box>
        </Box>

        { /* 우측: 상세 정보 */ }
        <Box sx={ { flex: 1, minWidth: 0 } }>
          { /* 기본 정보 */ }
          <Typography variant="h5" sx={ { fontWeight: 700, mb: 0.5 } }>
            { book.title }
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={ { mb: 1 } }>
            { book.author }{ book.publisher ? ` | ${book.publisher}` : '' }
          </Typography>

          { book.rating && (
            <StarRating value={ book.rating } isReadOnly size="md" sx={ { mb: 2 } } />
          ) }

          <Divider sx={ { mb: 3 } } />

          { /* 나의 코멘트 */ }
          { book.comment && (
            <Box sx={ { mb: 3 } }>
              <Typography variant="overline" color="text.secondary" sx={ { display: 'block', mb: 1 } }>
                나의 코멘트
              </Typography>
              <Typography variant="body1" sx={ { lineHeight: 1.8 } }>
                { book.comment }
              </Typography>
            </Box>
          ) }

          { /* 추억 스토리 */ }
          { book.memoryStory && (
            <Box sx={ { mb: 3 } }>
              <Typography variant="overline" color="text.secondary" sx={ { display: 'block', mb: 1 } }>
                추억 스토리
              </Typography>
              <Typography variant="body2" sx={ { lineHeight: 1.8, color: 'text.secondary' } }>
                { book.memoryStory }
              </Typography>
            </Box>
          ) }

          { /* 기억에 남는 문장 */ }
          { book.quote && (
            <Box sx={ { mb: 3 } }>
              <Typography variant="overline" color="text.secondary" sx={ { display: 'block', mb: 1 } }>
                기억에 남는 문장
              </Typography>
              <QuotedContainer variant="body1" position="inside">
                { book.quote }
              </QuotedContainer>
            </Box>
          ) }

          { /* 메타 정보 */ }
          <Stack spacing={ 1 } sx={ { mb: 2 } }>
            { book.readPlace && (
              <Stack direction="row" spacing={ 1 } alignItems="center">
                <MapPin size={ 14 } color="gray" />
                <Typography variant="body2" color="text.secondary">
                  { book.readPlace }
                </Typography>
              </Stack>
            ) }
            { book.readDate && (
              <Stack direction="row" spacing={ 1 } alignItems="center">
                <Calendar size={ 14 } color="gray" />
                <Typography variant="body2" color="text.secondary">
                  { book.readDate }
                </Typography>
              </Stack>
            ) }
            { book.readWith && (
              <Stack direction="row" spacing={ 1 } alignItems="center">
                <Users size={ 14 } color="gray" />
                <Typography variant="body2" color="text.secondary">
                  { book.readWith }
                </Typography>
              </Stack>
            ) }
          </Stack>

          { /* 태그 */ }
          { book.tags && book.tags.length > 0 && (
            <Stack direction="row" spacing={ 0.5 } flexWrap="wrap" useFlexGap>
              { book.tags.map((tag) => (
                <Chip key={ tag } label={ tag } size="small" variant="outlined" />
              )) }
            </Stack>
          ) }
        </Box>
      </Box>

      { /* 하단 네비게이션 */ }
      { (onPrev || onNext) && (
        <Box
          sx={ {
            display: 'flex',
            justifyContent: 'space-between',
            borderTop: '1px solid',
            borderColor: 'divider',
            pt: 2,
          } }
        >
          <Button
            variant="text"
            startIcon={ <ChevronLeft size={ 16 } /> }
            onClick={ onPrev }
            disabled={ !onPrev || currentIndex === 0 }
            sx={ { textTransform: 'none' } }
          >
            이전
          </Button>
          <Button
            variant="text"
            endIcon={ <ChevronRight size={ 16 } /> }
            onClick={ onNext }
            disabled={ !onNext || currentIndex === totalBooks - 1 }
            sx={ { textTransform: 'none' } }
          >
            다음
          </Button>
        </Box>
      ) }
    </Box>
  );
}
