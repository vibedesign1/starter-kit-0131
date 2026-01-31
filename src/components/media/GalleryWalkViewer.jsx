import { useState, useRef, useCallback } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Indicator } from '../../common/ui/Indicator';
import { StarRating } from '../shared/StarRating';

/**
 * GalleryWalkViewer 컴포넌트
 *
 * 미술관 복도를 걸어가며 작품을 감상하는 느낌의 책 뷰어.
 * 한 번에 하나의 책을 크게 보여주고 좌우 스와이프/화살표로 이동한다.
 *
 * 동작 방식:
 * 1. 중앙에 현재 책의 표지와 간단한 정보가 표시됨
 * 2. 좌우 화살표 또는 스와이프로 이전/다음 책으로 이동
 * 3. 하단 인디케이터로 현재 위치 표시
 * 4. "자세히 보기" 버튼으로 큐레이터 뷰 진입
 *
 * Props:
 * @param {Array} books - 책 목록 [{coverImage, title, author, comment, rating, ...}] [Required]
 * @param {number} currentIndex - 현재 책 인덱스 [Optional, 기본값: 0]
 * @param {function} onIndexChange - 인덱스 변경 콜백 (index) => void [Optional]
 * @param {function} onBookSelect - 책 선택 (큐레이터 뷰 진입) 콜백 (book, index) => void [Optional]
 * @param {string} indicatorType - 인디케이터 스타일 ('dot' | 'fraction' | 'dash') [Optional, 기본값: 'dot']
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <GalleryWalkViewer
 *   books={bookList}
 *   onBookSelect={(book) => navigateToCuratorView(book)}
 * />
 */
export function GalleryWalkViewer({
  books = [],
  currentIndex: currentIndexProp,
  onIndexChange,
  onBookSelect,
  indicatorType = 'dot',
  sx,
  ...props
}) {
  const [internalIndex, setInternalIndex] = useState(0);
  const currentIndex = currentIndexProp !== undefined ? currentIndexProp : internalIndex;
  const totalBooks = books.length;

  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const containerRef = useRef(null);

  const updateIndex = useCallback((newIndex) => {
    if (onIndexChange) {
      onIndexChange(newIndex);
    } else {
      setInternalIndex(newIndex);
    }
  }, [onIndexChange]);

  const goToNext = useCallback(() => {
    if (currentIndex < totalBooks - 1) {
      updateIndex(currentIndex + 1);
    }
  }, [currentIndex, totalBooks, updateIndex]);

  const goToPrev = useCallback(() => {
    if (currentIndex > 0) {
      updateIndex(currentIndex - 1);
    }
  }, [currentIndex, updateIndex]);

  /** 드래그/스와이프 핸들러 */
  const handleDragStart = (clientX) => {
    setIsDragging(true);
    setDragStart(clientX);
  };

  const handleDragMove = (clientX) => {
    if (!isDragging) return;
    setDragOffset(clientX - dragStart);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    const threshold = 50;
    if (dragOffset > threshold) goToPrev();
    else if (dragOffset < -threshold) goToNext();
    setIsDragging(false);
    setDragOffset(0);
  };

  if (totalBooks === 0) return null;

  const currentBook = books[currentIndex];

  return (
    <Box
      ref={ containerRef }
      sx={ {
        position: 'relative',
        width: '100%',
        minHeight: 500,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        py: 4,
        px: 2,
        userSelect: 'none',
        ...sx,
      } }
      onMouseDown={ (e) => handleDragStart(e.clientX) }
      onMouseMove={ (e) => handleDragMove(e.clientX) }
      onMouseUp={ handleDragEnd }
      onMouseLeave={ () => isDragging && handleDragEnd() }
      onTouchStart={ (e) => handleDragStart(e.touches[0].clientX) }
      onTouchMove={ (e) => handleDragMove(e.touches[0].clientX) }
      onTouchEnd={ handleDragEnd }
      { ...props }
    >
      { /* 책 표지 */ }
      <Box
        sx={ {
          width: { xs: 200, sm: 240, md: 280 },
          aspectRatio: '3/4',
          backgroundColor: 'grey.200',
          overflow: 'hidden',
          mb: 3,
          boxShadow: '0 4px 24px rgba(0,0,0,0.15)',
          transform: isDragging ? `translateX(${dragOffset * 0.3}px)` : 'translateX(0)',
          transition: isDragging ? 'none' : 'transform 0.3s ease',
        } }
      >
        { currentBook.coverImage && (
          <Box
            component="img"
            src={ currentBook.coverImage }
            alt={ currentBook.title }
            draggable={ false }
            sx={ { width: '100%', height: '100%', objectFit: 'cover', pointerEvents: 'none' } }
          />
        ) }
      </Box>

      { /* 책 정보 태그 */ }
      <Box
        sx={ {
          textAlign: 'center',
          maxWidth: 360,
          mb: 3,
        } }
      >
        <Typography variant="h6" sx={ { fontWeight: 600, mb: 0.5 } }>
          { currentBook.title }
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={ { mb: 1 } }>
          { currentBook.author }
        </Typography>

        { currentBook.rating && (
          <StarRating value={ currentBook.rating } isReadOnly size="sm" sx={ { mb: 1.5, justifyContent: 'center' } } />
        ) }

        { currentBook.comment && (
          <Typography
            variant="body2"
            color="text.secondary"
            sx={ {
              display: '-webkit-box',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              fontStyle: 'italic',
              lineHeight: 1.6,
            } }
          >
            &ldquo;{ currentBook.comment }&rdquo;
          </Typography>
        ) }
      </Box>

      { /* 인디케이터 */ }
      { totalBooks > 1 && (
        <Box sx={ { mb: 2 } }>
          <Indicator
            total={ totalBooks }
            current={ currentIndex }
            variant={ indicatorType }
            onClick={ (index) => updateIndex(index) }
          />
        </Box>
      ) }

      { /* 자세히 보기 버튼 */ }
      { onBookSelect && (
        <Button
          variant="outlined"
          size="small"
          onClick={ () => onBookSelect(currentBook, currentIndex) }
          sx={ { textTransform: 'none' } }
        >
          자세히 보기
        </Button>
      ) }

      { /* 좌우 화살표 */ }
      { totalBooks > 1 && (
        <>
          <IconButton
            onClick={ goToPrev }
            disabled={ currentIndex === 0 }
            sx={ {
              position: 'absolute',
              left: { xs: 4, sm: 16 },
              top: '50%',
              transform: 'translateY(-50%)',
              backgroundColor: 'rgba(255,255,255,0.9)',
              '&:hover': { backgroundColor: 'white' },
              '&:disabled': { opacity: 0.3 },
            } }
          >
            <ChevronLeft size={ 20 } />
          </IconButton>
          <IconButton
            onClick={ goToNext }
            disabled={ currentIndex === totalBooks - 1 }
            sx={ {
              position: 'absolute',
              right: { xs: 4, sm: 16 },
              top: '50%',
              transform: 'translateY(-50%)',
              backgroundColor: 'rgba(255,255,255,0.9)',
              '&:hover': { backgroundColor: 'white' },
              '&:disabled': { opacity: 0.3 },
            } }
          >
            <ChevronRight size={ 20 } />
          </IconButton>
        </>
      ) }
    </Box>
  );
}
