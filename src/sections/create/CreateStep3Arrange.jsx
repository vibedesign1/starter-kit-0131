import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import { StepIndicator } from '../../components/shared/StepIndicator';
import { BookCard } from '../../components/card/BookCard';
import { createExhibitionSteps, arrangementOptions } from '../../data/exhibitionMockData';

/**
 * CreateStep3Arrange 섹션
 *
 * 전시 만들기 3단계: 전시 구성.
 * 배치 방식을 선택하고 책 순서를 확인한다.
 *
 * 동작 방식:
 * 1. StepIndicator로 현재 3단계임을 표시
 * 2. 배치 방식 선택 (시간순, 추천순, 직접 배치)
 * 3. 선택된 배치에 따라 책 목록 미리보기
 * 4. 이전/다음 버튼으로 단계 이동
 *
 * Props:
 * @param {Array} books - 전시에 추가된 책 목록 [Required]
 * @param {string} arrangement - 선택된 배치 방식 [Required]
 * @param {function} onArrangementChange - 배치 방식 변경 핸들러 (arrangementId) => void [Optional]
 * @param {function} onNext - 다음 단계 핸들러 [Optional]
 * @param {function} onPrev - 이전 단계 핸들러 [Optional]
 * @param {function} onStepClick - 스텝 클릭 핸들러 [Optional]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <CreateStep3Arrange
 *   books={bookList}
 *   arrangement="chronological"
 *   onArrangementChange={handleChange}
 *   onNext={handleNext}
 * />
 */
export function CreateStep3Arrange({
  books = [],
  arrangement = 'chronological',
  onArrangementChange,
  onNext,
  onPrev,
  onStepClick,
  sx,
  ...props
}) {
  return (
    <Box sx={ { maxWidth: 700, mx: 'auto', ...sx } } { ...props }>
      <StepIndicator
        activeStep={ 2 }
        steps={ createExhibitionSteps }
        onStepClick={ onStepClick }
      />

      <Typography variant="h5" sx={ { fontWeight: 700, mb: 1 } }>
        전시 구성
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={ { mb: 4 } }>
        책을 어떤 순서로 배치할지 선택해주세요.
      </Typography>

      { /* 배치 방식 선택 */ }
      <Box sx={ { mb: 4 } }>
        <Typography variant="subtitle2" sx={ { fontWeight: 600, mb: 1.5 } }>
          배치 방식
        </Typography>
        <RadioGroup
          value={ arrangement }
          onChange={ (e) => onArrangementChange?.(e.target.value) }
        >
          { arrangementOptions.map((option) => (
            <FormControlLabel
              key={ option.id }
              value={ option.id }
              control={ <Radio size="small" /> }
              label={
                <Box>
                  <Typography variant="body2" sx={ { fontWeight: 500 } }>
                    { option.label }
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    { option.description }
                  </Typography>
                </Box>
              }
              sx={ {
                mb: 1,
                alignItems: 'flex-start',
                '& .MuiRadio-root': { mt: 0.5 },
              } }
            />
          )) }
        </RadioGroup>
      </Box>

      { /* 책 순서 미리보기 */ }
      { books.length > 0 && (
        <Box sx={ { mb: 3 } }>
          <Typography variant="subtitle2" sx={ { fontWeight: 600, mb: 2 } }>
            전시 순서 미리보기
          </Typography>
          <Grid container spacing={ 2 }>
            { books.map((book, index) => (
              <Grid key={ book.id } size={ { xs: 4, sm: 3 } }>
                <Box sx={ { position: 'relative' } }>
                  <Typography
                    variant="caption"
                    sx={ {
                      position: 'absolute',
                      top: -8,
                      left: -4,
                      zIndex: 1,
                      backgroundColor: 'primary.main',
                      color: 'common.white',
                      width: 20,
                      height: 20,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 11,
                      fontWeight: 600,
                    } }
                  >
                    { index + 1 }
                  </Typography>
                  <BookCard
                    coverImage={ book.coverImage }
                    title={ book.title }
                    author={ book.author }
                    layout="compact"
                  />
                </Box>
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
          sx={ { textTransform: 'none', px: 4 } }
        >
          다음
        </Button>
      </Stack>
    </Box>
  );
}
