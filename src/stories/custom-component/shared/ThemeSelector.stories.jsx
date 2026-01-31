import { useState } from 'react';
import { ThemeSelector } from '../../../components/shared/ThemeSelector';

export default {
  title: 'Custom Component/Shared/ThemeSelector',
  component: ThemeSelector,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
## ThemeSelector

전시 테마를 선택하는 컴포넌트.
카드 형태로 테마 옵션을 나열하고 하나를 선택할 수 있습니다.

### 테마 옵션
- **클래식 갤러리**: 고전적인 미술관 분위기
- **모던 뮤지엄**: 현대적이고 미니멀한 디자인
- **아늑한 서재**: 따뜻한 조명과 나무 책장 느낌
        `,
      },
    },
  },
  argTypes: {
    value: {
      control: 'select',
      options: ['classic', 'modern', 'cozy'],
      description: '선택된 테마 ID',
    },
    onChange: {
      action: 'theme-changed',
      description: '테마 변경 핸들러',
    },
  },
};

export const Default = {
  args: {
    value: 'classic',
  },
};

function InteractiveStory() {
  const [selected, setSelected] = useState('classic');
  return (
    <ThemeSelector value={ selected } onChange={ setSelected } />
  );
}

export const Interactive = {
  render: () => <InteractiveStory />,
};
