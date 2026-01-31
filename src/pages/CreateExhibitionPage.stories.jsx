import { CreateExhibitionPage } from './CreateExhibitionPage';
import { mockSearchBooks } from '../data/exhibitionMockData';

export default {
  title: 'Page/CreateExhibitionPage',
  component: CreateExhibitionPage,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
## CreateExhibitionPage

전시 만들기 페이지.
4단계 플로우 (기본정보 → 책추가 → 전시구성 → 미리보기)로 전시를 생성합니다.

### 주요 기능
- 4단계 StepIndicator 진행 표시
- 각 단계별 섹션 전환
- 책 상세 입력 서브 화면
- 내부 상태 관리 (basicInfo, selectedBooks, arrangement)
        `,
      },
    },
  },
  argTypes: {
    initialStep: { control: { type: 'number', min: 0, max: 3 }, description: '시작 단계' },
    onSearch: { action: 'search', description: '검색 핸들러' },
    onComplete: { action: 'complete', description: '전시 완료 핸들러' },
  },
};

export const Step1 = {
  args: {
    initialStep: 0,
    searchResults: mockSearchBooks,
  },
};

export const Step2 = {
  args: {
    initialStep: 1,
    searchResults: mockSearchBooks,
  },
};

export const Step3 = {
  args: {
    initialStep: 2,
    searchResults: mockSearchBooks,
  },
};

export const Step4 = {
  args: {
    initialStep: 3,
    searchResults: mockSearchBooks,
  },
};
