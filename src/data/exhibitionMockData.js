/**
 * 나의 추억 전시관 - Mock 데이터
 *
 * 전시, 책, 방명록 등의 샘플 데이터.
 * Storybook에서 컴포넌트/섹션/페이지를 프레젠테이션할 때 사용한다.
 */

/**
 * 테마 옵션 목록
 */
export const mockThemes = [
  {
    id: 'classic',
    name: '클래식 갤러리',
    description: '고전적인 미술관 분위기의 흰 벽과 나무 프레임',
    color: '#F5F0EB',
  },
  {
    id: 'modern',
    name: '모던 뮤지엄',
    description: '현대적이고 미니멀한 디자인',
    color: '#E8E8E8',
  },
  {
    id: 'cozy',
    name: '아늑한 서재',
    description: '따뜻한 조명과 나무 책장 느낌',
    color: '#F0E6D3',
  },
];

/**
 * 책 Mock 데이터
 */
export const mockBooks = [
  {
    id: 'book-1',
    isbn: '9788937460470',
    title: '어린 왕자',
    author: '앙투안 드 생텍쥐페리',
    publisher: '문학동네',
    publishedDate: '2007-04-20',
    coverImage: 'https://picsum.photos/seed/book1/300/450',
    genre: '소설',
    pages: 136,
    description: '사막에 불시착한 비행사가 만난 어린 왕자의 이야기',
    comment: '아이와 함께 도서관에서 읽었던 소중한 책입니다. 매 페이지마다 아이의 눈이 반짝이던 모습이 떠오릅니다.',
    memoryStory: '2019년 가을, 동네 도서관 2층 어린이 열람실에서 아이와 나란히 앉아 읽었습니다. 아이가 여우와 어린 왕자의 대화에서 "길들인다는 건 관계를 맺는 거야"라는 말에 고개를 갸웃하던 모습이 아직도 생생합니다.',
    quote: '가장 중요한 것은 눈에 보이지 않아. 마음으로 보아야만 해.',
    readDate: '2019-10',
    readPlace: '동네 도서관',
    readWith: '딸 수아',
    rating: 5,
    tags: ['감동', '동화', '함께읽기'],
  },
  {
    id: 'book-2',
    isbn: '9788932917245',
    title: '데미안',
    author: '헤르만 헤세',
    publisher: '민음사',
    publishedDate: '2000-05-15',
    coverImage: 'https://picsum.photos/seed/book2/300/450',
    genre: '소설',
    pages: 248,
    description: '에밀 싱클레어의 성장과 자아 탐색 이야기',
    comment: '사춘기 시절 형의 책장에서 우연히 발견한 인생 책입니다. 처음 읽었을 때의 충격은 아직도 잊을 수 없습니다.',
    memoryStory: '중학교 2학년 여름방학, 형의 방에서 뒹굴다가 책장에 꽂힌 이 책의 제목이 눈에 들어왔습니다. "새는 알에서 나오려고 투쟁한다"는 문장을 읽는 순간, 세상이 달라 보이기 시작했습니다.',
    quote: '새는 알에서 나오려고 투쟁한다. 알은 세계이다. 태어나려는 자는 하나의 세계를 깨뜨려야 한다.',
    readDate: '2005-07',
    readPlace: '형의 방',
    readWith: '',
    rating: 5,
    tags: ['성장', '인생책', '사춘기'],
  },
  {
    id: 'book-3',
    isbn: '9788934972464',
    title: '미움받을 용기',
    author: '기시미 이치로, 고가 후미타케',
    publisher: '인플루엔셜',
    publishedDate: '2014-11-17',
    coverImage: 'https://picsum.photos/seed/book3/300/450',
    genre: '자기계발',
    pages: 336,
    description: '아들러 심리학을 대화 형식으로 풀어낸 책',
    comment: '서점에서 우연히 집어든 베스트셀러였는데, 생각보다 깊은 울림이 있었습니다. 주변 지인들에게도 추천했습니다.',
    memoryStory: '퇴근길 서점에 들렀다가 베스트셀러 코너에서 발견했습니다. 카페에 앉아 첫 장을 읽기 시작했는데, 어느새 해가 지고 있었습니다.',
    quote: '인간의 고민은 전부 인간관계의 고민이다.',
    readDate: '2020-03',
    readPlace: '강남역 교보문고 근처 카페',
    readWith: '',
    rating: 4,
    tags: ['추천', '심리학', '베스트셀러'],
  },
  {
    id: 'book-4',
    isbn: '9788998139766',
    title: '나미야 잡화점의 기적',
    author: '히가시노 게이고',
    publisher: '현대문학',
    publishedDate: '2012-12-01',
    coverImage: 'https://picsum.photos/seed/book4/300/450',
    genre: '소설',
    pages: 456,
    description: '시간을 초월한 편지 교환을 통해 펼쳐지는 따뜻한 이야기',
    comment: '감동적인 이야기 구조에 놀랐습니다. 모든 이야기가 연결되는 순간이 인상적입니다.',
    memoryStory: '제주도 여행 중 비가 오는 날, 숙소에서 하루 종일 읽었습니다. 밖에 비가 내리는 소리를 들으며 읽으니 더 몰입이 되었습니다.',
    quote: '',
    readDate: '2018-08',
    readPlace: '제주도 게스트하우스',
    readWith: '아내',
    rating: 4,
    tags: ['감동', '일본소설', '여행'],
  },
  {
    id: 'book-5',
    isbn: '9788901219943',
    title: '코스모스',
    author: '칼 세이건',
    publisher: '사이언스북스',
    publishedDate: '2006-12-20',
    coverImage: 'https://picsum.photos/seed/book5/300/450',
    genre: '과학',
    pages: 584,
    description: '우주와 인류의 역사를 넘나드는 과학 에세이',
    comment: '우주의 광대함 앞에 겸허해지는 경험이었습니다. 별을 보는 시선이 완전히 달라졌습니다.',
    memoryStory: '대학교 1학년 때 교양 수업 교수님이 추천해주신 책입니다. 도서관에서 빌려 한 달 동안 천천히 읽었습니다.',
    quote: '우주는 우리 안에 있습니다. 우리는 별의 물질로 만들어졌습니다.',
    readDate: '2010-04',
    readPlace: '대학교 중앙도서관',
    readWith: '',
    rating: 5,
    tags: ['우주', '과학', '교양'],
  },
];

