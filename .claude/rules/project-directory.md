# Project Directory Rules (MUST)

새로운 컴포넌트를 추가할 때는 아래 디렉토리 룰을 따른다.

## 디렉토리 구조

```
src/
  components/           # 재사용 가능한 UI 컴포넌트 모음
    card/               # 카드 컴포넌트 (CardContainer, CustomCard, BookCard 등)
    carousel/           # 캐로셀 컴포넌트
    container/          # 컨테이너 컴포넌트 (PageContainer, SectionContainer 등)
    data/               # 데이터 표시 컴포넌트 (CuratorView, ImageDetailModal 등)
    grid/               # 그리드 컴포넌트
    input/              # 입력 컴포넌트 (SearchBar, TagInput, FileDropzone 등)
    layout/             # 레이아웃 컴포넌트 (SplitScreen, FullPageContainer 등)
    media/              # 미디어 컴포넌트 (AspectMedia, ImageCarousel 등)
    navigation/         # 네비게이션 컴포넌트 (GNB, AppShell 등)
    shared/             # 범용 공유 컴포넌트 (StarRating, EmptyState 등)
    style/              # 스타일 가이드 (Icons, Assets + stories)
    typography/         # 타이포그래피 컴포넌트 (Title, QuotedContainer 등)

  data/                 # mock 데이터 및 정적 데이터
    exhibitionMockData.js  # 전시 mock 데이터
    componentTokenMap.js   # 컴포넌트 토큰 매핑

  pages/                # 페이지 레벨 컴포넌트
    MainPage.jsx        # 메인 페이지 컴포넌트
    MainPage.stories.jsx # 페이지 통합 가이드 및 Storybook 문서
    00-Overview.stories.jsx # 프로젝트 개요 문서

  common/               # 공통 유틸 컴포넌트
    ui/                 # UI 요소 (ArrowButton, Indicator 등)
    media/              # 미디어 렌더러 (MediaRenderer 등)

  guide/                # 중요한 컴포넌트를 생성할 때 적용된 가이드 저장 & 업데이트
  templates/            # 다수의 컴포넌트들이 합쳐진 템플릿 컴포넌트
  sections/             # 페이지 내 주요 섹션에 해당하는 컴포넌트
    create/             # 전시 만들기 단계별 섹션 (CreateStep1~4)
  hooks/                # 커스텀 React 훅(hook) 모음
  utils/                # 유틸리티 함수 모음
  styles/               # 전역 스타일 또는 테마 관련 파일
  assets/               # 이미지, 폰트, 비디오 등 정적 자원
    product/            # 제품 이미지 및 비디오

  stories/              # 스토리북 스토리 전용 폴더 (Custom Component 스토리)
    custom-component/   # Custom Component 카테고리 스토리
      card/             # Card 하위 스토리
      data/             # Data 하위 스토리
      input/            # Input 하위 스토리
      media/            # Media 하위 스토리
      shared/           # Shared 하위 스토리
      ...               # 기타 카테고리별 하위 폴더

docs/                   # 프로젝트 문서
  storybook-writing-guide.md # Storybook 작성 가이드

.storybook/             # Storybook 설정
  main.js               # Storybook 메인 설정
  preview.jsx           # Storybook 프리뷰 설정
```

## Storybook 파일 위치 규칙

카테고리에 따라 2가지 패턴을 사용한다:

### Custom Component 카테고리 (분리 배치)
- `src/stories/custom-component/{category}/ComponentName.stories.jsx`에 배치
- `{category}`는 컴포넌트가 위치한 폴더명과 동일 (card, input, media, data, shared 등)
- 예시:
  - `src/stories/custom-component/card/BookCard.stories.jsx`
  - `src/stories/custom-component/shared/StarRating.stories.jsx`
  - `src/stories/custom-component/data/CuratorView.stories.jsx`

### Section / Page 카테고리 (같은 폴더 배치)
- 컴포넌트와 **같은 폴더**에 `.stories.jsx` 파일을 배치
- 예시:
  - `src/sections/ExhibitionEntrance.stories.jsx`
  - `src/sections/create/CreateStep1BasicInfo.stories.jsx`
  - `src/pages/HomePage.stories.jsx`

## Storybook 카테고리 구조

- `1. Style/` - Icons, Assets (디자인 시스템 요소)
- `2. Components/` - 재사용 가능한 UI 컴포넌트들
- `3. Pages/` - 전체 페이지 및 통합 가이드

## 파일 위치와 카테고리 매핑

| 파일 위치 | Storybook 카테고리 |
|----------|-------------------|
| `src/components/card/` | `Custom Component/Card/` |
| `src/components/container/` | `Custom Component/Container/` |
| `src/components/data/` | `Custom Component/Data/` |
| `src/components/input/` | `Custom Component/Input/` |
| `src/components/layout/` | `Custom Component/Layout/` |
| `src/components/media/` | `Custom Component/Media/` |
| `src/components/navigation/` | `Custom Component/Navigation/` |
| `src/components/shared/` | `Custom Component/Shared/` |
| `src/components/typography/` | `Custom Component/Typography/` |
| `src/templates/` | `Template/` |
| `src/sections/` | `Section/` |
| `src/sections/create/` | `Section/CreateExhibition/` |
| `src/pages/` | `Page/` |
