import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { CardContainer } from './CardContainer';
import { StarRating } from '../shared/StarRating';

/**
 * BookCard 컴포넌트
 *
 * 책 한 권의 미리보기 정보를 카드 형태로 표시하는 컴포넌트.
 * 복도 뷰, 전시 구성, 검색 결과 등 다양한 곳에서 재사용한다.
 *
 * 동작 방식:
 * 1. 책 표지 이미지가 상단에 표시됨
 * 2. 제목, 저자 정보가 표지 아래에 표시됨
 * 3. layout에 따라 코멘트, 별점, 태그 등 추가 정보 표시
 * 4. isInteractive=true면 호버 시 시각적 피드백
 *
 * Props:
 * @param {string} coverImage - 책 표지 이미지 URL [Required]
 * @param {string} title - 책 제목 [Required]
 * @param {string} author - 저자 [Required]
 * @param {string} publisher - 출판사 [Optional]
 * @param {string} comment - 코멘트 미리보기 [Optional]
 * @param {number} rating - 별점 1~5 [Optional]
 * @param {string[]} tags - 태그 목록 [Optional]
 * @param {string} layout - 표시 수준 ('compact' | 'standard' | 'detailed') [Optional, 기본값: 'standard']
 * @param {boolean} isInteractive - 호버 효과 [Optional, 기본값: false]
 * @param {boolean} isSelected - 선택 상태 [Optional, 기본값: false]
 * @param {function} onClick - 클릭 핸들러 [Optional]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <BookCard
 *   coverImage="cover.jpg"
 *   title="데미안"
 *   author="헤르만 헤세"
 *   comment="인생을 바꾼 책"
 *   rating={5}
 *   isInteractive
 * />
 */
export function BookCard({
  coverImage,
  title,
  author,
  publisher,
  comment,
  rating,
  tags = [],
  layout = 'standard',
  isInteractive = false,
  isSelected = false,
  onClick,
  sx,
  ...props
}) {
  return (
    <CardContainer
      variant="outlined"
      padding="none"
      isInteractive={ isInteractive }
      isSelected={ isSelected }
      onClick={ onClick }
      sx={ { width: '100%', ...sx } }
      { ...props }
    >
      { /* 표지 이미지 */ }
      <Box
        sx={ {
          width: '100%',
          aspectRatio: '3/4',
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
      <Box sx={ { p: 2 } }>
        <Typography
          variant="subtitle2"
          sx={ {
            fontWeight: 600,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            mb: 0.5,
          } }
        >
          { title }
        </Typography>

        <Typography variant="caption" color="text.secondary" sx={ { display: 'block', mb: 1 } }>
          { author }{ publisher ? ` | ${publisher}` : '' }
        </Typography>

        { /* standard, detailed: 별점 표시 */ }
        { layout !== 'compact' && rating && (
          <StarRating value={ rating } isReadOnly size="sm" sx={ { mb: 1 } } />
        ) }

        { /* standard, detailed: 코멘트 미리보기 */ }
        { layout !== 'compact' && comment && (
          <Typography
            variant="caption"
            color="text.secondary"
            sx={ {
              display: '-webkit-box',
              WebkitLineClamp: layout === 'detailed' ? 4 : 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              mb: 1,
              lineHeight: 1.5,
            } }
          >
            { comment }
          </Typography>
        ) }

        { /* detailed: 태그 */ }
        { layout === 'detailed' && tags.length > 0 && (
          <Stack direction="row" spacing={ 0.5 } flexWrap="wrap" useFlexGap>
            { tags.map((tag) => (
              <Chip
                key={ tag }
                label={ tag }
                size="small"
                variant="outlined"
                sx={ { fontSize: 11 } }
              />
            )) }
          </Stack>
        ) }
      </Box>
    </CardContainer>
  );
}
