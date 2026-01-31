import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { ArrowRight } from 'lucide-react';
import { FullPageContainer } from '../components/layout/FullPageContainer';

/**
 * ExhibitionEntrance 섹션
 *
 * 전시에 입장하기 전 보여지는 풀스크린 히어로 화면.
 * 전시 제목, 소개글, 입장 버튼으로 구성된 랜딩 섹션이다.
 *
 * 동작 방식:
 * 1. 전체 화면에 전시 제목과 소개글이 중앙에 표시됨
 * 2. 배경 이미지 또는 테마 색상이 적용됨
 * 3. "입장하기" 버튼 클릭 시 복도 뷰로 전환
 * 4. 하단에 전시 메타 정보 (책 수, 생성일) 표시
 *
 * Props:
 * @param {string} title - 전시 제목 [Required]
 * @param {string} description - 전시 소개글 [Optional]
 * @param {string} theme - 전시 테마 ('classic' | 'modern' | 'cozy') [Optional, 기본값: 'classic']
 * @param {number} bookCount - 전시에 포함된 책 수 [Optional]
 * @param {string} createdAt - 전시 생성일 [Optional]
 * @param {string} backgroundImage - 배경 이미지 URL [Optional]
 * @param {function} onEnter - 입장 버튼 클릭 핸들러 [Optional]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <ExhibitionEntrance
 *   title="나를 만든 책들"
 *   description="인생의 전환점이 된 책들"
 *   theme="classic"
 *   bookCount={5}
 *   onEnter={handleEnter}
 * />
 */
export function ExhibitionEntrance({
  title,
  description,
  theme = 'classic',
  bookCount,
  createdAt,
  backgroundImage,
  onEnter,
  sx,
  ...props
}) {
  const themeColors = {
    classic: '#F5F0EB',
    modern: '#E8E8E8',
    cozy: '#F0E6D3',
  };

  const bgColor = themeColors[theme] || themeColors.classic;

  return (
    <FullPageContainer
      background={ backgroundImage || bgColor }
      overlay={ backgroundImage ? 0.4 : undefined }
      sx={ { ...sx } }
      { ...props }
    >
      <Stack
        spacing={ 3 }
        alignItems="center"
        sx={ {
          textAlign: 'center',
          maxWidth: 600,
          px: 3,
        } }
      >
        <Typography
          variant="overline"
          sx={ {
            letterSpacing: '0.2em',
            color: backgroundImage ? 'common.white' : 'text.secondary',
          } }
        >
          나의 추억 전시관
        </Typography>

        <Typography
          variant="h3"
          component="h1"
          sx={ {
            fontWeight: 800,
            color: backgroundImage ? 'common.white' : 'text.primary',
          } }
        >
          { title }
        </Typography>

        { description && (
          <Typography
            variant="body1"
            sx={ {
              color: backgroundImage ? 'rgba(255,255,255,0.85)' : 'text.secondary',
              lineHeight: 1.8,
              maxWidth: 480,
            } }
          >
            { description }
          </Typography>
        ) }

        { onEnter && (
          <Button
            variant="contained"
            size="large"
            endIcon={ <ArrowRight size={ 18 } /> }
            onClick={ onEnter }
            sx={ {
              mt: 2,
              textTransform: 'none',
              px: 4,
              py: 1.5,
            } }
          >
            입장하기
          </Button>
        ) }

        { (bookCount || createdAt) && (
          <Stack
            direction="row"
            spacing={ 2 }
            divider={
              <Box
                sx={ {
                  width: 1,
                  height: 12,
                  backgroundColor: backgroundImage ? 'rgba(255,255,255,0.3)' : 'divider',
                  alignSelf: 'center',
                } }
              />
            }
          >
            { bookCount && (
              <Typography
                variant="caption"
                sx={ {
                  color: backgroundImage ? 'rgba(255,255,255,0.7)' : 'text.secondary',
                } }
              >
                { bookCount }권의 책
              </Typography>
            ) }
            { createdAt && (
              <Typography
                variant="caption"
                sx={ {
                  color: backgroundImage ? 'rgba(255,255,255,0.7)' : 'text.secondary',
                } }
              >
                { createdAt }
              </Typography>
            ) }
          </Stack>
        ) }
      </Stack>
    </FullPageContainer>
  );
}
