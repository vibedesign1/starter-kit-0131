import Box from '@mui/material/Box';
import { ExhibitionListSection } from './ExhibitionListSection';
import { mockExhibitions } from '../data/exhibitionMockData';

export default {
  title: 'Section/ExhibitionListSection',
  component: ExhibitionListSection,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
## ExhibitionListSection

홈 화면의 전시 목록 섹션.
전시 카드 그리드 또는 빈 상태를 표시하고, 새 전시 만들기 FAB을 제공합니다.

### 주요 기능
- 전시 카드 반응형 그리드 (xs: 1열, sm: 2열, md: 3열)
- 전시가 없을 경우 EmptyState 표시
- 우하단 FAB으로 새 전시 만들기
        `,
      },
    },
  },
  argTypes: {
    onExhibitionClick: { action: 'exhibition-clicked', description: '전시 클릭 핸들러' },
    onExhibitionEdit: { action: 'exhibition-edit', description: '전시 편집 핸들러' },
    onCreate: { action: 'create', description: '새 전시 만들기 핸들러' },
  },
};

export const Default = {
  render: (args) => (
    <Box sx={ { maxWidth: 900 } }>
      <ExhibitionListSection
        exhibitions={ mockExhibitions }
        { ...args }
      />
    </Box>
  ),
};

export const Empty = {
  render: (args) => (
    <Box sx={ { maxWidth: 900 } }>
      <ExhibitionListSection
        exhibitions={ [] }
        { ...args }
      />
    </Box>
  ),
};
