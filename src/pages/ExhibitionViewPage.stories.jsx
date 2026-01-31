import { ExhibitionViewPage } from './ExhibitionViewPage';
import { mockExhibitions } from '../data/exhibitionMockData';

export default {
  title: 'Page/ExhibitionViewPage',
  component: ExhibitionViewPage,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
## ExhibitionViewPage

전시 감상 페이지.
입장 → 복도 뷰 → 큐레이터 뷰 순서로 전환되는 전시 감상 플로우입니다.

### 주요 기능
- 입장 화면 (ExhibitionEntrance)
- 복도 뷰 (GalleryWalkSection) - 스와이프 감상
- 큐레이터 뷰 (CuratorViewSection) - 상세 보기
- 화면 간 전환 + 뒤로가기
        `,
      },
    },
  },
  argTypes: {
    initialView: { control: 'select', options: ['entrance', 'gallery', 'curator'], description: '시작 화면' },
    onBack: { action: 'back', description: '홈으로 돌아가기 핸들러' },
  },
};

export const Entrance = {
  args: {
    exhibition: mockExhibitions[0],
    initialView: 'entrance',
  },
};

export const GalleryWalk = {
  args: {
    exhibition: mockExhibitions[0],
    initialView: 'gallery',
  },
};

export const CuratorView = {
  args: {
    exhibition: mockExhibitions[0],
    initialView: 'curator',
  },
};
