import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { StepIndicator } from '../../components/shared/StepIndicator';
import { ThemeSelector } from '../../components/shared/ThemeSelector';
import { createExhibitionSteps } from '../../data/exhibitionMockData';

/**
 * CreateStep1BasicInfo 섹션
 *
 * 전시 만들기 1단계: 기본 정보 입력.
 * 전시 제목, 소개글, 테마를 입력한다.
 *
 * 동작 방식:
 * 1. StepIndicator로 현재 1단계임을 표시
 * 2. 전시 제목 입력 필드
 * 3. 전시 소개글 입력 필드
 * 4. ThemeSelector로 테마 선택
 * 5. "다음" 버튼으로 2단계 진행
 *
 * Props:
 * @param {object} values - 현재 입력 값 {title, description, theme} [Required]
 * @param {function} onChange - 값 변경 핸들러 (fieldName, value) => void [Required]
 * @param {function} onNext - 다음 단계 핸들러 [Optional]
 * @param {function} onStepClick - 스텝 클릭 핸들러 [Optional]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <CreateStep1BasicInfo
 *   values={{ title: '', description: '', theme: 'classic' }}
 *   onChange={handleChange}
 *   onNext={handleNext}
 * />
 */
export function CreateStep1BasicInfo({
  values = {},
  onChange,
  onNext,
  onStepClick,
  sx,
  ...props
}) {
  const handleChange = (field) => (event) => {
    onChange?.(field, event.target.value);
  };

  return (
    <Box sx={ { maxWidth: 600, mx: 'auto', ...sx } } { ...props }>
      <StepIndicator
        activeStep={ 0 }
        steps={ createExhibitionSteps }
        onStepClick={ onStepClick }
      />

      <Typography variant="h5" sx={ { fontWeight: 700, mb: 1 } }>
        전시 기본 정보
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={ { mb: 4 } }>
        전시의 제목과 소개글, 테마를 입력해주세요.
      </Typography>

      <Stack spacing={ 3 }>
        <TextField
          label="전시 제목 *"
          placeholder="예: 나를 만든 책들"
          fullWidth
          value={ values.title || '' }
          onChange={ handleChange('title') }
        />

        <TextField
          label="전시 소개글"
          placeholder="이 전시에 대한 간단한 설명을 적어주세요"
          multiline
          rows={ 3 }
          fullWidth
          value={ values.description || '' }
          onChange={ handleChange('description') }
        />

        <Box>
          <Typography variant="subtitle2" sx={ { fontWeight: 600, mb: 1.5 } }>
            테마 선택
          </Typography>
          <ThemeSelector
            value={ values.theme || 'classic' }
            onChange={ (themeId) => onChange?.('theme', themeId) }
          />
        </Box>

        <Box sx={ { display: 'flex', justifyContent: 'flex-end', pt: 2 } }>
          <Button
            variant="contained"
            onClick={ onNext }
            disabled={ !values.title }
            sx={ { textTransform: 'none', px: 4 } }
          >
            다음
          </Button>
        </Box>
      </Stack>
    </Box>
  );
}
