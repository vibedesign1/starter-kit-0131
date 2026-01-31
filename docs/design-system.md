# Design System 적용 가이드

## 목차

1. [현재 Storybook 디자인 시스템 구조](#현재-storybook-디자인-시스템-구조)
2. [Figma 디자인 시스템 적용 방법](#figma-디자인-시스템-적용-방법)
3. [토큰별 적용 가이드](#토큰별-적용-가이드)
4. [검증 및 테스트](#검증-및-테스트)
5. [유지보수 가이드](#유지보수-가이드)

---

## 현재 Storybook 디자인 시스템 구조

### 1. 파일 구조

```
src/
├── styles/
│   └── themes/
│       ├── default.js        # 기본 테마 정의 (핵심 파일)
│       └── index.js          # 테마 export 관리
│
└── stories/
    └── style/
        ├── Overview.stories.jsx      # 전체 테마 구조 탐색기
        ├── Colors.stories.jsx        # 색상 시스템
        ├── Typography.stories.jsx    # 타이포그래피 시스템
        ├── Spacing.stories.jsx       # 간격 시스템
        ├── Icons.stories.jsx         # 아이콘 시스템
        └── ComponentTokens.stories.jsx  # 컴포넌트 토큰
```

### 2. 핵심 테마 파일: `src/styles/themes/default.js`

**이 파일이 모든 디자인 토큰의 Single Source of Truth입니다.**

#### 포함된 토큰 카테고리

| 카테고리 | 변수명 | 설명 |
|---------|--------|------|
| **Color** | `palette` | 색상 팔레트 (primary, secondary, text, background 등) |
| **Typography** | `typography` | 폰트 패밀리, 크기, 굵기, 타입 스케일 |
| **Spacing** | `spacing` | 8px 기반 간격 시스템 |
| **Shape** | `shape` | borderRadius 등 모양 토큰 |
| **Shadow** | `customShadows` | elevation별 그림자 스타일 |
| **Breakpoints** | `breakpoints` | 반응형 분기점 |
| **Z-Index** | `zIndex` | 레이어 순서 |
| **Transitions** | `transitions` | 애니메이션 duration, easing |
| **Components** | `components` | MUI 컴포넌트 오버라이드 |

### 3. 현재 적용된 디자인 철학

```javascript
// src/styles/themes/default.js
/**
 * ## 핵심 철학
 * - **Sharp Corners**: borderRadius 0 (날카로운 모서리)
 * - **Dimmed Shadow**: offset 없이 blur만 사용하는 은은한 그림자
 * - **Pure White**: 깔끔한 흰색 배경
 * - **Brand Blue**: Primary 색상 #0000FF
 */
```

#### 주요 토큰 값

**Color**
```javascript
primary: {
  main: '#0000FF',  // 브랜드 블루
  light: '#6666FF',
  dark: '#0000B2',
}
secondary: {
  main: blueGrey[900],  // 어두운 블루그레이
}
```

**Typography**
```javascript
fontFamily: '"Pretendard Variable", ...',
headingFontFamily: '"Outfit", "Pretendard Variable", ...',

h1: { fontSize: '2.5rem', fontWeight: 900 },  // 40px
h2: { fontSize: '2rem', fontWeight: 900 },    // 32px
body1: { fontSize: '1rem' },                  // 16px
```

**Spacing**
```javascript
spacing: 8,  // 기본 단위 8px
// spacing(2) = 16px, spacing(3) = 24px
```

**Shape**
```javascript
borderRadius: 0,  // 직각 모서리
```

**Shadow**
```javascript
customShadows: {
  sm: '0 0 12px rgba(0, 0, 0, 0.06)',  // offset 없이 blur만
  md: '0 0 16px rgba(0, 0, 0, 0.08)',
  lg: '0 0 20px rgba(0, 0, 0, 0.10)',
}
```

### 4. Storybook Style 섹션 구성

각 스토리는 **Storybook Writing Rules** (`/.claude/rules/storybook-writing.md`)를 준수합니다.

| 스토리 | 역할 | 주요 콘텐츠 |
|--------|------|------------|
| **Overview** | 전체 테마 구조 탐색 | TreeNode로 theme 계층 표시, 토큰 테이블 요약 |
| **Colors** | 색상 시스템 | Palette + Semantic Tokens + 사용 예시 |
| **Typography** | 타이포그래피 | Variant별 폰트 크기/굵기 + 사용 예시 |
| **Spacing** | 간격 시스템 | 8px 그리드 스케일 + sx prop 가이드 |
| **Icons** | 아이콘 | Material Symbols 사용법 + Fill 패턴 |

#### 스토리 구조 (Style 섹션 필수 요소)

모든 Style 스토리는 다음 구조를 따릅니다:

```jsx
export const Docs = {
  render: () => {
    const theme = useTheme();

    return (
      <>
        <DocumentTitle {...} />
        <PageContainer>
          {/* 1. 제목 + 1줄 개요 */}
          <Typography variant="h4">Token Name</Typography>
          <Typography variant="body1" color="text.secondary">
            한 줄로 토큰의 역할을 설명합니다.
          </Typography>

          {/* 2. 토큰 구조 (TreeNode) */}
          <SectionTitle title="토큰 구조" />
          <TreeNode ... />

          {/* 3. 토큰 값 (Table) */}
          <SectionTitle title="토큰 값" />
          <Table>...</Table>

          {/* 4. 사용 예시 (Code Block) */}
          <SectionTitle title="사용 예시" />
          <Box component="pre">...</Box>

          {/* 5. Vibe Coding Prompt */}
          <SectionTitle title="Vibe Coding Prompt" />
          <Box component="pre">...</Box>
        </PageContainer>
      </>
    );
  },
};
```

---

## Figma 디자인 시스템 적용 방법

### 전제 조건

1. **Figma 디자인 시스템 준비**
   - Figma에서 Local Variables / Styles 정의 완료
   - Design Tokens 문서화 (색상, 타이포그래피, 간격 등)
   - 토큰 네이밍 규칙 확립

2. **필요한 정보**
   - 색상 팔레트 (Hex 코드)
   - 타이포그래피 스케일 (폰트 패밀리, 크기, 굵기)
   - 간격 단위 (4px, 8px 등)
   - Border Radius 값
   - Shadow 스타일
   - Breakpoints (반응형)

3. **도구 준비**
   - Figma Tokens Plugin (선택 사항)
   - VS Code + Storybook 개발 환경

---

### 적용 프로세스 (5단계)

```
1. Figma 토큰 추출 → 2. 테마 파일 수정 → 3. 스토리 업데이트 → 4. 검증 → 5. 문서화
```

---

## 토큰별 적용 가이드

### 1. Color Tokens (색상)

#### Step 1: Figma에서 색상 토큰 추출

Figma Variables 패널에서 색상 토큰을 다음과 같이 정리:

```
Brand Colors:
  - primary/main: #0000FF
  - primary/light: #6666FF
  - primary/dark: #0000B2
  - secondary/main: #263238

Semantic Colors:
  - error/main: #d32f2f
  - warning/main: #ed6c02
  - success/main: #2e7d32
  - info/main: #0288d1

Text Colors:
  - text/primary: rgba(0,0,0,0.87)
  - text/secondary: rgba(0,0,0,0.6)
  - text/disabled: rgba(0,0,0,0.38)

Background:
  - background/default: #FFFFFF
  - background/paper: #FFFFFF
```

#### Step 2: 테마 파일에 적용

**파일: `src/styles/themes/default.js`**

```javascript
const palette = {
  mode: 'light',

  // Figma의 Brand Colors를 여기에 적용
  primary: {
    light: '#6666FF',    // ← Figma primary/light
    main: '#0000FF',     // ← Figma primary/main
    dark: '#0000B2',     // ← Figma primary/dark
    contrastText: '#FFFFFF',
  },

  secondary: {
    light: blueGrey[700],
    main: '#263238',     // ← Figma secondary/main
    dark: '#1a252b',
    contrastText: '#FFFFFF',
  },

  // Figma의 Semantic Colors
  error: {
    light: '#ef5350',
    main: '#d32f2f',    // ← Figma error/main
    dark: '#c62828',
    contrastText: '#FFFFFF',
  },

  // 이하 동일 패턴으로 적용...
};
```

#### Step 3: Storybook 스토리 업데이트

**파일: `src/stories/style/Colors.stories.jsx`**

1. **토큰 구조 업데이트** (Figma Variables 구조 반영)
```javascript
const tokenStructure = {
  palette: {
    // Figma Variable Collection 구조와 동일하게
    primary: theme.palette.primary,
    secondary: theme.palette.secondary,
    // ...
  },
};
```

2. **토큰 값 테이블 업데이트**
```javascript
const tokenValues = [
  {
    token: 'primary.main',
    value: theme.palette.primary.main,
    description: 'CTA 버튼, 브랜드 강조 (Figma: Brand/Primary/Main)',
  },
  // Figma 토큰과 매핑 정보 포함
];
```

3. **Vibe Coding Prompt 업데이트**
```jsx
<Box component="pre">
{`"primary.main (${theme.palette.primary.main})을 사용해서
CTA 버튼을 만들어줘. 이 색상은 Figma의 Brand/Primary/Main과 동일해."`}
</Box>
```

---

### 2. Typography Tokens (타이포그래피)

#### Step 1: Figma에서 타이포그래피 토큰 추출

Figma Text Styles를 다음과 같이 정리:

```
Font Family:
  - Body: Pretendard Variable
  - Heading: Outfit

Type Scale:
  - Heading/H1: Outfit, 40px, 900
  - Heading/H2: Outfit, 32px, 900
  - Heading/H3: Outfit, 28px, 800
  - Body/Large: Pretendard, 16px, 400
  - Body/Medium: Pretendard, 14px, 400
  - Caption: Pretendard, 12px, 400

Font Weights:
  - Light: 300
  - Regular: 400
  - Medium: 500
  - Bold: 700
  - Black: 900
```

#### Step 2: 테마 파일에 적용

**파일: `src/styles/themes/default.js`**

```javascript
const typography = {
  // Figma Font Family
  fontFamily: '"Pretendard Variable", ...',
  headingFontFamily: '"Outfit", "Pretendard Variable", ...',

  // Figma Font Weights
  fontWeightLight: 300,    // ← Figma Light
  fontWeightRegular: 400,  // ← Figma Regular
  fontWeightMedium: 500,   // ← Figma Medium
  fontWeightBold: 700,     // ← Figma Bold

  // Figma Type Scale
  h1: {
    fontFamily: '"Outfit", ...',
    fontWeight: 900,        // ← Figma Heading/H1 weight
    fontSize: '2.5rem',     // ← Figma Heading/H1 size (40px)
    lineHeight: 1.2,
    letterSpacing: '-0.02em',
  },

  body1: {
    fontSize: '1rem',       // ← Figma Body/Large (16px)
    lineHeight: 1.6,
  },

  // ...
};
```

#### Step 3: 웹폰트 로드 확인

**Figma에서 사용한 폰트가 웹폰트로 로드되어 있는지 확인**

```html
<!-- public/index.html 또는 .storybook/preview-head.html -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap" rel="stylesheet">
<link href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/variable/pretendardvariable-dynamic-subset.css" rel="stylesheet">
```

#### Step 4: Storybook 스토리 업데이트

**파일: `src/stories/style/Typography.stories.jsx`**

```javascript
const tokenValues = [
  {
    variant: 'h1',
    fontSize: theme.typography.h1.fontSize,
    fontWeight: theme.typography.h1.fontWeight,
    usage: '페이지 메인 타이틀 (Figma: Heading/H1)',
  },
  // Figma Text Style 매핑 정보 포함
];
```

---

### 3. Spacing Tokens (간격)

#### Step 1: Figma에서 간격 토큰 추출

Figma에서 사용하는 간격 패턴 확인:

```
Spacing Unit: 8px (또는 4px)

Spacing Scale:
  - 4px (0.5x)
  - 8px (1x)
  - 12px (1.5x)
  - 16px (2x)
  - 24px (3x)
  - 32px (4x)
  - 48px (6x)
  - 64px (8x)
```

#### Step 2: 테마 파일에 적용

**파일: `src/styles/themes/default.js`**

```javascript
// Figma Spacing Unit
const spacing = 8;  // ← Figma의 기본 간격 단위

// spacing(1) = 8px
// spacing(2) = 16px
// spacing(3) = 24px
```

**Figma가 4px 단위를 사용한다면:**
```javascript
const spacing = 4;  // 4px 단위로 변경

// spacing(2) = 8px
// spacing(4) = 16px
// spacing(6) = 24px
```

#### Step 3: Storybook 스토리 업데이트

**파일: `src/stories/style/Spacing.stories.jsx`**

```javascript
const tokenValues = [
  { token: 1, multiplier: '1x', px: 8, usage: 'Figma Auto Layout 기본 간격' },
  { token: 2, multiplier: '2x', px: 16, usage: 'Figma 컴포넌트 패딩' },
  // Figma에서의 사용 사례 포함
];
```

---

### 4. Shape Tokens (모양)

#### Step 1: Figma에서 Border Radius 추출

```
Border Radius:
  - None: 0px
  - Small: 4px
  - Medium: 8px
  - Large: 16px
  - Round: 9999px
```

#### Step 2: 테마 파일에 적용

**파일: `src/styles/themes/default.js`**

```javascript
const shape = {
  borderRadius: 0,  // ← Figma의 기본 borderRadius
};

// 또는 여러 값을 지원하려면:
const shape = {
  borderRadius: 8,        // 기본값 (Figma Medium)
  borderRadiusSmall: 4,   // Figma Small
  borderRadiusLarge: 16,  // Figma Large
};
```

#### Step 3: 컴포넌트 오버라이드 적용

```javascript
const components = {
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: 8,  // ← Figma Button borderRadius
      },
    },
  },
  MuiCard: {
    styleOverrides: {
      root: {
        borderRadius: 16,  // ← Figma Card borderRadius
      },
    },
  },
};
```

---

### 5. Shadow Tokens (그림자)

#### Step 1: Figma에서 Shadow 스타일 추출

Figma Effects 패널에서 Shadow 확인:

```
Shadow/Small:
  - x: 0, y: 2, blur: 4, spread: 0
  - color: rgba(0,0,0,0.1)

Shadow/Medium:
  - x: 0, y: 4, blur: 8, spread: 0
  - color: rgba(0,0,0,0.12)

Shadow/Large:
  - x: 0, y: 8, blur: 16, spread: 0
  - color: rgba(0,0,0,0.15)
```

#### Step 2: 테마 파일에 적용

**파일: `src/styles/themes/default.js`**

```javascript
const customShadows = {
  none: 'none',
  sm: '0 2px 4px rgba(0, 0, 0, 0.1)',     // ← Figma Shadow/Small
  md: '0 4px 8px rgba(0, 0, 0, 0.12)',    // ← Figma Shadow/Medium
  lg: '0 8px 16px rgba(0, 0, 0, 0.15)',   // ← Figma Shadow/Large
};
```

#### Step 3: MUI elevation 매핑

```javascript
const components = {
  MuiPaper: {
    styleOverrides: {
      elevation0: { boxShadow: customShadows.none },
      elevation1: { boxShadow: customShadows.sm },
      elevation2: { boxShadow: customShadows.md },
      elevation3: { boxShadow: customShadows.lg },
    },
  },
};
```

---

### 6. Icons (아이콘)

#### Step 1: Figma에서 아이콘 시스템 확인

```
Icon System: Material Symbols (Google)
Style: Outlined
Size: 24px
Weight: 400
Fill: 0 (off) / 1 (on)
```

#### Step 2: Storybook 스토리 업데이트

**파일: `src/stories/style/Icons.stories.jsx`**

Material Symbols는 이미 구현되어 있으므로, Figma에서 사용한 아이콘 이름만 확인:

```jsx
const fillExamples = [
  { icon: 'favorite', label: 'Like' },     // ← Figma에서 사용한 아이콘
  { icon: 'bookmark', label: 'Bookmark' }, // ← Figma에서 사용한 아이콘
];
```

---

### 7. Breakpoints (반응형)

#### Step 1: Figma에서 Breakpoint 확인

Figma Frame 크기 확인:

```
Mobile: 360px
Tablet: 768px
Desktop: 1440px
Wide: 1920px
```

#### Step 2: 테마 파일에 적용

**파일: `src/styles/themes/default.js`**

```javascript
const breakpoints = {
  values: {
    xs: 0,      // Mobile (Figma 360px 이하)
    sm: 600,    // ← Figma Tablet 시작점으로 조정
    md: 900,    // ← Figma Desktop 시작점으로 조정
    lg: 1440,   // ← Figma Wide 시작점
    xl: 1920,   // ← Figma Ultra Wide
  },
};
```

---

## 검증 및 테스트

### 1. Storybook에서 시각적 확인

```bash
pnpm storybook
```

1. **Style/Overview** 열기 → theme 구조 확인
2. **Style/Colors** 열기 → 색상 팔레트 Figma와 비교
3. **Style/Typography** 열기 → 폰트 크기/굵기 Figma와 비교
4. **Style/Spacing** 열기 → 간격 스케일 Figma와 비교

### 2. 컴포넌트 스토리 확인

기존 컴포넌트 스토리들이 새 테마에서 정상 작동하는지 확인:

```
Custom Component/Card/BookCard
Custom Component/Data/CuratorView
Section/ExhibitionEntrance
```

### 3. 색상 대조 확인

```javascript
// 접근성 확인 (WCAG AA 기준)
// text.primary와 background.default 대비율 4.5:1 이상
// text.secondary와 background.default 대비율 3:1 이상
```

### 4. 반응형 테스트

Storybook의 Viewport 애드온으로 breakpoint 테스트:

```
Mobile (360px) → Tablet (768px) → Desktop (1440px)
```

---

## 유지보수 가이드

### 1. Figma와 동기화 주기

**권장 주기: 디자인 시스템 업데이트마다 (월 1회 또는 분기 1회)**

1. Figma Variables 변경 사항 확인
2. `src/styles/themes/default.js` 업데이트
3. 관련 Storybook 스토리 업데이트
4. 검증 후 배포

### 2. 변경 사항 추적

**파일: `src/styles/themes/default.js`**

주석으로 변경 이력 기록:

```javascript
/**
 * Default Theme
 *
 * 변경 이력:
 * - 2026-01-31: Figma 디자인 시스템 v2.0 반영 (primary 색상 변경)
 * - 2025-12-01: Typography scale 조정 (h1 40px → 48px)
 */
```

### 3. 토큰 네이밍 일관성

Figma와 코드의 토큰 이름을 일관되게 유지:

| Figma | Code |
|-------|------|
| Brand/Primary/Main | `palette.primary.main` |
| Heading/H1 | `typography.h1` |
| Spacing/2x | `spacing(2)` |

### 4. 새 토큰 추가 프로세스

1. **Figma에서 토큰 정의** → 2. **테마 파일 업데이트** → 3. **스토리 문서화** → 4. **컴포넌트 적용**

---

## 자주 묻는 질문 (FAQ)

### Q1. Figma에서 RGB 값을 어떻게 Hex로 변환하나요?

**A:** Figma에서 색상 선택 → 우측 상단 RGB 클릭 → Hex 선택

또는 온라인 변환기 사용: https://www.rapidtables.com/convert/color/rgb-to-hex.html

### Q2. Figma의 Auto Layout Spacing을 MUI spacing으로 매핑하려면?

**A:** Figma Auto Layout의 픽셀 값을 spacing 단위로 나눔

```
Figma: 24px gap
→ MUI: gap: 3 (24 ÷ 8 = 3)
```

### Q3. Figma Text Style의 Line Height를 적용하려면?

**A:** Figma는 % 단위, MUI는 unitless 사용

```
Figma: Line Height 150%
→ MUI: lineHeight: 1.5 (150% = 1.5)
```

### Q4. Figma Component를 Storybook에 어떻게 반영하나요?

**A:**
1. Figma Component의 Props를 분석
2. React 컴포넌트로 구현 (`src/components/`)
3. Storybook 스토리 작성 (`src/stories/custom-component/`)
4. argTypes로 Props 문서화

### Q5. 테마를 여러 개 만들 수 있나요? (Light/Dark Mode 등)

**A:** 가능합니다.

```javascript
// src/styles/themes/dark.js
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#6666FF' },
    background: {
      default: '#121212',
      paper: '#1e1e1e',
    },
  },
});

