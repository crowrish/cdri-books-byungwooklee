# CERTICOS BOOKS by Byungwook LEE

CDRI 프론트엔드 사전과제 by 이병욱

## 프로젝트 개요

사용자가 도서를 검색하고, 상세 정보를 확인하며, 관심 있는 책을 찜할 수 있는 웹 애플리케이션입니다.
`React`, `Next.js (App Router)`, `TypeScript`, `React-Query`, `styled-components`를 사용했습니다.

## 실행 방법

1. **저장소 클론**

```bash
git clone <repository-url>
cd cdri-test
```

2. **환경변수 설정**

```bash
# .env
KAKAO_API_KEY=
```

3. **의존성 설치**

```bash
yarn
```

4. **개발 서버 실행**

```bash
yarn dev
```

5. **브라우저에서 확인**
   http://localhost:3000

## 폴더 구조

### `src/app` - 페이지

```
app/
├── layout.tsx   # 전역 레이아웃
├── page.tsx     # 도서 검색 페이지 (/)
└── favorite/
    └── page.tsx # 찜한 책 페이지 (/favorite)
```

### `src/components/` - 아토믹 디자인 패턴

컴포넌트를 재사용성에 따라 4단계로 구성했습니다.

#### `atoms/` - Atom 컴포넌트

```
atoms/
├── Button/     # 버튼
├── BookImage/  # 책 전용 이미지
├── Container/  # 컨테이너
├── Footer/     # 푸터
├── LikeButton/ # 찜하기 버튼
├── NoData/     # 데이터 없음 표시
├── Typography/ # 텍스트
└── index.ts
```

#### `molecules/` - Molecule 컴포넌트

```
molecules/
├── BookItem/       # 도서 목록 아이템
├── BookDetailItem/ # 도서 상세 정보 아이템
├── BookToggleItem/ # 도서 토글 아이템 (위 2개 포함)
├── Pagination/     # 페이지네이션
├── SearchInput/    # 검색창 + 히스토리
└── index.ts
```

#### `organisms/` - Organism 컴포넌트

```
organisms/
├── NavigationBar/     # 네비게이션바
├── DetailSearchModal/ # 상세 검색 모달
└── index.ts
```

#### `templates/` - Template 컴포넌트

```
templates/
├── BookSearch/   # 도서 검색 템플릿
├── FavoriteBook/ # 찜한 책 템플릿
└── index.ts
```

### `src/hooks/` - 커스텀 훅

```
hooks/
├── useBooks.ts         # 도서 검색 API 호출 및 상태 (React-Query)
├── useFavoriteBooks.ts # 찜하기 (localStorage)
├── useSearchHistory.ts # 검색 기록 (localStorage)
└── index.ts
```

### `src/apis/` - API

```
apis/
└── kakao-api.server.ts # 카카오 도서 검색 API (서버 액션)
```

### `src/libs/` - 라이브러리

```
libs/
├── server-fetcher.ts            # Axios 기반 서버 HTTP 클라이언트
├── StyledComponentsRegistry.tsx # SSR styled-components 설정
└── index.ts
```

### `src/providers/` - 프로바이더

```
providers/
├── ReactQueryProvider.tsx       # React Query 프로바이더
├── StyledComponentsProvider.tsx # styled-components 테마
└── index.ts
```

### `src/styles/` - 스타일

```
styles/
├── GlobalStyle.tsx # 글로벌 스타일, CSS 리셋, 기본 스타일
├── theme.ts        # 테마 색상, 타이포그래피
└── index.ts
```

### `src/types/` - 인터페이스

```
types/
├── index.ts # 공통 타입 정의
└── kakao.ts # 카카오 API 응답 타입
```

### `public/` - 이미지

```
public/
├── book-default.png    # 책 이미지 로딩 실패 시 기본 이미지
├── nobook.png          # 검색 결과 없을 때 표시 이미지
└── icon/
    ├── like-fill.png   # 찜하기 활성화 아이콘
    └── like-border.png # 찜하기 비활성화 아이콘
```

