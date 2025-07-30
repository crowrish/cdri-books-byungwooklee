import { useQuery } from '@tanstack/react-query';

import { searchBooks } from '@/apis/kakao-api.server';
import type { iBookSearchParams } from '@/types';

const useBooks = (params: iBookSearchParams) => {
  return useQuery({
    queryKey: ['books', params],
    queryFn: () => searchBooks(params),
    enabled: !!params.query,
  });
};

export default useBooks;
