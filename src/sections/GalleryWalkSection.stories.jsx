import { GalleryWalkSection } from './GalleryWalkSection';
import { mockBooks, mockExhibitions } from '../data/exhibitionMockData';

export default {
  title: 'Section/GalleryWalkSection',
  component: GalleryWalkSection,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
## GalleryWalkSection

전시 복도 뷰 섹션.
GalleryWalkViewer에 상단 네비게이션 바를 조합한 전체 화면 섹션입니다.

### 주요 기능
- 상단 네비게이션 (전시 제목, 뒤로가기, 현재/전체 표시)
- GalleryWalkViewer로 책 감상
- 내부 인덱스 상태 관리
        `,
      },
    },
  },
  argTypes: {
    exhibitionTitle: { control: 'text', description: '전시 제목' },
    indicatorType: { control: 'select', options: ['dot', 'fraction', 'dash'], description: '인디케이터 스타일' },
    onBookSelect: { action: 'book-selected', description: '책 선택 핸들러' },
    onBack: { action: 'back', description: '뒤로가기 핸들러' },
  },
};

export const Default = {
  args: {
    exhibitionTitle: mockExhibitions[0].title,
    books: mockBooks,
    indicatorType: 'dot',
  },
};

export const TwoBooks = {
  args: {
    exhibitionTitle: '우리 아이와 함께 읽은 책',
    books: mockBooks.slice(0, 2),
    indicatorType: 'fraction',
  },
};