## 주요 코드 설명

### 1. 상태관리 + 훅

#### **useBooks**

검색 결과를 `react-query`를 사용해 api를 호출하고 상태를 관리합니다.

```ts
// src/hooks/useBooks.ts
import { useQuery } from '@tanstack/react-query';

import { searchBooks } from '@/apis/kakao-api.server';
import type { iBookSearchParams } from '@/types';

const useBooks = (params: iBookSearchParams) => {
  return useQuery({
    queryKey: ['books', params],
    queryFn: () => searchBooks(params), // <- api 호출
    enabled: !!params.query,
  });
};

export default useBooks;
```

```typescript
const { data: books } = useBooks({ query: searchQuery });
```

#### **useFavoriteBooks**, **useSearchHistory**

찜하기, 검색 기록을 `localStorage`를 이용해 브라우저에 저장합니다.

### 2. 서버 API

서버 액션으로 API와 시크릿을 숨길 수 있습니다. `axios` 라이브러리를 래핑한 `serverFetcher`를 사용합니다.

```typescript
'use server';

import { AxiosRequestConfig } from 'axios';

import serverFetcher from '@/libs/server-fetcher';
import type { iBookResponse, iBookSearchParams } from '@/types';

const KAKAO_BASE_URL = 'https://dapi.kakao.com/v3';

export const searchBooks = async (
  params: iBookSearchParams,
): Promise<iBookResponse> => {
  try {
    const config: AxiosRequestConfig = {
      baseURL: KAKAO_BASE_URL,
      params: params,
    };

    const { data } = await serverFetcher.get('/search/book', config);

    return data;
  } catch (error) {
    console.error('[Failed]', error);
    throw error;
  }
};
```

### 3. 검색

#### **_searchQuery_**

기본 검색에 사용

#### **_searchDetailQuery_**

상세 검색에 사용

#### **_searchTarget_**

검색 종류 (제목, 저자, 출판사)

```ts
const { data: books } = useBooks({
  query: searchQuery || searchDetailQuery,
  target: searchDetailQuery ? searchTarget : undefined,
});
```

### 4. 이미지 오류 처리

`<BookImage />` 컴포넌트에서 `thumbnail`이 없거나, 오류 발생시에 기본 이미지를 노출합니다.

#### **next/image**

`Next.js Image Optimization` 기능을 사용합니다.

#### **기본 이미지 노출 조건**

- 이미지 주소 `thumbnmail` 없음
- 이미지 로딩 실패

#### **재사용 컴포넌트**

책 이미지 전용으로 재사용 컴포넌트 `<BookImage />`로 제작했습니다.

```typescript
// src/components/atoms/BookImage/index.tsx
const BookImage: FC<BookImageProps> = ({ src, width, height, alt }) => {
  const [imageSrc, setImageSrc] = useState(src || '/book-default.png');

  return (
    <Image
      src={imageSrc}
      onError={() => setImageSrc('/book-default.png')}
      width={width}
      height={height}
      alt={alt}
    />
  );
};
```

### 5. `next.config.ts`

현재 프로젝트 구성에 필수적인 설정입니다.

- `styledComponents`
- `images > remotePatterns`

```typscript
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'search1.kakaocdn.net',
      },
    ],
  },
};

export default nextConfig;
```

## 라이브러리 선택 이유

### 추가한 라이브러리

#### **styled-components**

Figma 디자인에 나열된 Theme를 구성하기에 적합하다고 판단했습니다.

#### **axios**

매번 새롭게 검색해야하므로 next.js fetch 캐싱 전략이 무의미하고, 헤더에 시크릿 추가가 간편하기에 선택했습니다.

#### **@heroicons/react**

오픈소스 아이콘이 필요해 설치했습니다.

#### **ESLint + Prettier**

linting 과 일관성있는 코드 관리를 위해 설치했습니다.

#### **@trivago/prettier-plugin-sort-imports**

