import Box from '@mui/material/Box';
import { CreateStep4Preview } from './CreateStep4Preview';
import { mockBooks } from '../../data/exhibitionMockData';

export default {
  title: 'Section/CreateExhibition/Step4Preview',
  component: CreateStep4Preview,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
## CreateStep4Preview

전시 만들기 4단계: 미리보기.
완성된 전시를 복도 뷰(GalleryWalkViewer)로 미리 확인하고 완료하는 섹션입니다.

### 주요 기능
- GalleryWalkViewer로 전시 미리보기
- "수정하기" 버튼으로 이전 단계 이동
- "전시 완료" 버튼으로 생성 완료
        `,
      },
    },
  },
  argTypes: {
    title: { control: 'text', description: '전시 제목' },
    onComplete: { action: 'complete', description: '전시 완료 핸들러' },
    onPrev: { action: 'prev', description: '수정하기 핸들러' },
    onStepClick: { action: 'step-click', description: '스텝 클릭 핸들러' },
  },
};

export const Default = {
  args: {
    title: '나를 만든 책들',
    books: mockBooks.slice(0, 3),
  },
};

export const FiveBooks = {
  args: {
    title: '서점에서 만난 베스트셀러',
    books: mockBooks,
  },
};
