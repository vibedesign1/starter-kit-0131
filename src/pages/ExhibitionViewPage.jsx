import { useState } from 'react';
import { ExhibitionEntrance } from '../sections/ExhibitionEntrance';
import { GalleryWalkSection } from '../sections/GalleryWalkSection';
import { CuratorViewSection } from '../sections/CuratorViewSection';

/**
 * ExhibitionViewPage 페이지
 *
 * 전시 감상 페이지.
 * 입장 → 복도 뷰 → 큐레이터 뷰 순서로 전환되는 전시 감상 플로우이다.
 *
 * 동작 방식:
 * 1. 처음에 ExhibitionEntrance (입장 화면) 표시
 * 2. "입장하기" 클릭 시 GalleryWalkSection (복도 뷰) 전환
 * 3. "자세히 보기" 클릭 시 CuratorViewSection (큐레이터 뷰) 전환
 * 4. 큐레이터 뷰에서 "복도 뷰" 클릭 시 복도 뷰로 복귀
 *
 * Props:
 * @param {object} exhibition - 전시 데이터 {title, description, theme, books, createdAt} [Required]
 * @param {string} initialView - 시작 화면 ('entrance' | 'gallery' | 'curator') [Optional, 기본값: 'entrance']
 * @param {function} onBack - 홈으로 돌아가기 핸들러 [Optional]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <ExhibitionViewPage
 *   exhibition={exhibitionData}
 *   onBack={handleBackToHome}
 * />
 */
export function ExhibitionViewPage({
  exhibition = {},
  initialView = 'entrance',
  onBack,
  sx,
  ...props
}) {
  const [currentView, setCurrentView] = useState(initialView);
  const [curatorIndex, setCuratorIndex] = useState(0);

  const books = exhibition.books || [];

  const handleEnter = () => {
    setCurrentView('gallery');
  };

  const handleBookSelect = (book, index) => {
    setCuratorIndex(index);
    setCurrentView('curator');
  };

  const handleBackToGallery = () => {
    setCurrentView('gallery');
  };

  if (currentView === 'curator') {
    return (
      <CuratorViewSection
        books={ books }
        initialIndex={ curatorIndex }
        onBack={ handleBackToGallery }
        sx={ sx }
        { ...props }
      />
    );
  }

  if (currentView === 'gallery') {
    return (
      <GalleryWalkSection
        exhibitionTitle={ exhibition.title }
        books={ books }
        onBookSelect={ handleBookSelect }
        onBack={ onBack || (() => setCurrentView('entrance')) }
        sx={ sx }
        { ...props }
      />
    );
  }

  return (
    <ExhibitionEntrance
      title={ exhibition.title }
      description={ exhibition.description }
      theme={ exhibition.theme }
      bookCount={ books.length }
      createdAt={ exhibition.createdAt }
      onEnter={ handleEnter }
      sx={ sx }
      { ...props }
    />
  );
}
