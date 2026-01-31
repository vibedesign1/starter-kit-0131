import { useState } from 'react';
import Box from '@mui/material/Box';
import { CreateStep2BookDetail } from './CreateStep2BookDetail';
import { mockBooks } from '../../data/exhibitionMockData';

export default {
  title: 'Section/CreateExhibition/Step2BookDetail',
  component: CreateStep2BookDetail,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
## CreateStep2BookDetail

전시 만들기 2단계 하위: 책 상세 정보 입력.
선택한 책에 대한 코멘트, 추억, 별점 등을 입력하는 섹션입니다.

### 주요 기능
- 책 기본 정보 표시 (BookDetailForm)
- 코멘트, 추억 스토리, 별점 입력
- 확장 필드 (인용문, 읽은 시기/장소, 태그)
- 코멘트 입력 시 "저장" 버튼 활성화
        `,
      },
    },
  },
  argTypes: {
    onSave: { action: 'save', description: '저장 핸들러' },
    onBack: { action: 'back', description: '뒤로가기 핸들러' },
  },
};

function DefaultStory(args) {
  const [values, setValues] = useState({
    comment: '',
    memoryStory: '',
    quote: '',
    rating: 0,
    tags: [],
    readDate: '',
    readPlace: '',
    readWith: '',
  });

  const handleChange = (field, value) => {
    setValues((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <Box sx={ { maxWidth: 700 } }>
      <CreateStep2BookDetail
        bookInfo={ {
          title: mockBooks[1].title,
          author: mockBooks[1].author,
          publisher: mockBooks[1].publisher,
          coverImage: mockBooks[1].coverImage,
        } }
        values={ values }
        onChange={ handleChange }
        { ...args }
      />
    </Box>
  );
}

export const Default = {
  render: (args) => <DefaultStory { ...args } />,
};

export const Filled = {
  render: (args) => (
    <Box sx={ { maxWidth: 700 } }>
      <CreateStep2BookDetail
        bookInfo={ {
          title: mockBooks[0].title,
          author: mockBooks[0].author,
          publisher: mockBooks[0].publisher,
          coverImage: mockBooks[0].coverImage,
        } }
        values={ {
          comment: mockBooks[0].comment,
          memoryStory: mockBooks[0].memoryStory,
          quote: mockBooks[0].quote,
          rating: mockBooks[0].rating,
          tags: mockBooks[0].tags,
          readDate: mockBooks[0].readDate,
          readPlace: mockBooks[0].readPlace,
          readWith: mockBooks[0].readWith,
        } }
        onChange={ () => {} }
        { ...args }
      />
    </Box>
  ),
};
