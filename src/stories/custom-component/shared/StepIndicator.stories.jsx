import { StepIndicator } from '../../../components/shared/StepIndicator';
import { createExhibitionSteps } from '../../../data/exhibitionMockData';

export default {
  title: 'Custom Component/Shared/StepIndicator',
  component: StepIndicator,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
## StepIndicator

다단계 프로세스의 진행 상태를 표시하는 컴포넌트.
MUI Stepper를 래핑하여 전시 만들기 등 단계별 플로우에 사용합니다.

### 주요 기능
- 단계별 레이블 표시
- 완료/현재/대기 상태 시각적 구분
- 단계 클릭으로 이동 가능 (선택적)
        `,
      },
    },
  },
  argTypes: {
    activeStep: {
      control: { type: 'number', min: 0, max: 3 },
      description: '현재 활성 단계 (0-based)',
    },
    steps: {
      control: 'object',
      description: '단계 레이블 목록',
    },
    onStepClick: {
      action: 'step-clicked',
      description: '단계 클릭 핸들러',
    },
  },
};

export const Default = {
  args: {
    activeStep: 0,
    steps: createExhibitionSteps,
  },
};

export const InProgress = {
  args: {
    activeStep: 2,
    steps: createExhibitionSteps,
  },
};

export const Completed = {
  args: {
    activeStep: 4,
    steps: createExhibitionSteps,
  },
};
