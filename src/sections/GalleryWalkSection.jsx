import { useState } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { ArrowLeft } from 'lucide-react';
import { GalleryWalkViewer } from '../components/media/GalleryWalkViewer';

/**
 * GalleryWalkSection 섹션
 *
 * 전시 복도 뷰 전체 섹션.
 * 상단 네비게이션 바와 GalleryWalkViewer를 조합한다.
 *
 * 동작 방식:
 * 1. 상단에 전시 제목과 뒤로가기 버튼 표시
 * 2. GalleryWalkViewer로 책을 좌우 스와이프하며 감상
 * 3. "자세히 보기" 클릭 시 큐레이터 뷰로 전환
 *
 * Props:
 * @param {string} exhibitionTitle - 전시 제목 [Optional]
 * @param {Array} books - 책 목록 [Required]
 * @param {string} indicatorType - 인디케이터 스타일 ('dot' | 'fraction' | 'dash') [Optional, 기본값: 'dot']
 * @param {function} onBookSelect - 책 선택 (큐레이터 뷰 진입) 핸들러 [Optional]
 * @param {function} onBack - 뒤로가기 핸들러 [Optional]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <GalleryWalkSection
 *   exhibitionTitle="나를 만든 책들"
 *   books={bookList}
 *   onBookSelect={handleBookSelect}
 *   onBack={handleBack}
 * />
 */
export function GalleryWalkSection({
  exhibitionTitle,
  books = [],
  indicatorType = 'dot',
  onBookSelect,
  onBack,
  sx,
  ...props
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <Box
      sx={ {
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'background.default',
        ...sx,
      } }
      { ...props }
    >
      { /* 상단 네비게이션 */ }
      <Box
        sx={ {
          display: 'flex',
          alignItems: 'center',
          px: 2,
          py: 1,
          borderBottom: '1px solid',
          borderColor: 'divider',
        } }
      >
        { onBack && (
          <IconButton onClick={ onBack } size="small" sx={ { mr: 1 } }>
            <ArrowLeft size={ 20 } />
          </IconButton>
        ) }
        { exhibitionTitle && (
          <Typography variant="subtitle2" sx={ { fontWeight: 600 } }>
            { exhibitionTitle }
          </Typography>
        ) }
        <Box sx={ { flex: 1 } } />
        <Typography variant="caption" color="text.secondary">
          { currentIndex + 1 } / { books.length }
        </Typography>
      </Box>

      { /* 갤러리 워크 뷰어 */ }
      <Box sx={ { flex: 1 } }>
        <GalleryWalkViewer
          books={ books }
          currentIndex={ currentIndex }
          onIndexChange={ setCurrentIndex }
          indicatorType={ indicatorType }
          onBookSelect={ onBookSelect }
        />
      </Box>
    </Box>
  );
}
