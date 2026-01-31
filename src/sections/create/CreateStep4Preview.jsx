import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { StepIndicator } from '../../components/shared/StepIndicator';
import { GalleryWalkViewer } from '../../components/media/GalleryWalkViewer';
import { createExhibitionSteps } from '../../data/exhibitionMockData';

/**
 * CreateStep4Preview 섹션
 *
 * 전시 만들기 4단계: 미리보기.
 * 완성된 전시를 복도 뷰로 미리 확인하고 완료한다.
 *
 * 동작 방식:
 * 1. StepIndicator로 현재 4단계(최종)임을 표시
 * 2. GalleryWalkViewer로 전시 미리보기
 * 3. "수정하기" 버튼으로 이전 단계 이동
 * 4. "완료" 버튼으로 전시 생성 완료
 *
 * Props:
 * @param {string} title - 전시 제목 [Optional]
 * @param {Array} books - 전시에 추가된 책 목록 [Required]
 * @param {function} onComplete - 전시 완료 핸들러 [Optional]
 * @param {function} onPrev - 이전 단계 핸들러 [Optional]
 * @param {function} onStepClick - 스텝 클릭 핸들러 [Optional]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <CreateStep4Preview
 *   title="나를 만든 책들"
 *   books={bookList}
 *   onComplete={handleComplete}
 *   onPrev={handlePrev}
 * />
 */
export function CreateStep4Preview({
  title,
  books = [],
  onComplete,
  onPrev,
  onStepClick,
  sx,
  ...props
}) {
  return (
    <Box sx={ { maxWidth: 800, mx: 'auto', ...sx } } { ...props }>
      <StepIndicator
        activeStep={ 3 }
        steps={ createExhibitionSteps }
        onStepClick={ onStepClick }
      />

      <Typography variant="h5" sx={ { fontWeight: 700, mb: 1 } }>
        미리보기
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={ { mb: 3 } }>
        { title ? `"${title}"` : '전시' } 미리보기입니다. 복도 뷰에서 책을 확인해보세요.
      </Typography>

      { /* 미리보기 영역 */ }
      <Box
        sx={ {
          border: '1px solid',
          borderColor: 'divider',
          mb: 3,
          backgroundColor: 'background.default',
          minHeight: 400,
        } }
      >
        <GalleryWalkViewer
          books={ books }
          indicatorType="fraction"
        />
      </Box>

      { /* 네비게이션 버튼 */ }
      <Stack direction="row" justifyContent="space-between">
        <Button
          variant="text"
          onClick={ onPrev }
          sx={ { textTransform: 'none' } }
        >
          수정하기
        </Button>
        <Button
          variant="contained"
          onClick={ onComplete }
          sx={ { textTransform: 'none', px: 4 } }
        >
          전시 완료
        </Button>
      </Stack>
    </Box>
  );
}
