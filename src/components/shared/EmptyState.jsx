import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { BookOpen } from 'lucide-react';

/**
 * EmptyState 컴포넌트
 *
 * 콘텐츠가 없는 빈 상태를 표시하는 컴포넌트.
 * 전시 없음, 검색 결과 없음 등 다양한 빈 상태에서 사용한다.
 *
 * 동작 방식:
 * 1. 아이콘과 안내 메시지를 중앙에 표시
 * 2. actionLabel이 있으면 CTA 버튼 표시
 * 3. CTA 버튼 클릭 시 onAction 콜백 호출
 *
 * Props:
 * @param {node} icon - lucide-react 아이콘 컴포넌트 [Optional, 기본값: BookOpen]
 * @param {string} title - 주요 안내 메시지 [Required]
 * @param {string} description - 부연 설명 [Optional]
 * @param {string} actionLabel - CTA 버튼 텍스트 [Optional]
 * @param {function} onAction - CTA 버튼 클릭 핸들러 [Optional]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <EmptyState
 *   title="아직 전시가 없습니다"
 *   description="첫 번째 전시를 만들어보세요"
 *   actionLabel="새 전시 만들기"
 *   onAction={handleCreate}
 * />
 */
export function EmptyState({
  icon,
  title,
  description,
  actionLabel,
  onAction,
  sx,
  ...props
}) {
  const IconComponent = icon || BookOpen;

  return (
    <Box
      sx={ {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        py: 8,
        px: 3,
        textAlign: 'center',
        ...sx,
      } }
      { ...props }
    >
      <Box
        sx={ {
          mb: 3,
          color: 'text.disabled',
        } }
      >
        { typeof IconComponent === 'function'
          ? <IconComponent size={ 48 } strokeWidth={ 1.5 } />
          : IconComponent
        }
      </Box>

      <Typography
        variant="h6"
        sx={ { fontWeight: 600, mb: 1, color: 'text.primary' } }
      >
        { title }
      </Typography>

      { description && (
        <Typography
          variant="body2"
          sx={ { color: 'text.secondary', mb: 3, maxWidth: 320 } }
        >
          { description }
        </Typography>
      ) }

      { actionLabel && onAction && (
        <Button
          variant="contained"
          onClick={ onAction }
          sx={ { textTransform: 'none' } }
        >
          { actionLabel }
        </Button>
      ) }
    </Box>
  );
}
