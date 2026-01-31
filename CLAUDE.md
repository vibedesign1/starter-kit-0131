# Project Rules

## META INSTRUCTION

IMPORTANT: 이 문서와 참조된 모든 규칙은 프로젝트 법률이다.
YOU MUST 코드 작업 전 관련 규칙을 확인하고, 위반 가능성이 있으면 먼저 사용자에게 알려라.
YOU MUST NOT 명시적 허용 없이 규칙을 위반하는 코드를 작성하지 마라.

## 규칙 원본

### CRITICAL (절대 위반 불가)
@.claude/rules/project-summary.md
@.claude/rules/mui-grid-usage.md

### MUST (반드시 준수)
@.claude/rules/code-convention.md
@.claude/rules/design-system.md
@.claude/rules/project-directory.md

### SHOULD (관련 작업 시 준수)
@.claude/rules/storybook-writing.md
@.claude/rules/easy-refactoring.md
@.claude/rules/mui-theme.md

### 참조 문서 (Reference)
@.claude/rules/components.md - 기존 컴포넌트 목록 (새 컴포넌트 생성 전 필수 확인)

## Key Directories

- `src/components/` – 재사용 UI 컴포넌트 (card, carousel, grid 등)
- `src/stories/` – Storybook 스토리 파일 (overview, style, component, template, page)
- `src/common/ui/` – 공통 UI 요소 (ArrowButton, Indicator)
- `src/styles/` – 테마, 전역 스타일
- `src/templates/` – 컴포넌트 조합 템플릿
- `.storybook/` – Storybook 설정

## Common Commands

```bash
pnpm dev              # Vite 개발 서버
pnpm storybook        # Storybook 실행 (포트 6006)
pnpm build            # 프로덕션 빌드
pnpm build-storybook  # Storybook 정적 빌드
pnpm lint             # ESLint 검사
```

## Workflow

### 모든 코드 변경 전 (MANDATORY)
1. 작업 대상 파일/폴더 확인
2. 관련 규칙 확인
3. 규칙 위반 가능성 체크
4. 충돌 시 → 사용자에게 먼저 알림

### 컴포넌트 생성
1. **기존 컴포넌트 확인 (MUST)**:
   - `@.claude/rules/components.md` 참조하여 유사 컴포넌트 존재 여부 확인
   - 재활용 가능한 컴포넌트가 있으면 확장/조합하여 사용
   - 새로 만들어야 할 경우에만 신규 생성 진행
2. project-directory.md에 따라 위치 결정
3. **디자인 시스템 재활용 (MUST)**:
   - 아이콘: lucide-react 아이콘 사용 (`src/components/style/Icons.stories.jsx` 패턴 참고)
   - 타이포그래피: MUI Typography 컴포넌트 사용
   - 기본 컴포넌트: 기존 `src/components/` 내 컴포넌트 우선 활용
   - 커스텀 SVG/아이콘 생성 금지 (lucide-react에 없는 경우만 예외)
4. 구현 (MUI 기반, sx prop 사용)
5. **Storybook 스토리 작성 (MUST)**:
   - 컴포넌트와 같은 폴더에 `ComponentName.stories.jsx` 생성
   - `tags: ['autodocs']` 포함
   - argTypes로 모든 props 문서화
   - Default 스토리 필수, 필요시 Variants 스토리 추가
6. **components.md 업데이트 (MUST)**:
   - `@.claude/rules/components.md`에 새 컴포넌트 정보 추가
   - 형식: `- ComponentName: 설명 (\`경로\`)`
7. 린트 확인 (`pnpm lint`)

### 컴포넌트 수정
1. 현재 동작 파악
2. 영향 범위 확인
3. 수정 (기존 동작 유지)
4. 스토리 업데이트 (props 변경 시 argTypes 동기화)
5. `components.md` 설명 업데이트 (기능 변경 시)

### 컴포넌트 삭제
1. 의존성 확인 (해당 컴포넌트를 사용하는 곳)
2. 컴포넌트 파일 삭제
3. 스토리 파일 삭제
4. `@.claude/rules/components.md`에서 해당 항목 제거

### 리팩토링
1. 외부 동작 변경 없음 확인
2. easy-refactoring.md 참조
3. 기존 스토리 통과 확인

## 규칙 충돌 처리

사용자 요청이 규칙과 충돌할 경우:
1. "이 요청은 [규칙명]과 충돌합니다" 알림
2. 구체적 충돌 내용 설명
3. 사용자가 명시적으로 예외 허용할 때까지 진행 금지

## 기타 

- 항상 한국어로 응답하세요.
- 코드를 생성한 후에 utf-8 기준으로 깨지는 한글이 있는지 확인해주세요. 만약 있다면 수정해주세요. (MUST)
- `/prompts/` 폴더에 정의된 내용은 직접 참조하는 경우만 참고한다. (MUST)
