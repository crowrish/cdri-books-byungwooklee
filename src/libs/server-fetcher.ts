import axios, { AxiosRequestConfig } from 'axios';

const fetcher = axios.create({
  // baseURL: process.env.NEXT_PUBLIC_API_HOST,
  headers: {
    'Content-Type': 'application/json',
  },
  responseType: 'json',
  timeout: 0,
});

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

const GET = async (url: string, config?: AxiosRequestConfig) =>
  await fetcher
    .get(url, config)
    .then((response) => response)
    .catch((error) => error.response);

const POST = async (url: string, data?: unknown, config?: AxiosRequestConfig) =>
  await fetcher
    .post(url, data, config)
    .then((response) => response)
    .catch((error) => error.response);

const PATCH = async (url: string, data: unknown, config?: AxiosRequestConfig) =>
  await fetcher
    .patch(url, data, config)
    .then((response) => response)
    .catch((error) => error.response);

const PUT = async (url: string, data: unknown, config?: AxiosRequestConfig) =>
  await fetcher
    .put(url, data, config)
    .then((response) => response)
    .catch((error) => error.response);

const DELETE = async (url: string, config?: AxiosRequestConfig) =>
  await fetcher
    .delete(url, config)
    .then((response) => response)
    .catch((error) => error.response);

const serverFetcher = {
  get: GET,
  post: POST,
  patch: PATCH,
  put: PUT,
  delete: DELETE,
};

export default serverFetcher;
