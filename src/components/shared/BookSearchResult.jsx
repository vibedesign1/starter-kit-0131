import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Check } from 'lucide-react';

/**
 * BookSearchResult 컴포넌트
 *
 * 책 검색 결과 리스트의 개별 아이템을 표시하는 컴포넌트.
 * 표지 썸네일, 제목, 저자, 출판사 정보를 가로 레이아웃으로 보여준다.
 *
 * 동작 방식:
 * 1. 책 정보가 가로로 배치됨 (썸네일 + 텍스트)
 * 2. 클릭하면 onClick 핸들러 호출
 * 3. isSelected=true면 체크 아이콘과 배경색 변경
 *
 * Props:
 * @param {string} coverImage - 표지 이미지 URL [Optional]
 * @param {string} title - 책 제목 [Required]
 * @param {string} author - 저자 [Required]
 * @param {string} publisher - 출판사 [Optional]
 * @param {function} onClick - 클릭 핸들러 [Optional]
 * @param {boolean} isSelected - 선택 상태 [Optional, 기본값: false]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <BookSearchResult
 *   coverImage="book.jpg"
 *   title="데미안"
 *   author="헤르만 헤세"
 *   publisher="민음사"
 *   onClick={handleSelect}
 * />
 */
export function BookSearchResult({
  coverImage,
  title,
  author,
  publisher,
  onClick,
  isSelected = false,
  sx,
  ...props
}) {
  return (
    <Box
      onClick={ onClick }
      sx={ {
        display: 'flex',
        alignItems: 'center',
        gap: 2,
        p: 1.5,
        cursor: onClick ? 'pointer' : 'default',
        backgroundColor: isSelected ? 'action.selected' : 'transparent',
        borderBottom: '1px solid',
        borderColor: 'divider',
        transition: 'background-color 0.15s ease',
        '&:hover': onClick ? {
          backgroundColor: isSelected ? 'action.selected' : 'action.hover',
        } : {},
        ...sx,
      } }
      { ...props }
    >
      { /* 표지 썸네일 */ }
      <Box
        sx={ {
          width: 48,
          height: 64,
          flexShrink: 0,
          backgroundColor: 'grey.200',
          overflow: 'hidden',
        } }
      >
        { coverImage && (
          <Box
            component="img"
            src={ coverImage }
            alt={ title }
            sx={ {
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            } }
          />
        ) }
      </Box>

      { /* 텍스트 정보 */ }
      <Box sx={ { flex: 1, minWidth: 0 } }>
        <Typography
          variant="body2"
          sx={ { fontWeight: 600, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' } }
        >
          { title }
        </Typography>
        <Typography variant="caption" color="text.secondary">
          { author }{ publisher ? ` | ${publisher}` : '' }
        </Typography>
      </Box>

      { /* 선택 표시 */ }
      { isSelected && (
        <Box sx={ { color: 'primary.main', flexShrink: 0 } }>
          <Check size={ 20 } />
        </Box>
      ) }
    </Box>
  );
}
