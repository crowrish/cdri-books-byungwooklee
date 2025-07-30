import { useEffect, useState } from 'react';

import type { iBookDocument } from '@/types';

const STORAGE_KEY = 'favorite-books';

const useFavoriteBooks = () => {
  const [favorites, setFavorites] = useState<iBookDocument[]>([]);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        setFavorites(JSON.parse(saved));
      }
    } catch (error) {
      console.error('Failed to load favorite books:', error);
    }
  }, []);

  const saveToStorage = (newFavorites: iBookDocument[]) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newFavorites));
    } catch (error) {
      console.error('Failed to save favorite books:', error);
    }
  };

  const toggleFavorite = (book: iBookDocument) => {
    const isAlreadyFavorite = favorites.some((fav) => fav.isbn === book.isbn);

    let newFavorites: iBookDocument[];

    if (isAlreadyFavorite) {
      newFavorites = favorites.filter((fav) => fav.isbn !== book.isbn);
    } else {
      newFavorites = [book, ...favorites];
    }

    setFavorites(newFavorites);
    saveToStorage(newFavorites);
  };

  const isFavoriteBook = (isbn: string) => {
    return favorites.some((book) => book.isbn === isbn);
  };

  return {
    favorites,
    toggleFavorite,
    isFavoriteBook,
  };
};

export default useFavoriteBooks;
