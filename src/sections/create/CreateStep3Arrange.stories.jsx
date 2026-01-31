import { useState } from 'react';
import Box from '@mui/material/Box';
import { CreateStep3Arrange } from './CreateStep3Arrange';
import { mockBooks } from '../../data/exhibitionMockData';

export default {
  title: 'Section/CreateExhibition/Step3Arrange',
  component: CreateStep3Arrange,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
## CreateStep3Arrange

전시 만들기 3단계: 전시 구성.
배치 방식을 선택하고 책 순서를 확인하는 섹션입니다.

### 주요 기능
- 배치 방식 라디오 선택 (시간순, 추천순, 직접 배치)
- 번호 뱃지가 달린 책 순서 미리보기
- 이전/다음 단계 네비게이션
        `,
      },
    },
  },
  argTypes: {
    onArrangementChange: { action: 'arrangement-changed', description: '배치 방식 변경 핸들러' },
    onNext: { action: 'next', description: '다음 단계 핸들러' },
    onPrev: { action: 'prev', description: '이전 단계 핸들러' },
    onStepClick: { action: 'step-click', description: '스텝 클릭 핸들러' },
  },
};

function DefaultStory(args) {
  const [arrangement, setArrangement] = useState('chronological');

  return (
    <Box sx={ { maxWidth: 800 } }>
      <CreateStep3Arrange
        books={ mockBooks.slice(0, 3) }
        arrangement={ arrangement }
        onArrangementChange={ setArrangement }
        { ...args }
      />
    </Box>
  );
}

function FiveBooksStory(args) {
  const [arrangement, setArrangement] = useState('recommended');

  return (
    <Box sx={ { maxWidth: 800 } }>
      <CreateStep3Arrange
        books={ mockBooks }
        arrangement={ arrangement }
        onArrangementChange={ setArrangement }
        { ...args }
      />
    </Box>
  );
}

export const Default = {
  render: (args) => <DefaultStory { ...args } />,
};

export const FiveBooks = {
  render: (args) => <FiveBooksStory { ...args } />,
};
