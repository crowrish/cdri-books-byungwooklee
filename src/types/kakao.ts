interface iBookSearchParams {
  query: string;
  sort?: 'accuracy' | 'latest';
  page?: number; // 1~50, default 1
  size?: number; // 1~50, default 10
  target?: string; // 검색필드 제한  title(제목), isbn (ISBN), publisher(출판사), person(인명)
}

interface iMeta {
  total_count: number;
  pageable_count: number;
  is_end: boolean;
}

interface iBookDocument {
  title: string;
  contents: string;
  url: string;
  isbn: string;
  datetime: string;
  authors: string[];
  publisher: string;
  translators: string[];
  price: number;
  sale_price: number;
  thumbnail: string;
  status: string;
}

interface iBookResponse {
  documents: iBookDocument[];
  meta: iMeta;
}

export type { iBookSearchParams, iMeta, iBookDocument, iBookResponse };