/**
 * 전시 Mock 데이터
 */
export const mockExhibitions = [
  {
    id: 'exhibition-1',
    title: '나를 만든 책들',
    description: '사춘기부터 지금까지, 인생의 전환점이 된 책들을 모았습니다. 이 책들이 없었다면 지금의 나는 없었을 것입니다.',
    theme: 'classic',
    books: [mockBooks[1], mockBooks[4], mockBooks[2]],
    createdAt: '2025-01-15',
  },
  {
    id: 'exhibition-2',
    title: '우리 아이와 함께 읽은 책',
    description: '딸 수아와 도서관에서 함께 읽었던 소중한 책들의 기록입니다.',
    theme: 'cozy',
    books: [mockBooks[0], mockBooks[3]],
    createdAt: '2025-01-20',
  },
  {
    id: 'exhibition-3',
    title: '서점에서 만난 베스트셀러',
    description: '서점에서 우연히 손에 잡힌 책들. 지인들에게 추천하고 싶은 책 모음입니다.',
    theme: 'modern',
    books: [mockBooks[2], mockBooks[3], mockBooks[0], mockBooks[4]],
    createdAt: '2025-01-25',
  },
];

/**
 * 방명록 Mock 데이터
 */
export const mockGuestbook = [
  {
    id: 'guest-1',
    nickname: '책벌레',
    content: '정말 좋은 책 추천이에요! 저도 어린 왕자 다시 읽어봐야겠어요.',
    createdAt: '2025-01-30T14:30:00',
  },
  {
    id: 'guest-2',
    nickname: '독서왕',
    content: '데미안은 저도 인생책이에요. 전시 구성이 너무 예쁩니다.',
    createdAt: '2025-01-30T11:00:00',
  },
  {
    id: 'guest-3',
    nickname: '밤의도서관',
    content: '코스모스 저도 대학 때 읽었는데, 추억이 새록새록 떠오르네요.',
    createdAt: '2025-01-29T22:15:00',
  },
  {
    id: 'guest-4',
    nickname: '서점지기',
    content: '전시 콘셉트가 정말 좋아요. 저도 나만의 전시를 만들어보고 싶네요!',
    createdAt: '2025-01-29T09:45:00',
  },
];

/**
 * 전시 만들기 스텝 레이블
 */
export const createExhibitionSteps = [
  '기본 정보',
  '책 추가',
  '전시 구성',
  '미리보기',
];

/**
 * 배치 방식 옵션
 */
export const arrangementOptions = [
  { id: 'chronological', label: '시간순 배치', description: '읽은 순서대로 타임라인 형태로 배치' },
  { id: 'recommended', label: '추천순 배치', description: '가장 추천하고 싶은 책부터 배열' },
  { id: 'custom', label: '직접 배치', description: '자유롭게 순서를 정합니다' },
];

/**
 * 검색용 추가 책 데이터 (선택되지 않은 책들)
 */
export const mockSearchBooks = [
  {
    id: 'search-1',
    title: '1984',
    author: '조지 오웰',
    publisher: '민음사',
    coverImage: 'https://picsum.photos/seed/search1/300/450',
  },
  {
    id: 'search-2',
    title: '참을 수 없는 존재의 가벼움',
    author: '밀란 쿤데라',
    publisher: '민음사',
    coverImage: 'https://picsum.photos/seed/search2/300/450',
  },
  {
    id: 'search-3',
    title: '노르웨이의 숲',
    author: '무라카미 하루키',
    publisher: '문학사상',
    coverImage: 'https://picsum.photos/seed/search3/300/450',
  },
  {
    id: 'search-4',
    title: '사피엔스',
    author: '유발 하라리',
    publisher: '김영사',
    coverImage: 'https://picsum.photos/seed/search4/300/450',
  },
  {
    id: 'search-5',
    title: '해리 포터와 마법사의 돌',
    author: 'J.K. 롤링',
    publisher: '문학수첩',
    coverImage: 'https://picsum.photos/seed/search5/300/450',
  },
];
