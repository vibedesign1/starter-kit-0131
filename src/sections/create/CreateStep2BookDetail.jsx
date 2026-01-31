import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { ArrowLeft } from 'lucide-react';
import { BookDetailForm } from '../../components/input/BookDetailForm';

/**
 * CreateStep2BookDetail 섹션
 *
 * 전시 만들기 2단계 하위: 책 상세 정보 입력.
 * 선택한 책에 대한 코멘트, 추억, 별점 등을 입력한다.
 *
 * 동작 방식:
 * 1. 상단에 "책 목록으로" 돌아가기 버튼
 * 2. BookDetailForm으로 상세 정보 입력
 * 3. "저장" 버튼으로 입력 완료
 *
 * Props:
 * @param {object} bookInfo - 기본 책 정보 {title, author, publisher, coverImage} [Required]
 * @param {object} values - 현재 입력 값 [Required]
 * @param {function} onChange - 값 변경 핸들러 (fieldName, value) => void [Required]
 * @param {function} onSave - 저장 핸들러 [Optional]
 * @param {function} onBack - 뒤로가기 (책 목록) 핸들러 [Optional]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <CreateStep2BookDetail
 *   bookInfo={{ title: '데미안', author: '헤르만 헤세', coverImage: 'url' }}
 *   values={{ comment: '', rating: 0 }}
 *   onChange={handleChange}
 *   onSave={handleSave}
 *   onBack={handleBack}
 * />
 */
export function CreateStep2BookDetail({
  bookInfo = {},
  values = {},
  onChange,
  onSave,
  onBack,
  sx,
  ...props
}) {
  return (
    <Box sx={ { maxWidth: 600, mx: 'auto', ...sx } } { ...props }>
      { /* 뒤로가기 */ }
      { onBack && (
        <Button
          variant="text"
          startIcon={ <ArrowLeft size={ 16 } /> }
          onClick={ onBack }
          sx={ { textTransform: 'none', mb: 2 } }
        >
          책 목록으로
        </Button>
      ) }

      <Typography variant="h5" sx={ { fontWeight: 700, mb: 1 } }>
        책 상세 정보
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={ { mb: 3 } }>
        이 책과 함께한 추억을 기록해주세요.
      </Typography>

      <BookDetailForm
        bookInfo={ bookInfo }
        values={ values }
        onChange={ onChange }
        sx={ { mb: 3 } }
      />

      { /* 저장 버튼 */ }
      <Stack direction="row" justifyContent="flex-end">
        <Button
          variant="contained"
          onClick={ onSave }
          disabled={ !values.comment }
          sx={ { textTransform: 'none', px: 4 } }
        >
          저장
        </Button>
      </Stack>
    </Box>
  );
}
