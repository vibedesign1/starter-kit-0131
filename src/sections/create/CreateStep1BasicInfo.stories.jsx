import { useState } from 'react';
import Box from '@mui/material/Box';
import { CreateStep1BasicInfo } from './CreateStep1BasicInfo';

export default {
  title: 'Section/CreateExhibition/Step1BasicInfo',
  component: CreateStep1BasicInfo,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
## CreateStep1BasicInfo

전시 만들기 1단계: 기본 정보 입력.
전시 제목, 소개글, 테마를 입력하는 섹션입니다.

### 주요 기능
- StepIndicator로 진행 상태 표시
- 전시 제목/소개글 입력
- ThemeSelector로 테마 선택
- 제목 입력 시 "다음" 버튼 활성화
        `,
      },
    },
  },
  argTypes: {
    onNext: { action: 'next', description: '다음 단계 핸들러' },
    onStepClick: { action: 'step-click', description: '스텝 클릭 핸들러' },
  },
};

function DefaultStory(args) {
  const [values, setValues] = useState({
    title: '',
    description: '',
    theme: 'classic',
  });

  const handleChange = (field, value) => {
    setValues((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <Box sx={ { maxWidth: 700 } }>
      <CreateStep1BasicInfo
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
      <CreateStep1BasicInfo
        values={ {
          title: '나를 만든 책들',
          description: '사춘기부터 지금까지, 인생의 전환점이 된 책들을 모았습니다.',
          theme: 'classic',
        } }
        onChange={ () => {} }
        { ...args }
      />
    </Box>
  ),
};
