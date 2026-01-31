import { CuratorViewSection } from './CuratorViewSection';
import { mockBooks } from '../data/exhibitionMockData';

export default {
  title: 'Section/CuratorViewSection',
  component: CuratorViewSection,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
## CuratorViewSection

큐레이터 뷰 섹션.
CuratorView를 래핑하여 내부 상태 관리 (이전/다음 네비게이션)를 제공합니다.

### 주요 기능
- CuratorView 래핑 + 내부 인덱스 상태 관리
- 이전/다음 책 전환
- 뒤로가기 (복도 뷰) 지원
        `,
      },
    },
  },
  argTypes: {
    initialIndex: { control: { type: 'number', min: 0, max: 4 }, description: '시작 인덱스' },
    onBack: { action: 'back', description: '뒤로가기 핸들러' },
  },
};

export const Default = {
  args: {
    books: mockBooks,
    initialIndex: 0,
  },
};

export const StartFromMiddle = {
  args: {
    books: mockBooks,
    initialIndex: 2,
  },
};
