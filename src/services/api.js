// api.js (Service to handle API calls)
import axios from 'axios';

const BASE_URL = 'https://api.quotable.io';

export const fetchRandomQuote = () => {
  return axios.get(`${BASE_URL}/random`);
};

export const fetchTags = () => {
  return axios.get(`${BASE_URL}/tags`);
};

// actions.js (Redux actions)
// export const getRandomQuote = () => {
//   // Implement action to fetch random quote
// };

// export const getTags = () => {
  // Implement action to fetch tags
// };