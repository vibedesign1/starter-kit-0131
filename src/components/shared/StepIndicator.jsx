import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Box from '@mui/material/Box';

/**
 * StepIndicator 컴포넌트
 *
 * 다단계 프로세스의 진행 상태를 표시하는 컴포넌트.
 * MUI Stepper를 래핑하여 전시 만들기 등 단계별 플로우에 사용한다.
 *
 * 동작 방식:
 * 1. steps 배열의 각 항목이 단계로 표시
 * 2. activeStep에 해당하는 단계가 활성 상태로 표시
 * 3. 완료된 단계는 체크 표시
 * 4. onStepClick이 있으면 단계를 클릭하여 이동 가능
 *
 * Props:
 * @param {number} activeStep - 현재 활성 단계 (0-based) [Required]
 * @param {string[]} steps - 단계 레이블 목록 [Required]
 * @param {function} onStepClick - 단계 클릭 핸들러 (stepIndex) => void [Optional]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <StepIndicator
 *   activeStep={1}
 *   steps={['기본 정보', '책 추가', '전시 구성', '미리보기']}
 *   onStepClick={handleStepClick}
 * />
 */
export function StepIndicator({
  activeStep = 0,
  steps = [],
  onStepClick,
  sx,
  ...props
}) {
  return (
    <Box sx={ { width: '100%', mb: 4, ...sx } } { ...props }>
      <Stepper activeStep={ activeStep } alternativeLabel>
        { steps.map((label, index) => (
          <Step
            key={ label }
            completed={ index < activeStep }
            sx={ {
              cursor: onStepClick ? 'pointer' : 'default',
            } }
            onClick={ onStepClick ? () => onStepClick(index) : undefined }
          >
            <StepLabel>{ label }</StepLabel>
          </Step>
        )) }
      </Stepper>
    </Box>
  );
}