일관성있는 import 정렬을 위해 설치했습니다.

## 강조하고 싶은 기능

### 1. 프로젝트 주요 설계

#### **Atomic Design Pattern**

재사용 가능한 컴포넌트를 위해 아토믹 디자인 패턴을 도입했습니다.

컴포넌트를 `atoms` → `molecules` → `organisms` → `templates` 순으로 구성하여 재사용성과 유지보수성을 높였습니다.

`src/app/*` 가 `pages` 역할을 수행하므로 별도로 만들지 않았습니다.

```
app/
└── components/
    ├── atoms/
    ├── molecules/
    ├── organisms/
    └── tempaltes/
```

#### **Theme**

재사용 테마로 편하게 관리할 수 있습니다.

```ts
export const theme = {
  colors: {
    primary: '#0070f3',
    red: '#E84118',
    gray: '#DADADA',
    lightGray: '#F2F4F6',
    white: '#ffffff',
    black: '#222222',
    text: {
      primary: '#353C49',
      secondary: '#6D7582',
      subtitle: '#8D94A0',
    },
    background: '#ffffff',
  },
  typography: {
    title1: {
      fontSize: '24px',
      fontWeight: '700',
      lineHeight: '24px',
    },
    title2: {
      fontSize: '22px',
      fontWeight: '700',
      lineHeight: '24px',
    },
    title3: {
      fontSize: '18px',
      fontWeight: '700',
      lineHeight: '18px',
    },
    // ...
  },
};
```

### 2. 검색 기능 키보드 액션

#### **검색 히스토리**

검색 기록 최대 8개 저장됩니다. 또한 키보드 네비게이션 (위, 아래, 엔터)을 지원합니다.

```ts
const handleKeyPress = (e: React.KeyboardEvent) => {
  if (e.key === 'ArrowDown') {
    e.preventDefault();
    if (selectedIndex < history.length - 1) {
      setSelectedIndex(selectedIndex + 1);
    }
  } else if (e.key === 'ArrowUp') {
    e.preventDefault();
    if (selectedIndex > -1) {
      setSelectedIndex(selectedIndex - 1);
    }
  } else if (e.key === 'Enter') {
    if (selectedIndex >= 0 && selectedIndex < history.length) {
      // 히스토리 있을 경우
      const selectedItem = history[selectedIndex];
      setInputValue(selectedItem);
      onSearch?.(selectedItem);
      setIsFocused(false);
      setSelectedIndex(-1);
    } else {
      // 히스토리 없을 경우
      addHistory(inputValue);
      onSearch?.(inputValue);
      setIsFocused(false);
      setSelectedIndex(-1);
    }
  }
};
```

### 3. 서버 액션 API 구조

#### axios 래핑 순서

`axios` -> `server-fetcher.ts` -> `kakao-api.server.ts`

#### useBooks (react-query)

`kakao-api.server.ts`의 `searchBooks` 호출

```ts
const useBooks = (params: iBookSearchParams) => {
  return useQuery({
    queryKey: ['books', params],
    queryFn: () => searchBooks(params), // <-서버 액션
    enabled: !!params.query,
  });
};
```

### 4. 시크릿 자동 추가

`baseURL` 검사후, kakao API 주소면 카카오 REST KEY 를 추가합니다.

```ts
fetcher.interceptors.request.use(
  async (config) => {
    if (config.baseURL?.includes('https://dapi.kakao.com/')) {
      const kakaoRestKey = process.env.KAKAO_API_KEY;
      if (kakaoRestKey) {
        config.headers.Authorization = `KakaoAK ${kakaoRestKey}`;
      }
    }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);
```

### 5. 페이지네이션

재사용 가능한 `<Pagination />` 컴포넌트를 추가했습니다.

```ts
<Pagination
  meta={books.meta}
  currentPage={currentPage}
  onPageChange={handlePageChange}
/>
```

## License

© 2025 Byungwook LEE © CDRI
