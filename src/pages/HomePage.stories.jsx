import { HomePage } from './HomePage';
import { mockExhibitions } from '../data/exhibitionMockData';

export default {
  title: 'Page/HomePage',
  component: HomePage,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
## HomePage

나의 추억 전시관 홈 화면 페이지.
AppShell + ExhibitionListSection 조합으로 전시 목록을 보여줍니다.

### 주요 기능
- GNB 헤더 + 메인 콘텐츠 레이아웃
- 전시 카드 그리드 (반응형)
- 빈 상태 표시 + 새 전시 만들기 FAB
        `,
      },
    },
  },
  argTypes: {
    onExhibitionClick: { action: 'exhibition-clicked', description: '전시 클릭 핸들러' },
    onExhibitionEdit: { action: 'exhibition-edit', description: '전시 편집 핸들러' },
    onCreate: { action: 'create', description: '새 전시 만들기 핸들러' },
  },
};

export const Default = {
  args: {
    exhibitions: mockExhibitions,
  },
};

export const Empty = {
  args: {
    exhibitions: [],
  },
};
