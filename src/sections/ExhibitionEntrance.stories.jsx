import { ExhibitionEntrance } from './ExhibitionEntrance';
import { mockExhibitions } from '../data/exhibitionMockData';

const sampleExhibition = mockExhibitions[0];

export default {
  title: 'Section/ExhibitionEntrance',
  component: ExhibitionEntrance,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
## ExhibitionEntrance

전시 입장 화면 섹션.
풀스크린 히어로 레이아웃으로 전시 제목, 소개글, 입장 버튼을 표시합니다.

### 주요 기능
- 풀스크린 히어로 레이아웃 (FullPageContainer 기반)
- 테마별 배경색 자동 적용
- 배경 이미지 + 오버레이 지원
- 전시 메타 정보 (책 수, 생성일) 표시
        `,
      },
    },
  },
  argTypes: {
    title: { control: 'text', description: '전시 제목' },
    description: { control: 'text', description: '전시 소개글' },
    theme: { control: 'select', options: ['classic', 'modern', 'cozy'], description: '전시 테마' },
    bookCount: { control: { type: 'number', min: 0, max: 20 }, description: '책 수' },
    createdAt: { control: 'text', description: '생성일' },
    backgroundImage: { control: 'text', description: '배경 이미지 URL' },
    onEnter: { action: 'enter', description: '입장 클릭 핸들러' },
  },
};

export const Default = {
  args: {
    title: sampleExhibition.title,
    description: sampleExhibition.description,
    theme: sampleExhibition.theme,
    bookCount: sampleExhibition.books.length,
    createdAt: sampleExhibition.createdAt,
  },
};

export const WithBackgroundImage = {
  args: {
    title: '우리 아이와 함께 읽은 책',
    description: '딸 수아와 도서관에서 함께 읽었던 소중한 책들의 기록입니다.',
    backgroundImage: 'https://picsum.photos/seed/exhibition-bg/1200/800',
    bookCount: 2,
    createdAt: '2025-01-20',
  },
};

export const ModernTheme = {
  args: {
    title: '서점에서 만난 베스트셀러',
    description: '서점에서 우연히 손에 잡힌 책들.',
    theme: 'modern',
    bookCount: 4,
  },
};
