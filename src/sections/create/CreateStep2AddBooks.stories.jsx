import { useState } from 'react';
import Box from '@mui/material/Box';
import { CreateStep2AddBooks } from './CreateStep2AddBooks';
import { mockBooks, mockSearchBooks } from '../../data/exhibitionMockData';

export default {
  title: 'Section/CreateExhibition/Step2AddBooks',
  component: CreateStep2AddBooks,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
## CreateStep2AddBooks

전시 만들기 2단계: 책 추가.
검색으로 책을 찾고 전시에 추가하는 섹션입니다.

### 주요 기능
- SearchBar로 책 검색
- 검색 결과에서 책 선택/해제
- 추가된 책 목록 카드 그리드 표시
- 책 카드 클릭 시 상세 입력으로 이동
        `,
      },
    },
  },
  argTypes: {
    onSearch: { action: 'search', description: '검색 핸들러' },
    onBookToggle: { action: 'book-toggle', description: '책 선택 토글 핸들러' },
    onBookDetail: { action: 'book-detail', description: '책 상세 핸들러' },
    onNext: { action: 'next', description: '다음 단계 핸들러' },
    onPrev: { action: 'prev', description: '이전 단계 핸들러' },
    onStepClick: { action: 'step-click', description: '스텝 클릭 핸들러' },
  },
};

function DefaultStory(args) {
  const [selected, setSelected] = useState([mockBooks[0], mockBooks[1]]);

  const handleToggle = (book) => {
    setSelected((prev) => {
      const exists = prev.find((b) => b.id === book.id);
      if (exists) return prev.filter((b) => b.id !== book.id);
      return [...prev, book];
    });
  };

  return (
    <Box sx={ { maxWidth: 800 } }>
      <CreateStep2AddBooks
        searchResults={ mockSearchBooks }
        selectedBooks={ selected }
        onBookToggle={ handleToggle }
        { ...args }
      />
    </Box>
  );
}

export const Default = {
  render: (args) => <DefaultStory { ...args } />,
};

export const Empty = {
  render: (args) => (
    <Box sx={ { maxWidth: 800 } }>
      <CreateStep2AddBooks
        searchResults={ [] }
        selectedBooks={ [] }
        { ...args }
      />
    </Box>
  ),
};
