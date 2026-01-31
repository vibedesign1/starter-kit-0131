# Components

---

## Starter-Kit (범용)

브랜드 독립적인 재사용 가능한 기본 UI 컴포넌트. 어떤 프로젝트에서도 확장/재사용 가능.

### Layout

- PhiSplit: 황금비 분할 레이아웃 (`components/layout/PhiSplit.jsx`)
- SplitScreen: 좌우 분할 레이아웃. ratio, stackAt, stackOrder 지원 (`components/layout/SplitScreen.jsx`)
- HeroStack: 수직 레이아웃. Hero(중앙) + Footer(하단) flex-grow 패턴 (`components/layout/HeroStack.jsx`)
- LineGrid: 그리드 아이템 사이 1px 라인 자동 삽입 (`components/layout/LineGrid.jsx`)
- CenteredAsideLayout: 중앙 + 사이드 레이아웃 (`components/layout/CenteredAsideLayout.jsx`)
- BentoGrid: 벤토 그리드 레이아웃 (`components/layout/BentoGrid.jsx`)
- RatioContainer: 비율 기반 컨테이너 (`components/layout/RatioContainer.jsx`)
- FullPageContainer: 전체 페이지 컨테이너 (`components/layout/FullPageContainer.jsx`)
- StickyBackground: 고정 배경 + 콘텐츠 스크롤 레이아웃. 배경 고정 상태로 콘텐츠 스크롤 후 전체 섹션 스크롤. framer-motion useScroll/useTransform (`components/layout/StickyBackground.jsx`)
- BrokenGridGallery: 브로큰 그리드 갤러리. 비정형 산개 레이아웃 + MouseParallax 내장. items, height, imageScale, spread, zIndex 기반 깊이감 (`components/layout/BrokenGridGallery.jsx`)

### Container

- PageContainer: 반응형 페이지 컨테이너. PC maxWidth 고정, 모바일 100% (`components/container/PageContainer.jsx`)
- SectionContainer: 페이지 섹션 컨테이너. MUI Container 기반. maxWidth, disableGutters, disablePadding, fullHeight, bgcolor, spacing 지원 (`components/container/SectionContainer.jsx`)
- ContentArea: 반응형 콘텐츠 영역. 섹션 내부에서 콘텐츠 maxWidth 제한 및 중앙 정렬. maxWidth, disableGutters 지원 (`components/container/ContentArea.jsx`)
- CarouselContainer: 캐로셀 컨테이너 (`components/container/CarouselContainer.jsx`)

### Card

- CardContainer: 카드 기본 컨테이너. variant, padding, elevation (`components/card/CardContainer.jsx`)
- CustomCard: 미디어+콘텐츠 카드. vertical/horizontal/overlay 레이아웃 (`components/card/CustomCard.jsx`)

### Input

- FileDropzone: 파일 드래그&드롭 영역 (`components/input/FileDropzone.jsx`)
- SearchBar: 검색 입력 바 (`components/input/SearchBar.jsx`)
- TagInput: 태그 입력 필드 (`components/input/TagInput.jsx`)
- UnderlineInput: 밑줄만 있는 텍스트 인풋. size(small/medium/large) (`components/shared/UnderlineInput.jsx`)
- UnderlineSelect: 밑줄만 있는 셀렉트. MUI Select 기반 (`components/shared/UnderlineSelect.jsx`)

### Media

- AspectMedia: 비율 기반 미디어 컨테이너 (`components/media/AspectMedia.jsx`)
- ImageCarousel: 이미지 캐로셀 (`components/media/ImageCarousel.jsx`)
- ImageTransition: 이미지 트랜지션 효과 (`components/media/ImageTransition.jsx`)
- VideoScrubbing: 비디오 스크러빙 (`components/media/VideoScrubbing.jsx`)
- VideoSlide: 가로 스크롤용 비디오 슬라이드. HorizontalScroll 내부에서 세로 스크롤 진행도 기반 비디오 스크러빙. slideIndex, totalSlides 지원 (`components/media/VideoSlide.jsx`)
- CarouselIndicator: 캐로셀 인디케이터 (`components/media/CarouselIndicator.jsx`)
- HorizontalScroll: 세로 스크롤 → 가로 이동 변환 컨테이너. framer-motion 사용 (`components/media/HorizontalScroll.jsx`)
- MaskRevealSection: 스크롤 기반 마스킹 전환. 원형 마스크 확장 + 핫스팟. framer-motion useScroll/useTransform (`components/media/MaskRevealSection.jsx`)

### Navigation

- NavMenu: 네비게이션 메뉴 (`components/navigation/NavMenu.jsx`)
- CategoryTab: 카테고리 탭 (`components/navigation/CategoryTab.jsx`)
- GNB: 반응형 글로벌 네비게이션 바. 데스크탑 메뉴 / 모바일 Drawer (`components/navigation/GNB.jsx`)
- AppShell: 반응형 앱 셸. GNB + 메인 콘텐츠 영역 (`components/navigation/AppShell.jsx`)

### Typography