// src/styles/themes/index.js
export const themes = {
  default: defaultTheme,
  dark: darkTheme,
};
```

---

## 체크리스트

### Figma → Storybook 적용 완료 체크리스트

- [ ] **Color Tokens**
  - [ ] Figma Variables에서 색상 추출 완료
  - [ ] `palette` 객체 업데이트
  - [ ] `Colors.stories.jsx` 업데이트
  - [ ] Storybook에서 색상 확인

- [ ] **Typography Tokens**
  - [ ] Figma Text Styles 추출 완료
  - [ ] 웹폰트 로드 확인
  - [ ] `typography` 객체 업데이트
  - [ ] `Typography.stories.jsx` 업데이트
  - [ ] Storybook에서 폰트 확인

- [ ] **Spacing Tokens**
  - [ ] Figma Spacing 단위 확인
  - [ ] `spacing` 값 업데이트
  - [ ] `Spacing.stories.jsx` 업데이트
  - [ ] Storybook에서 간격 확인

- [ ] **Shape Tokens**
  - [ ] Figma Border Radius 확인
  - [ ] `shape` 객체 업데이트
  - [ ] 컴포넌트 오버라이드 적용

- [ ] **Shadow Tokens**
  - [ ] Figma Effects 추출
  - [ ] `customShadows` 업데이트
  - [ ] MUI elevation 매핑

- [ ] **Icons**
  - [ ] Figma 아이콘 시스템 확인
  - [ ] Material Symbols 사용 확인
  - [ ] `Icons.stories.jsx` 업데이트

- [ ] **Breakpoints**
  - [ ] Figma Frame 크기 확인
  - [ ] `breakpoints` 업데이트

- [ ] **검증**
  - [ ] 모든 Style 스토리 확인
  - [ ] 기존 컴포넌트 스토리 정상 작동 확인
  - [ ] 반응형 테스트 완료
  - [ ] 색상 대조 확인

- [ ] **문서화**
  - [ ] 변경 이력 기록
  - [ ] Vibe Coding Prompt 업데이트

---

## 참고 자료

- [MUI Theme 공식 문서](https://mui.com/material-ui/customization/theming/)
- [Figma Variables 가이드](https://help.figma.com/hc/en-us/articles/15339657135383-Guide-to-variables-in-Figma)
- [WCAG 색상 대비 가이드](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html)
- 프로젝트 규칙: `/.claude/rules/storybook-writing.md`
- 프로젝트 규칙: `/.claude/rules/design-system.md`

---

## 요약

1. **현재 Storybook 디자인 시스템**은 `src/styles/themes/default.js`를 Single Source of Truth로 MUI 기반 토큰을 관리합니다.

2. **Figma 디자인 시스템 적용**은 5단계로 진행합니다:
   - Figma 토큰 추출 → 테마 파일 수정 → 스토리 업데이트 → 검증 → 문서화

3. **각 토큰 카테고리**별로 Figma 값을 MUI 테마 형식으로 변환하여 적용합니다.

4. **Storybook Style 섹션**의 모든 스토리는 `Docs` 스토리에 5개 필수 섹션을 포함합니다:
   - 제목 + 1줄 개요
   - 토큰 구조 (TreeNode)
   - 토큰 값 (Table)
   - 사용 예시 (Code)
   - Vibe Coding Prompt

5. **유지보수**는 Figma와 주기적 동기화를 통해 일관성을 유지합니다.
