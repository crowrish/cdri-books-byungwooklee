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
    console.error('Failed to fetch books:', error);
    throw error;
  }
};
