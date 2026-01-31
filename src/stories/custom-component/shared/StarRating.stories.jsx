import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { StarRating } from '../../../components/shared/StarRating';

export default {
  title: 'Custom Component/Shared/StarRating',
  component: StarRating,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
## StarRating

별점 표시 및 입력을 위한 컴포넌트.
MUI Rating을 래핑하여 프로젝트 디자인 시스템에 맞게 구성합니다.

### 주요 기능
- 0.5 단위 별점 입력/표시
- 읽기 전용 모드 지원
- 3가지 크기 (sm, md, lg)
        `,
      },
    },
  },
  argTypes: {
    value: {
      control: { type: 'number', min: 0, max: 5, step: 0.5 },
      description: '현재 별점 (0~5)',
    },
    isReadOnly: {
      control: 'boolean',
      description: '읽기 전용 모드',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: '별 크기',
    },
    onChange: {
      action: 'changed',
      description: '별점 변경 핸들러',
    },
  },
};

export const Default = {
  args: {
    value: 3.5,
    isReadOnly: false,
    size: 'md',
  },
};

export const Sizes = {
  render: () => (
    <Stack spacing={ 2 } alignItems="flex-start">
      { ['sm', 'md', 'lg'].map((size) => (
        <Stack key={ size } direction="row" spacing={ 2 } alignItems="center">
          <Typography variant="caption" sx={ { width: 30 } }>{ size }</Typography>
          <StarRating value={ 4 } isReadOnly size={ size } />
        </Stack>
      )) }
    </Stack>
  ),
};

export const ReadOnly = {
  render: () => (
    <Stack spacing={ 1 }>
      { [1, 2, 3, 4, 5].map((v) => (
        <Stack key={ v } direction="row" spacing={ 1 } alignItems="center">
          <StarRating value={ v } isReadOnly size="sm" />
          <Typography variant="caption" color="text.secondary">{ v }점</Typography>
        </Stack>
      )) }
    </Stack>
  ),
};
