# 나의 추억 전시관 - 컴포넌트/섹션/페이지 구현 계획

## 개요

PRD, UX Flow 문서를 기반으로 화면 구성에 필요한 UI 컴포넌트, 섹션, 페이지를 생성하고 Storybook에 등록한다. 모든 컴포넌트는 순수 프레젠테이션이며 mock 데이터를 사용한다.

> **구현 시작 시 첫 단계**: 이 계획을 `/prompts/plan.md`에 복사하여 기록한다.

---

## 기존 컴포넌트 재활용 매핑

| UX 화면 요소 | 기존 컴포넌트 | 활용 방법 |
|---|---|---|
| 앱 레이아웃 | `AppShell` | GNB + 메인 콘텐츠 영역 |
| 페이지 래퍼 | `PageContainer` | 반응형 max-width 적용 |
| 책 표지+정보 | `CustomCard` | vertical/horizontal 레이아웃 |
| 카드 래퍼 | `CardContainer` | isSelected, isInteractive |
| 복도 뷰 참조 | `ImageCarousel` | 스와이프 로직 패턴 참고 |
| 인디케이터 | `Indicator` | dot/fraction variant 재사용 |
| 전시 입장 hero | `FullPageContainer` | 풀스크린 배경 |
| 큐레이터 뷰 분할 | `SplitScreen` | 표지(좌) + 상세(우) |
| 인용문 표시 | `QuotedContainer` | 기억에 남는 문장 |
| 섹션 타이틀 | `Title` | overline + title + subtitle |
| 책 검색 | `SearchBar` | 그대로 사용 |
| 태그 입력 | `TagInput` | 그대로 사용 |
| 별점 | MUI `Rating` | 래핑하여 StarRating 생성 |
| 단계 표시 | MUI `Stepper` | 래핑하여 StepIndicator 생성 |

---

## 생성 파일 목록

### Phase 0: 인프라

| # | 파일 | 유형 |
|---|---|---|
| 1 | `src/data/exhibitionMockData.js` | mock 데이터 |

### Phase 1: 기본 컴포넌트 (독립적, 병렬 생성 가능)

| # | 파일 | 유형 |
|---|---|---|
| 2 | `src/components/shared/StarRating.jsx` | 컴포넌트 |
| 3 | `src/stories/custom-component/shared/StarRating.stories.jsx` | 스토리 |
| 4 | `src/components/shared/EmptyState.jsx` | 컴포넌트 |
| 5 | `src/stories/custom-component/shared/EmptyState.stories.jsx` | 스토리 |
| 6 | `src/components/shared/StepIndicator.jsx` | 컴포넌트 |
| 7 | `src/stories/custom-component/shared/StepIndicator.stories.jsx` | 스토리 |
| 8 | `src/components/shared/ThemeSelector.jsx` | 컴포넌트 |
| 9 | `src/stories/custom-component/shared/ThemeSelector.stories.jsx` | 스토리 |
| 10 | `src/components/shared/BookSearchResult.jsx` | 컴포넌트 |
| 11 | `src/stories/custom-component/shared/BookSearchResult.stories.jsx` | 스토리 |

### Phase 2: 핵심 컴포넌트 (Phase 1 의존)

| # | 파일 | 유형 |
|---|---|---|
| 12 | `src/components/card/BookCard.jsx` | 컴포넌트 |
| 13 | `src/stories/custom-component/card/BookCard.stories.jsx` | 스토리 |
| 14 | `src/components/input/BookDetailForm.jsx` | 컴포넌트 |
| 15 | `src/stories/custom-component/input/BookDetailForm.stories.jsx` | 스토리 |
| 16 | `src/components/card/ExhibitionCard.jsx` | 컴포넌트 |
| 17 | `src/stories/custom-component/card/ExhibitionCard.stories.jsx` | 스토리 |

### Phase 3: 뷰어 컴포넌트 (Phase 2 의존)

| # | 파일 | 유형 |
|---|---|---|
| 18 | `src/components/media/GalleryWalkViewer.jsx` | 컴포넌트 |
| 19 | `src/stories/custom-component/media/GalleryWalkViewer.stories.jsx` | 스토리 |
| 20 | `src/components/data/CuratorView.jsx` | 컴포넌트 |
| 21 | `src/stories/custom-component/data/CuratorView.stories.jsx` | 스토리 |

### Phase 4: 섹션 (Phase 2-3 의존)

