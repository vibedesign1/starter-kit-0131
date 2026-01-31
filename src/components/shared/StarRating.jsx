import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';

/**
 * StarRating 컴포넌트
 *
 * 별점 표시 및 입력을 위한 컴포넌트.
 * MUI Rating을 래핑하여 프로젝트 디자인 시스템에 맞게 구성한다.
 *
 * 동작 방식:
 * 1. isReadOnly=false일 때 별을 클릭하여 별점 선택
 * 2. 호버 시 미리보기 별점 표시
 * 3. isReadOnly=true일 때 현재 값만 표시
 *
 * Props:
 * @param {number} value - 현재 별점 (1~5) [Required]
 * @param {function} onChange - 별점 변경 핸들러 (event, newValue) => void [Optional]
 * @param {boolean} isReadOnly - 읽기 전용 모드 [Optional, 기본값: false]
 * @param {string} size - 별 크기 ('sm' | 'md' | 'lg') [Optional, 기본값: 'md']
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <StarRating value={4} onChange={handleChange} />
 * <StarRating value={3.5} isReadOnly size="sm" />
 */
export function StarRating({
  value = 0,
  onChange,
  isReadOnly = false,
  size = 'md',
  sx,
  ...props
}) {
  const sizeMap = {
    sm: 'small',
    md: 'medium',
    lg: 'large',
  };

  return (
    <Box sx={ { display: 'inline-flex', alignItems: 'center', ...sx } }>
      <Rating
        value={ value }
        onChange={ onChange }
        readOnly={ isReadOnly }
        size={ sizeMap[size] || 'medium' }
        precision={ 0.5 }
        sx={ {
          '& .MuiRating-iconFilled': {
            color: 'primary.main',
          },
        } }
        { ...props }
      />
    </Box>
  );
}
