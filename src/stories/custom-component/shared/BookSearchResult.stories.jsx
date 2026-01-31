import Stack from '@mui/material/Stack';
import { BookSearchResult } from '../../../components/shared/BookSearchResult';
import { mockSearchBooks } from '../../../data/exhibitionMockData';

export default {
  title: 'Custom Component/Shared/BookSearchResult',
  component: BookSearchResult,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
## BookSearchResult

책 검색 결과 리스트의 개별 아이템을 표시하는 컴포넌트.
표지 썸네일, 제목, 저자, 출판사 정보를 가로 레이아웃으로 보여줍니다.

### 주요 기능
- 표지 썸네일 + 텍스트 가로 레이아웃
- 선택 상태 표시 (체크 아이콘 + 배경색)
- 호버 피드백
        `,
      },
    },
  },
  argTypes: {
    coverImage: {
      control: 'text',
      description: '표지 이미지 URL',
    },
    title: {
      control: 'text',
      description: '책 제목',
    },
    author: {
      control: 'text',
      description: '저자',
    },
    publisher: {
      control: 'text',
      description: '출판사',
    },
    isSelected: {
      control: 'boolean',
      description: '선택 상태',
    },
    onClick: {
      action: 'clicked',
      description: '클릭 핸들러',
    },
  },
};

export const Default = {
  args: {
    coverImage: mockSearchBooks[0].coverImage,
    title: mockSearchBooks[0].title,
    author: mockSearchBooks[0].author,
    publisher: mockSearchBooks[0].publisher,
    isSelected: false,
  },
};

export const ResultList = {
  render: () => (
    <Stack sx={ { width: 360 } }>
      { mockSearchBooks.map((book, index) => (
        <BookSearchResult
          key={ book.id }
          coverImage={ book.coverImage }
          title={ book.title }
          author={ book.author }
          publisher={ book.publisher }
          isSelected={ index === 1 }
          onClick={ () => console.log(`Selected: ${book.title}`) }
        />
      )) }
    </Stack>
  ),
};
