import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { BookCard } from '../../../components/card/BookCard';
import { mockBooks } from '../../../data/exhibitionMockData';

export default {
  title: 'Custom Component/Card/BookCard',
  component: BookCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
## BookCard

책 한 권의 미리보기 정보를 카드 형태로 표시하는 컴포넌트.
복도 뷰, 전시 구성, 검색 결과 등 다양한 곳에서 재사용합니다.

### Layout 옵션
- **compact**: 표지 + 제목 + 저자만 표시
- **standard**: compact + 별점 + 코멘트 미리보기
- **detailed**: standard + 태그 표시
        `,
      },
    },
  },
  argTypes: {
    coverImage: { control: 'text', description: '표지 이미지 URL' },
    title: { control: 'text', description: '책 제목' },
    author: { control: 'text', description: '저자' },
    publisher: { control: 'text', description: '출판사' },
    comment: { control: 'text', description: '코멘트 미리보기' },
    rating: { control: { type: 'number', min: 0, max: 5, step: 0.5 }, description: '별점' },
    tags: { control: 'object', description: '태그 목록' },
    layout: { control: 'select', options: ['compact', 'standard', 'detailed'], description: '표시 수준' },
    isInteractive: { control: 'boolean', description: '호버 효과' },
    isSelected: { control: 'boolean', description: '선택 상태' },
    onClick: { action: 'clicked', description: '클릭 핸들러' },
  },
};

const sampleBook = mockBooks[0];

export const Default = {
  args: {
    coverImage: sampleBook.coverImage,
    title: sampleBook.title,
    author: sampleBook.author,
    publisher: sampleBook.publisher,
    comment: sampleBook.comment,
    rating: sampleBook.rating,
    tags: sampleBook.tags,
    layout: 'standard',
    isInteractive: false,
    isSelected: false,
  },
  render: (args) => (
    <Box sx={ { width: 240 } }>
      <BookCard { ...args } />
    </Box>
  ),
};

export const Layouts = {
  render: () => (
    <Stack direction="row" spacing={ 2 }>
      { ['compact', 'standard', 'detailed'].map((layout) => (
        <Box key={ layout } sx={ { width: 220 } }>
          <BookCard
            coverImage={ sampleBook.coverImage }
            title={ sampleBook.title }
            author={ sampleBook.author }
            comment={ sampleBook.comment }
            rating={ sampleBook.rating }
            tags={ sampleBook.tags }
            layout={ layout }
          />
        </Box>
      )) }
    </Stack>
  ),
};

export const BookGrid = {
  render: () => (
    <Box sx={ { maxWidth: 800 } }>
      <Grid container spacing={ 2 }>
        { mockBooks.slice(0, 4).map((book) => (
          <Grid key={ book.id } size={ { xs: 6, sm: 3 } }>
            <BookCard
              coverImage={ book.coverImage }
              title={ book.title }
              author={ book.author }
              comment={ book.comment }
              rating={ book.rating }
              layout="compact"
              isInteractive
              onClick={ () => console.log(`Clicked: ${book.title}`) }
            />
          </Grid>
        )) }
      </Grid>
    </Box>
  ),
};