| # | 파일 | 유형 |
|---|---|---|
| 22 | `src/sections/ExhibitionEntrance.jsx` | 섹션 |
| 23 | `src/sections/ExhibitionEntrance.stories.jsx` | 스토리 |
| 24 | `src/sections/ExhibitionListSection.jsx` | 섹션 |
| 25 | `src/sections/ExhibitionListSection.stories.jsx` | 스토리 |
| 26 | `src/sections/create/CreateStep1BasicInfo.jsx` | 섹션 |
| 27 | `src/sections/create/CreateStep1BasicInfo.stories.jsx` | 스토리 |
| 28 | `src/sections/create/CreateStep2AddBooks.jsx` | 섹션 |
| 29 | `src/sections/create/CreateStep2AddBooks.stories.jsx` | 스토리 |
| 30 | `src/sections/create/CreateStep2BookDetail.jsx` | 섹션 |
| 31 | `src/sections/create/CreateStep2BookDetail.stories.jsx` | 스토리 |
| 32 | `src/sections/create/CreateStep3Arrange.jsx` | 섹션 |
| 33 | `src/sections/create/CreateStep3Arrange.stories.jsx` | 스토리 |
| 34 | `src/sections/create/CreateStep4Preview.jsx` | 섹션 |
| 35 | `src/sections/create/CreateStep4Preview.stories.jsx` | 스토리 |
| 36 | `src/sections/GalleryWalkSection.jsx` | 섹션 |
| 37 | `src/sections/GalleryWalkSection.stories.jsx` | 스토리 |
| 38 | `src/sections/CuratorViewSection.jsx` | 섹션 |
| 39 | `src/sections/CuratorViewSection.stories.jsx` | 스토리 |

### Phase 5: 페이지 (Phase 4 의존)

| # | 파일 | 유형 |
|---|---|---|
| 40 | `src/pages/HomePage.jsx` | 페이지 |
| 41 | `src/pages/HomePage.stories.jsx` | 스토리 |
| 42 | `src/pages/CreateExhibitionPage.jsx` | 페이지 |
| 43 | `src/pages/CreateExhibitionPage.stories.jsx` | 스토리 |
| 44 | `src/pages/ExhibitionViewPage.jsx` | 페이지 |
| 45 | `src/pages/ExhibitionViewPage.stories.jsx` | 스토리 |

### 마무리: 규칙 파일 업데이트

| # | 파일 | 유형 |
|---|---|---|
| 46 | `.claude/rules/components.md` | 컴포넌트 목록 업데이트 |

**총 46개 파일** (컴포넌트 10개 + 섹션 9개 + 페이지 3개 + 스토리 22개 + mock 데이터 1개 + 규칙 1개)

---

## 신규 컴포넌트 상세

### 1. StarRating (`src/components/shared/StarRating.jsx`)
- **목적**: 별점 표시/입력. MUI Rating 래핑.
- **Props**: `value`, `onChange`, `isReadOnly`, `size`
- **재사용**: MUI Rating

### 2. EmptyState (`src/components/shared/EmptyState.jsx`)
- **목적**: 빈 상태 표시 (전시 없음, 검색 결과 없음 등)
- **Props**: `icon`, `title`, `description`, `actionLabel`, `onAction`
- **재사용**: MUI Typography, Button, lucide-react 아이콘

### 3. StepIndicator (`src/components/shared/StepIndicator.jsx`)
- **목적**: 전시 만들기 4단계 진행 표시. MUI Stepper 래핑.
- **Props**: `activeStep`, `steps`, `onStepClick`
- **재사용**: MUI Stepper, Step, StepLabel

### 4. ThemeSelector (`src/components/shared/ThemeSelector.jsx`)
- **목적**: 전시 테마 3종 선택 (클래식/모던/서재)
- **Props**: `value`, `onChange`, `themes`
- **재사용**: `CardContainer` (isSelected, isInteractive)

### 5. BookSearchResult (`src/components/shared/BookSearchResult.jsx`)
- **목적**: 책 검색 결과 리스트 아이템
- **Props**: `coverImage`, `title`, `author`, `publisher`, `onClick`, `isSelected`
- **재사용**: MUI ListItem 패턴

### 6. BookCard (`src/components/card/BookCard.jsx`)
- **목적**: 책 미리보기 카드 (표지 + 제목 + 저자 + 코멘트)
- **Props**: `coverImage`, `title`, `author`, `comment`, `rating`, `tags`, `layout`, `isInteractive`, `isSelected`, `onClick`
- **재사용**: `CardContainer`, `AspectMedia`, `StarRating`

### 7. BookDetailForm (`src/components/input/BookDetailForm.jsx`)
- **목적**: 책 상세 정보 입력 폼 (코멘트, 추억, 인용문, 별점, 태그 등)
- **Props**: `bookInfo`, `values`, `onChange`, `isExpanded`, `onToggleExpand`
- **재사용**: MUI TextField, `TagInput`, `StarRating`, `AspectMedia`

