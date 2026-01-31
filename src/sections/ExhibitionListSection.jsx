import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Fab from '@mui/material/Fab';
import Grid from '@mui/material/Grid';
import { Plus } from 'lucide-react';
import { ExhibitionCard } from '../components/card/ExhibitionCard';
import { EmptyState } from '../components/shared/EmptyState';

/**
 * ExhibitionListSection 섹션
 *
 * 홈 화면의 전시 목록 영역.
 * 전시 카드 그리드 또는 빈 상태를 표시하고, 새 전시 만들기 FAB을 제공한다.
 *
 * 동작 방식:
 * 1. 전시가 있으면 카드 그리드로 나열
 * 2. 전시가 없으면 EmptyState 컴포넌트 표시
 * 3. 우하단에 새 전시 만들기 FAB 버튼 표시
 * 4. 전시 카드 클릭 시 해당 전시로 이동
 *
 * Props:
 * @param {Array} exhibitions - 전시 목록 [{id, title, description, theme, books, createdAt}] [Required]
 * @param {function} onExhibitionClick - 전시 클릭 핸들러 (exhibition) => void [Optional]
 * @param {function} onExhibitionEdit - 전시 편집 핸들러 (exhibition) => void [Optional]
 * @param {function} onCreate - 새 전시 만들기 핸들러 [Optional]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <ExhibitionListSection
 *   exhibitions={myExhibitions}
 *   onExhibitionClick={handleClick}
 *   onCreate={handleCreate}
 * />
 */
export function ExhibitionListSection({
  exhibitions = [],
  onExhibitionClick,
  onExhibitionEdit,
  onCreate,
  sx,
  ...props
}) {
  const hasExhibitions = exhibitions.length > 0;

  return (
    <Box sx={ { position: 'relative', minHeight: 400, ...sx } } { ...props }>
      { /* 섹션 헤더 */ }
      <Box sx={ { mb: 3 } }>
        <Typography variant="h5" sx={ { fontWeight: 700, mb: 0.5 } }>
          나의 전시
        </Typography>
        <Typography variant="body2" color="text.secondary">
          { hasExhibitions
            ? `${exhibitions.length}개의 전시가 있습니다`
            : '아직 만든 전시가 없습니다'
          }
        </Typography>
      </Box>

      { /* 전시 그리드 또는 빈 상태 */ }
      { hasExhibitions ? (
        <Grid container spacing={ 2 }>
          { exhibitions.map((exhibition) => (
            <Grid key={ exhibition.id } size={ { xs: 12, sm: 6, md: 4 } }>
              <ExhibitionCard
                title={ exhibition.title }
                description={ exhibition.description }
                theme={ exhibition.theme }
                books={ exhibition.books }
                createdAt={ exhibition.createdAt }
                onClick={ onExhibitionClick ? () => onExhibitionClick(exhibition) : undefined }
                onEdit={ onExhibitionEdit ? () => onExhibitionEdit(exhibition) : undefined }
              />
            </Grid>
          )) }
        </Grid>
      ) : (
        <EmptyState
          title="첫 전시를 만들어보세요"
          description="소중한 책들의 추억을 전시로 구성해보세요. 나만의 추억 전시관을 열 수 있습니다."
          actionLabel="전시 만들기"
          onAction={ onCreate }
        />
      ) }

      { /* 새 전시 만들기 FAB */ }
      { onCreate && hasExhibitions && (
        <Fab
          color="primary"
          onClick={ onCreate }
          sx={ {
            position: 'fixed',
            bottom: 24,
            right: 24,
          } }
          aria-label="새 전시 만들기"
        >
          <Plus size={ 24 } />
        </Fab>
      ) }
    </Box>
  );
}
