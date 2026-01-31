import { useState } from 'react';
import Box from '@mui/material/Box';
import { BookDetailForm } from '../../../components/input/BookDetailForm';
import { mockBooks } from '../../../data/exhibitionMockData';

export default {
  title: 'Custom Component/Input/BookDetailForm',
  component: BookDetailForm,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
## BookDetailForm

책 상세 정보를 입력하는 복합 폼 컴포넌트.
코멘트, 추억 스토리, 기억에 남는 문장, 별점, 태그 등을 입력합니다.

### 주요 기능
- 책 기본 정보 표시 (표지 + 제목 + 저자)
- 필수/선택 입력 필드 구분
- 확장 필드 토글 (더 많은 정보 입력)
- TagInput 연동
        `,
      },
    },
  },
  argTypes: {
    bookInfo: { control: 'object', description: '기본 책 정보' },
    values: { control: 'object', description: '현재 입력 값' },
    isExpanded: { control: 'boolean', description: '확장 필드 표시' },
    onChange: { action: 'changed', description: '값 변경 핸들러' },
    onToggleExpand: { action: 'toggle-expand', description: '확장 토글 핸들러' },
  },
};

const sampleBook = mockBooks[1];

export const Default = {
  args: {
    bookInfo: {
      title: sampleBook.title,
      author: sampleBook.author,
      publisher: sampleBook.publisher,
      coverImage: sampleBook.coverImage,
    },
    values: {
      comment: '',
      memoryStory: '',
      quote: '',
      readDate: '',
      readPlace: '',
      readWith: '',
      rating: 0,
      tags: [],
    },
    isExpanded: false,
  },
  render: (args) => (
    <Box sx={ { width: 480 } }>
      <BookDetailForm { ...args } />
    </Box>
  ),
};

function FilledStory() {
  const [values, setValues] = useState({
    comment: sampleBook.comment,
    memoryStory: sampleBook.memoryStory,
    quote: sampleBook.quote,
    readDate: sampleBook.readDate,
    readPlace: sampleBook.readPlace,
    readWith: sampleBook.readWith,
    rating: sampleBook.rating,
    tags: sampleBook.tags,
  });

  const handleChange = (field, value) => {
    setValues((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <Box sx={ { width: 480 } }>
      <BookDetailForm
        bookInfo={ {
          title: sampleBook.title,
          author: sampleBook.author,
          publisher: sampleBook.publisher,
          coverImage: sampleBook.coverImage,
        } }
        values={ values }
        onChange={ handleChange }
        isExpanded
      />
    </Box>
  );
}

export const Filled = {
  render: () => <FilledStory />,
};
