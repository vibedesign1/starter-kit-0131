import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Collapse from '@mui/material/Collapse';
import Stack from '@mui/material/Stack';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { StarRating } from '../shared/StarRating';
import { TagInput } from './TagInput';

/**
 * BookDetailForm 컴포넌트
 *
 * 책 상세 정보를 입력하는 복합 폼 컴포넌트.
 * 코멘트, 추억 스토리, 기억에 남는 문장, 별점, 태그 등을 입력한다.
 *
 * 동작 방식:
 * 1. 상단에 책 표지와 기본 정보가 표시됨
 * 2. 필수 입력 필드 (코멘트)가 항상 표시됨
 * 3. "더 많은 정보 입력" 버튼으로 확장 필드 토글
 * 4. 확장 시 추억 스토리, 인용문, 읽은 시기/장소 등 표시
 *
 * Props:
 * @param {object} bookInfo - 기본 책 정보 {title, author, publisher, coverImage} [Required]
 * @param {object} values - 현재 입력 값 {comment, memoryStory, quote, readDate, readPlace, readWith, rating, tags} [Required]
 * @param {function} onChange - 값 변경 핸들러 (fieldName, value) => void [Required]
 * @param {boolean} isExpanded - 확장 입력 필드 표시 [Optional, 기본값: false]
 * @param {function} onToggleExpand - 확장 토글 핸들러 [Optional]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <BookDetailForm
 *   bookInfo={{ title: '데미안', author: '헤르만 헤세', coverImage: 'url' }}
 *   values={{ comment: '', rating: 0, tags: [] }}
 *   onChange={handleFieldChange}
 * />
 */
export function BookDetailForm({
  bookInfo = {},
  values = {},
  onChange,
  isExpanded: isExpandedProp,
  onToggleExpand,
  sx,
  ...props
}) {
  const [internalExpanded, setInternalExpanded] = useState(false);
  const isExpanded = isExpandedProp !== undefined ? isExpandedProp : internalExpanded;

  const handleToggle = () => {
    if (onToggleExpand) {
      onToggleExpand();
    } else {
      setInternalExpanded(!internalExpanded);
    }
  };

  const handleChange = (field) => (event) => {
    const value = event?.target ? event.target.value : event;
    onChange?.(field, value);
  };

  return (
    <Box sx={ { ...sx } } { ...props }>
      { /* 책 기본 정보 표시 */ }
      <Stack direction="row" spacing={ 2 } sx={ { mb: 3 } }>
        <Box
          sx={ {
            width: 80,
            height: 110,
            flexShrink: 0,
            backgroundColor: 'grey.200',
            overflow: 'hidden',
          } }
        >
          { bookInfo.coverImage && (
            <Box
              component="img"
              src={ bookInfo.coverImage }
              alt={ bookInfo.title }
              sx={ { width: '100%', height: '100%', objectFit: 'cover' } }
            />
          ) }
        </Box>
        <Box>
          <Typography variant="subtitle1" sx={ { fontWeight: 600 } }>
            { bookInfo.title }
          </Typography>
          <Typography variant="body2" color="text.secondary">
            { bookInfo.author }{ bookInfo.publisher ? ` | ${bookInfo.publisher}` : '' }
          </Typography>
        </Box>
      </Stack>

      { /* 필수: 나의 코멘트 */ }
      <TextField
        label="나의 코멘트 *"
        placeholder="이 책을 읽고 느낀 점..."
        multiline
        rows={ 3 }
        fullWidth
        value={ values.comment || '' }
        onChange={ handleChange('comment') }
        sx={ { mb: 2 } }
      />

      { /* 필수: 별점 */ }
      <Box sx={ { mb: 2 } }>
        <Typography variant="body2" color="text.secondary" sx={ { mb: 0.5 } }>
          별점
        </Typography>
        <StarRating
          value={ values.rating || 0 }
          onChange={ (e, newValue) => onChange?.('rating', newValue) }
        />
      </Box>

      { /* 선택: 추억 스토리 */ }
      <TextField
        label="추억 스토리"
        placeholder="이 책과 관련된 추억..."
        multiline
        rows={ 3 }
        fullWidth
        value={ values.memoryStory || '' }
        onChange={ handleChange('memoryStory') }
        sx={ { mb: 2 } }
      />

      { /* 확장 필드 토글 버튼 */ }
      <Button
        variant="text"
        size="small"
        onClick={ handleToggle }
        endIcon={ isExpanded ? <ChevronUp size={ 16 } /> : <ChevronDown size={ 16 } /> }
        sx={ { textTransform: 'none', mb: 1 } }
      >
        더 많은 정보 입력
      </Button>

      { /* 확장 필드 */ }
      <Collapse in={ isExpanded }>
        <Stack spacing={ 2 } sx={ { mt: 1 } }>
          <TextField
            label="기억에 남는 문장"
            placeholder="인상 깊은 구절 인용"
            multiline
            rows={ 2 }
            fullWidth
            value={ values.quote || '' }
            onChange={ handleChange('quote') }
          />

          <Stack direction={ { xs: 'column', sm: 'row' } } spacing={ 2 }>
            <TextField
              label="읽은 시기"
              placeholder="예: 2020년 여름"
              fullWidth
              value={ values.readDate || '' }
              onChange={ handleChange('readDate') }
            />
            <TextField
              label="읽은 장소"
              placeholder="예: 동네 도서관"
              fullWidth
              value={ values.readPlace || '' }
              onChange={ handleChange('readPlace') }
            />
          </Stack>

          <TextField
            label="함께한 사람"
            placeholder="예: 어머니, 친구 OOO"
            fullWidth
            value={ values.readWith || '' }
            onChange={ handleChange('readWith') }
          />

          <Box>
            <Typography variant="body2" color="text.secondary" sx={ { mb: 0.5 } }>
              태그
            </Typography>
            <TagInput
              tags={ values.tags || [] }
              onChange={ (newTags) => onChange?.('tags', newTags) }
              placeholder="태그를 입력하세요"
              suggestions={ ['감동', '성장', '추천', '인생책', '함께읽기', '여행'] }
            />
          </Box>
        </Stack>
      </Collapse>
    </Box>
  );
}
