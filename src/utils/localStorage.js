// localStorage.js (Utility)
const BOOKMARKS_KEY = 'bookmarkedQuotes';

export const getBookmarkedQuotesFromLocalStorage = () => {
  const bookmarks = JSON.parse(localStorage.getItem(BOOKMARKS_KEY)) || [];
  return bookmarks;
};