- FitText: 컨테이너에 맞춤 텍스트 (`components/typography/FitText.jsx`)
- HighlightedTypography: 하이라이트 타이포그래피 (`components/typography/HighlightedTypography.jsx`)
- InlineTypography: 인라인 타이포그래피 (`components/typography/InlineTypography.jsx`)
- StretchedHeadline: 스트레치 헤드라인 (`components/typography/StretchedHeadline.jsx`)
- StyledParagraph: 스타일드 문단 (`components/typography/StyledParagraph.jsx`)
- Title: 타이틀 컴포넌트 (`components/typography/Title.jsx`)
- QuotedContainer: 인용 컨테이너 (`components/typography/QuotedContainer.jsx`)
- SectionTitle: 섹션 타이틀. Adamina 세리프, 중앙 정렬, 반응형 폰트 사이즈 (`components/typography/SectionTitle.jsx`)
- MarqueeText: 스크롤 연동 무한 텍스트. 스크롤 방향에 따라 텍스트 이동. scrollDirection, speed, separator 지원 (`components/typography/MarqueeText.jsx`)

### Shared (범용)

- QuantitySelector: 수량 선택기. - / + 버튼과 숫자 표시 (`components/shared/QuantitySelector.jsx`)
- SelectField: 드롭다운 선택 필드. 라벨 + 선택값 + 화살표 (`components/shared/SelectField.jsx`)
- Breadcrumb: 네비게이션 경로 표시 (`components/shared/Breadcrumb.jsx`)
- ArrowLink: 화살표 링크. → 아이콘 + 텍스트 (`components/shared/ArrowLink.jsx`)
- InteractiveHotspot: 이미지 위 핫스팟. 호버 시 툴팁 노출. position, label, description, tooltipPosition, variant (`components/shared/InteractiveHotspot.jsx`)

### Pages

- Page1: 샘플 페이지 1 (`pages/Page1.jsx`)
- Page2: 샘플 페이지 2 (`pages/Page2.jsx`)
- Page3: 샘플 페이지 3 (`pages/Page3.jsx`)

---

## 나의 추억 전시관 (프로젝트 전용)

책 추억 전시 서비스를 위한 커스텀 컴포넌트, 섹션, 페이지.

### Shared

- StarRating: 별점 표시/입력. MUI Rating 래핑. value, onChange, isReadOnly, size (`components/shared/StarRating.jsx`)
- EmptyState: 빈 상태 표시. icon, title, description, actionLabel, onAction (`components/shared/EmptyState.jsx`)
- StepIndicator: 다단계 진행 표시. MUI Stepper 래핑. activeStep, steps, onStepClick (`components/shared/StepIndicator.jsx`)
- ThemeSelector: 전시 테마 3종 선택. CardContainer 기반. value, onChange, themes (`components/shared/ThemeSelector.jsx`)
- BookSearchResult: 책 검색 결과 리스트 아이템. coverImage, title, author, publisher, isSelected (`components/shared/BookSearchResult.jsx`)

### Card

- BookCard: 책 미리보기 카드. 표지+제목+저자+코멘트+별점. layout(compact/standard/detailed) (`components/card/BookCard.jsx`)
- ExhibitionCard: 전시 카드. 2x2 책 썸네일 그리드+제목+설명. onClick, onEdit (`components/card/ExhibitionCard.jsx`)

### Input

- BookDetailForm: 책 상세 정보 입력 폼. 코멘트, 추억, 인용문, 별점, 태그 입력. 확장 필드 토글 (`components/input/BookDetailForm.jsx`)

### Media

- GalleryWalkViewer: 복도 뷰 뷰어. 좌우 스와이프, 인디케이터, 자세히 보기 버튼 (`components/media/GalleryWalkViewer.jsx`)

### Data

- CuratorView: 큐레이터 상세 뷰. 책 표지+상세정보 분할, 코멘트/추억/인용문/메타 표시, 이전/다음 네비 (`components/data/CuratorView.jsx`)

### Sections

- ExhibitionEntrance: 전시 입장 풀스크린 히어로. FullPageContainer 기반 (`sections/ExhibitionEntrance.jsx`)
- ExhibitionListSection: 홈 전시 목록 그리드 + EmptyState + FAB (`sections/ExhibitionListSection.jsx`)
- GalleryWalkSection: 복도 뷰 섹션. 상단 네비 + GalleryWalkViewer (`sections/GalleryWalkSection.jsx`)
- CuratorViewSection: 큐레이터 뷰 섹션. CuratorView 래핑 + 내부 상태 관리 (`sections/CuratorViewSection.jsx`)
- CreateStep1BasicInfo: 전시 만들기 1단계. 제목, 소개글, 테마 선택 (`sections/create/CreateStep1BasicInfo.jsx`)
- CreateStep2AddBooks: 전시 만들기 2단계. 책 검색 + 추가 (`sections/create/CreateStep2AddBooks.jsx`)
- CreateStep2BookDetail: 전시 만들기 2단계 하위. 책 상세 입력 (`sections/create/CreateStep2BookDetail.jsx`)
- CreateStep3Arrange: 전시 만들기 3단계. 배치 방식 + 순서 확인 (`sections/create/CreateStep3Arrange.jsx`)
- CreateStep4Preview: 전시 만들기 4단계. GalleryWalkViewer 미리보기 + 완료 (`sections/create/CreateStep4Preview.jsx`)

### Pages

- HomePage: 홈 화면. AppShell + ExhibitionListSection (`pages/HomePage.jsx`)
- CreateExhibitionPage: 전시 만들기 페이지. 4단계 플로우 + 내부 상태 관리 (`pages/CreateExhibitionPage.jsx`)
- ExhibitionViewPage: 전시 감상 페이지. 입장→복도뷰→큐레이터뷰 전환 (`pages/ExhibitionViewPage.jsx`)