### 8. ExhibitionCard (`src/components/card/ExhibitionCard.jsx`)
- **목적**: 홈 화면 전시 카드 (제목, 테마, 책 수, 표지 미리보기)
- **Props**: `title`, `description`, `theme`, `books`, `createdAt`, `onClick`, `onEdit`
- **재사용**: `CardContainer`

### 9. GalleryWalkViewer (`src/components/media/GalleryWalkViewer.jsx`)
- **목적**: 복도 뷰 전체 뷰어 (좌우 스와이프, 인디케이터, 책 정보 표시)
- **Props**: `books`, `currentIndex`, `onIndexChange`, `onBookSelect`, `indicatorType`
- **재사용**: `Indicator`, `BookCard`, 스와이프 로직 (`ImageCarousel` 참고)

### 10. CuratorView (`src/components/data/CuratorView.jsx`)
- **목적**: 큐레이터 뷰 (책 한 권의 모든 상세 정보)
- **Props**: `book`, `currentIndex`, `totalBooks`, `onPrev`, `onNext`, `onBack`
- **재사용**: `SplitScreen`, `QuotedContainer`, `StarRating`, `Title`

---

## 섹션 상세

### 1. ExhibitionEntrance - 전시 입장 화면
- 풀스크린 hero. 전시 제목 + 소개글 + "입장하기" 버튼
- 사용: `FullPageContainer`, `Title`, MUI Button

### 2. ExhibitionListSection - 홈 화면 전시 목록
- 전시 카드 그리드 or EmptyState
- 사용: `ExhibitionCard`, `EmptyState`, MUI Grid, MUI Fab

### 3. CreateStep1BasicInfo - 전시 기본 정보 (Step 1/4)
- 전시 제목, 소개글, 테마 선택
- 사용: `StepIndicator`, `ThemeSelector`, MUI TextField

### 4. CreateStep2AddBooks - 책 추가 (Step 2/4)
- 검색 바 + 검색 결과 + 추가된 책 목록
- 사용: `StepIndicator`, `SearchBar`, `BookSearchResult`, `BookCard`

### 5. CreateStep2BookDetail - 책 상세 입력 (Step 2 하위)
- 책 선택 후 코멘트/추억/문장 입력
- 사용: `BookDetailForm`

### 6. CreateStep3Arrange - 전시 구성 (Step 3/4)
- 배치 방식 선택 + 책 순서 변경
- 사용: `StepIndicator`, `BookCard` (compact), MUI RadioGroup

### 7. CreateStep4Preview - 미리보기 (Step 4/4)
- 복도 뷰 미리보기 + 수정하기/완료하기
- 사용: `StepIndicator`, `GalleryWalkViewer`, MUI Dialog

### 8. GalleryWalkSection - 복도 뷰 섹션
- GalleryWalkViewer + 상단 네비게이션
- 사용: `GalleryWalkViewer`, MUI IconButton

### 9. CuratorViewSection - 큐레이터 뷰 섹션
- CuratorView + 상단 헤더 (책 제목, n/m)
- 사용: `CuratorView`

---

## 페이지 상세

### 1. HomePage
- `AppShell` + `ExhibitionListSection`
- 스토리: Default (전시 있음), Empty (전시 없음)

### 2. CreateExhibitionPage
- `AppShell` + 4단계 섹션 전환 (activeStep 상태)
- 스토리: 각 Step별 스토리

### 3. ExhibitionViewPage
- 입장 -> 복도 뷰 -> 큐레이터 뷰 전환
- 스토리: Entrance, GalleryWalk, CuratorView

---

## Storybook 카테고리 구조

```
Custom Component/
  Card/
    BookCard
    ExhibitionCard
  Input/
    BookDetailForm
  Media/
    GalleryWalkViewer
  Data/
    CuratorView
  Shared/
    StarRating
    EmptyState
    StepIndicator
    ThemeSelector
    BookSearchResult
Section/
  ExhibitionEntrance
  ExhibitionListSection
  GalleryWalkSection
  CuratorViewSection
  CreateExhibition/
    Step1BasicInfo
    Step2AddBooks
    Step2BookDetail
    Step3Arrange
    Step4Preview
Page/
  HomePage
  CreateExhibitionPage
  ExhibitionViewPage
```

---

## 검증 방법

1. `pnpm lint` -- ESLint 검사 통과 확인
2. `pnpm storybook` -- Storybook 실행 후 모든 스토리 렌더링 확인
3. 각 컴포넌트 스토리에서 Controls 탭으로 props 조작 확인
4. 반응형 동작 확인 (Storybook viewport addon)
5. 전체 페이지 스토리에서 화면 전환 플로우 확인
