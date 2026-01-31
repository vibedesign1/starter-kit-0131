import Box from '@mui/material/Box';
import { GalleryWalkViewer } from '../../../components/media/GalleryWalkViewer';
import { mockBooks } from '../../../data/exhibitionMockData';

export default {
  title: 'Custom Component/Media/GalleryWalkViewer',
  component: GalleryWalkViewer,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
## GalleryWalkViewer

미술관 복도를 걸어가며 작품을 감상하는 느낌의 책 뷰어.
한 번에 하나의 책을 크게 보여주고 좌우 스와이프/화살표로 이동합니다.

### 주요 기능
- 책 표지 + 정보 카드 중앙 배치
- 좌우 스와이프 / 화살표 네비게이션
- 인디케이터 (dot, fraction, dash)
- "자세히 보기" 버튼 (큐레이터 뷰 진입)
        `,
      },
    },
  },
  argTypes: {
    indicatorType: {
      control: 'select',
      options: ['dot', 'fraction', 'dash'],
      description: '인디케이터 스타일',
    },
    onBookSelect: { action: 'book-selected', description: '책 선택 핸들러' },
    onIndexChange: { action: 'index-changed', description: '인덱스 변경 핸들러' },
  },
};

export const Default = {
  args: {
    books: mockBooks,
    indicatorType: 'dot',
  },
  render: (args) => (
    <Box sx={ { backgroundColor: 'background.default', minHeight: '100vh' } }>
      <GalleryWalkViewer { ...args } />
    </Box>
  ),
};

export const FractionIndicator = {
  render: () => (
    <Box sx={ { backgroundColor: 'background.default', minHeight: '100vh' } }>
      <GalleryWalkViewer
        books={ mockBooks }
        indicatorType="fraction"
        onBookSelect={ (book) => console.log(`Selected: ${book.title}`) }
      />
    </Box>
  ),
};

export const TwoBooks = {
  render: () => (
    <Box sx={ { backgroundColor: 'background.default', minHeight: '100vh' } }>
      <GalleryWalkViewer
        books={ mockBooks.slice(0, 2) }
        indicatorType="dot"
        onBookSelect={ (book) => console.log(`Selected: ${book.title}`) }
      />
    </Box>
  ),
};
