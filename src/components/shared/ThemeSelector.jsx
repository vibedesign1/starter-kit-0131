import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { CardContainer } from '../card/CardContainer';
import { mockThemes } from '../../data/exhibitionMockData';

/**
 * ThemeSelector 컴포넌트
 *
 * 전시 테마를 선택하는 컴포넌트.
 * 카드 형태로 테마 옵션을 나열하고 하나를 선택할 수 있다.
 *
 * 동작 방식:
 * 1. 테마 카드들이 가로로 나열됨
 * 2. 카드를 클릭하면 해당 테마가 선택됨
 * 3. 선택된 테마는 primary 색상 테두리로 강조
 *
 * Props:
 * @param {string} value - 선택된 테마 ID [Required]
 * @param {function} onChange - 테마 변경 핸들러 (themeId) => void [Required]
 * @param {Array} themes - 테마 옵션 목록 [{id, name, description, color}] [Optional, 기본값: mockThemes]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <ThemeSelector value="classic" onChange={handleThemeChange} />
 */
export function ThemeSelector({
  value,
  onChange,
  themes = mockThemes,
  sx,
  ...props
}) {
  return (
    <Stack
      direction={ { xs: 'column', sm: 'row' } }
      spacing={ 2 }
      sx={ { ...sx } }
      { ...props }
    >
      { themes.map((theme) => (
        <CardContainer
          key={ theme.id }
          variant="outlined"
          padding="md"
          isInteractive
          isSelected={ value === theme.id }
          onClick={ () => onChange(theme.id) }
          sx={ { flex: 1, minWidth: 0 } }
        >
          <Box
            sx={ {
              width: '100%',
              height: 60,
              backgroundColor: theme.color,
              mb: 2,
            } }
          />
          <Typography variant="subtitle2" sx={ { fontWeight: 600, mb: 0.5 } }>
            { theme.name }
          </Typography>
          <Typography variant="caption" color="text.secondary">
            { theme.description }
          </Typography>
        </CardContainer>
      )) }
    </Stack>
  );
}
