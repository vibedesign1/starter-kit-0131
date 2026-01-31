import { useState } from 'react';
import Box from '@mui/material/Box';
import { CuratorView } from '../../../components/data/CuratorView';
import { mockBooks } from '../../../data/exhibitionMockData';

export default {
  title: 'Custom Component/Data/CuratorView',
  component: CuratorView,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
## CuratorView

큐레이터가 유물을 상세히 설명하는 느낌의 책 상세 뷰.
책 한 권의 모든 정보를 보여주며 이전/다음 네비게이션을 제공합니다.

### 주요 기능
- 책 표지 + 상세 정보 좌우 분할 (반응형)
- 코멘트, 추억 스토리, 인용문 표시
- 읽은 장소/시기/함께한 사람 메타 정보
- 이전/다음 네비게이션
        `,
      },
    },
  },
  argTypes: {
    currentIndex: { control: { type: 'number', min: 0, max: 4 }, description: '현재 인덱스' },
    totalBooks: { control: { type: 'number', min: 1, max: 10 }, description: '전체 책 수' },
    onPrev: { action: 'prev', description: '이전 책 핸들러' },
    onNext: { action: 'next', description: '다음 책 핸들러' },
    onBack: { action: 'back', description: '뒤로가기 핸들러' },
  },
};

export const Default = {
  args: {
    book: mockBooks[1],
    currentIndex: 1,
    totalBooks: mockBooks.length,
  },
};

function InteractiveStory() {
  const [index, setIndex] = useState(0);

  return (
    <Box sx={ { maxWidth: 900, mx: 'auto' } }>
      <CuratorView
        book={ mockBooks[index] }
        currentIndex={ index }
        totalBooks={ mockBooks.length }
        onPrev={ () => setIndex((prev) => Math.max(0, prev - 1)) }
        onNext={ () => setIndex((prev) => Math.min(mockBooks.length - 1, prev + 1)) }
        onBack={ () => console.log('Back to gallery walk') }
      />
    </Box>
  );
}

export const Interactive = {
  render: () => <InteractiveStory />,
};

export const SingleBook = {
  render: () => (
    <Box sx={ { maxWidth: 900, mx: 'auto' } }>
      <CuratorView
        book={ mockBooks[0] }
        currentIndex={ 0 }
        totalBooks={ 1 }
        onBack={ () => console.log('Back') }
      />
    </Box>
  ),
};
