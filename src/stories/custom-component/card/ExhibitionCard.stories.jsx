import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { ExhibitionCard } from '../../../components/card/ExhibitionCard';
import { mockExhibitions } from '../../../data/exhibitionMockData';

export default {
  title: 'Custom Component/Card/ExhibitionCard',
  component: ExhibitionCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
## ExhibitionCard

홈 화면에서 전시 하나를 대표하는 카드 컴포넌트.
전시 제목, 설명, 책 표지 2x2 썸네일 그리드를 표시합니다.

### 주요 기능
- 최대 4개의 책 표지 미리보기 그리드
- 전시 제목, 설명, 책 수 표시
- 편집 메뉴 버튼 (우상단)
- 호버 시 시각적 피드백
        `,
      },
    },
  },
  argTypes: {
    title: { control: 'text', description: '전시 제목' },
    description: { control: 'text', description: '전시 소개글' },
    theme: { control: 'select', options: ['classic', 'modern', 'cozy'], description: '테마' },
    createdAt: { control: 'text', description: '생성일' },
    onClick: { action: 'clicked', description: '클릭 핸들러' },
    onEdit: { action: 'edit-clicked', description: '편집 핸들러' },
  },
};

const sampleExhibition = mockExhibitions[0];

export const Default = {
  args: {
    title: sampleExhibition.title,
    description: sampleExhibition.description,
    theme: sampleExhibition.theme,
    books: sampleExhibition.books,
    createdAt: sampleExhibition.createdAt,
  },
  render: (args) => (
    <Box sx={ { width: 280 } }>
      <ExhibitionCard { ...args } />
    </Box>
  ),
};

export const ExhibitionGrid = {
  render: () => (
    <Box sx={ { maxWidth: 900 } }>
      <Grid container spacing={ 2 }>
        { mockExhibitions.map((exhibition) => (
          <Grid key={ exhibition.id } size={ { xs: 12, sm: 6, md: 4 } }>
            <ExhibitionCard
              title={ exhibition.title }
              description={ exhibition.description }
              theme={ exhibition.theme }
              books={ exhibition.books }
              createdAt={ exhibition.createdAt }
              onClick={ () => console.log(`View: ${exhibition.title}`) }
              onEdit={ () => console.log(`Edit: ${exhibition.title}`) }
            />
          </Grid>
        )) }
      </Grid>
    </Box>
  ),
};
