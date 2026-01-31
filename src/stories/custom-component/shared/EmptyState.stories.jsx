import { BookOpen, Search, ImageOff } from 'lucide-react';
import { EmptyState } from '../../../components/shared/EmptyState';

export default {
  title: 'Custom Component/Shared/EmptyState',
  component: EmptyState,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
## EmptyState

콘텐츠가 없는 빈 상태를 표시하는 컴포넌트.
전시 없음, 검색 결과 없음 등 다양한 빈 상태에 사용합니다.

### 주요 기능
- 아이콘 + 메시지 + CTA 버튼 구성
- lucide-react 아이콘 지원
- 다양한 빈 상태 시나리오에 재사용 가능
        `,
      },
    },
  },
  argTypes: {
    title: {
      control: 'text',
      description: '주요 안내 메시지',
    },
    description: {
      control: 'text',
      description: '부연 설명',
    },
    actionLabel: {
      control: 'text',
      description: 'CTA 버튼 텍스트',
    },
    onAction: {
      action: 'action-clicked',
      description: 'CTA 버튼 클릭 핸들러',
    },
  },
};

export const Default = {
  args: {
    title: '아직 전시가 없습니다',
    description: '첫 번째 전시를 만들어보세요',
    actionLabel: '새 전시 만들기',
  },
};

export const SearchEmpty = {
  args: {
    icon: Search,
    title: '검색 결과가 없습니다',
    description: '다른 키워드로 검색해보세요',
    actionLabel: '직접 입력하기',
  },
};

export const NoImage = {
  args: {
    icon: ImageOff,
    title: '이미지를 불러올 수 없습니다',
    description: '네트워크 연결을 확인해주세요',
  },
};
