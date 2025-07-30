import { useEffect, useState } from 'react';

const STORAGE_KEY = 'search-history';
const MAX_HISTORY = 8;

const useSearchHistory = () => {
  const [history, setHistory] = useState<string[]>([]);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        setHistory(JSON.parse(saved));
      }
    } catch (error) {
      console.error('Failed to load search history:', error);
    }
  }, []);

  const saveToStorage = (newHistory: string[]) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newHistory));
    } catch (error) {
      console.error('Failed to save search history:', error);
    }
  };

  const addHistory = (term: string) => {
    if (!term.trim()) return;

    const newHistory = [term, ...history.filter((item) => item !== term)].slice(
      0,
      MAX_HISTORY,
    );

    setHistory(newHistory);
    saveToStorage(newHistory);
  };

  const deleteHistory = (index: number) => {
    const newHistory = history.filter((_, i) => i !== index);
    setHistory(newHistory);
    saveToStorage(newHistory);
  };

  return {
    history,
    addHistory,
    deleteHistory,
  };
};

export default useSearchHistory;
