import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { AppShell } from '../components/navigation/AppShell';
import { ExhibitionListSection } from '../sections/ExhibitionListSection';

/**
 * HomePage 페이지
 *
 * 나의 추억 전시관 홈 화면.
 * AppShell 안에 전시 목록을 표시하는 메인 페이지이다.
 *
 * 동작 방식:
 * 1. AppShell로 GNB + 메인 영역 레이아웃 구성
 * 2. ExhibitionListSection으로 전시 카드 그리드 표시
 * 3. 전시가 없으면 빈 상태 표시
 * 4. FAB으로 새 전시 만들기
 *
 * Props:
 * @param {Array} exhibitions - 전시 목록 [Required]
 * @param {function} onExhibitionClick - 전시 클릭 핸들러 [Optional]
 * @param {function} onExhibitionEdit - 전시 편집 핸들러 [Optional]
 * @param {function} onCreate - 새 전시 만들기 핸들러 [Optional]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <HomePage
 *   exhibitions={myExhibitions}
 *   onExhibitionClick={handleClick}
 *   onCreate={handleCreate}
 * />
 */
export function HomePage({
  exhibitions = [],
  onExhibitionClick,
  onExhibitionEdit,
  onCreate,
  sx,
  ...props
}) {
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
      <Box sx={ { maxWidth: 960, mx: 'auto', width: '100%', px: { xs: 2, sm: 3 }, py: 4 } }>
        <ExhibitionListSection
          exhibitions={ exhibitions }
          onExhibitionClick={ onExhibitionClick }
          onExhibitionEdit={ onExhibitionEdit }
          onCreate={ onCreate }
        />
      </Box>
    </AppShell>
  );
}
