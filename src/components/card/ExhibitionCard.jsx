import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import { MoreVertical } from 'lucide-react';
import { CardContainer } from './CardContainer';

/**
 * ExhibitionCard 컴포넌트
 *
 * 홈 화면에서 전시 하나를 대표하는 카드 컴포넌트.
 * 전시 제목, 설명, 테마, 책 수, 대표 표지 썸네일 그리드를 표시한다.
 *
 * 동작 방식:
 * 1. 상단에 책 표지 썸네일 2x2 그리드 표시 (최대 4개)
 * 2. 하단에 전시 제목과 설명 표시
 * 3. 우상단에 편집 메뉴 버튼 (onEdit 있을 때)
 * 4. 카드 클릭 시 전시 보기로 이동
 *
 * Props:
 * @param {string} title - 전시 제목 [Required]
 * @param {string} description - 전시 소개글 [Optional]
 * @param {Array} books - 책 목록 (표지 이미지 4개까지 미리보기) [Required]
 * @param {string} createdAt - 생성일 [Optional]
 * @param {function} onClick - 클릭 핸들러 [Optional]
 * @param {function} onEdit - 편집 핸들러 [Optional]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <ExhibitionCard
 *   title="나를 만든 책들"
 *   description="인생의 전환점이 된 책들"
 *   books={bookList}
 *   onClick={handleView}
 *   onEdit={handleEdit}
 * />
 */
export function ExhibitionCard({
  title,
  description,
  books = [],
  createdAt,
  onClick,
  onEdit,
  sx,
  ...props
}) {
  const previewBooks = books.slice(0, 4);

  const handleEditClick = (e) => {
    e.stopPropagation();
    onEdit?.();
  };

  return (
    <CardContainer
      variant="outlined"
      padding="none"
      isInteractive
      onClick={ onClick }
      sx={ { width: '100%', ...sx } }
      { ...props }
    >
      { /* 표지 썸네일 그리드 */ }
      <Box sx={ { position: 'relative' } }>
        <Grid container sx={ { aspectRatio: '1/1' } }>
          { previewBooks.map((book, index) => (
            <Grid key={ book.id || index } size={ 6 }>
              <Box
                sx={ {
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'grey.200',
                  overflow: 'hidden',
                } }
              >
                { book.coverImage && (
                  <Box
                    component="img"
                    src={ book.coverImage }
                    alt={ book.title }
                    sx={ { width: '100%', height: '100%', objectFit: 'cover' } }
                  />
                ) }
              </Box>
            </Grid>
          )) }
          { /* 빈 슬롯 채우기 */ }
          { Array.from({ length: Math.max(0, 4 - previewBooks.length) }).map((_, i) => (
            <Grid key={ `empty-${i}` } size={ 6 }>
              <Box sx={ { width: '100%', height: '100%', backgroundColor: 'grey.100' } } />
            </Grid>
          )) }
        </Grid>

        { /* 편집 버튼 */ }
        { onEdit && (
          <IconButton
            size="small"
            onClick={ handleEditClick }
            sx={ {
              position: 'absolute',
              top: 8,
              right: 8,
              backgroundColor: 'rgba(255,255,255,0.9)',
              '&:hover': { backgroundColor: 'white' },
            } }
          >
            <MoreVertical size={ 16 } />
          </IconButton>
        ) }
      </Box>

      { /* 텍스트 정보 */ }
      <Box sx={ { p: 2 } }>
        <Typography
          variant="subtitle2"
          sx={ { fontWeight: 600, mb: 0.5 } }
        >
          { title }
        </Typography>

        { description && (
          <Typography
            variant="caption"
            color="text.secondary"
            sx={ {
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              mb: 1,
            } }
          >
            { description }
          </Typography>
        ) }

        <Typography variant="caption" color="text.disabled">
          { books.length }권{ createdAt ? ` · ${createdAt}` : '' }
        </Typography>
      </Box>
    </CardContainer>
  );
}
