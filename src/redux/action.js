// actions.js (Redux Actions)
import axios from 'axios'; // Import axios library
export const addBookmark = (content, author, quoteId) => {
    return {
      type: 'ADD_BOOKMARK',
      payload: { content, author, quoteId},
    };
  };
  
  export const removeBookmark = (quoteId) => {
    return {
      type: 'REMOVE_BOOKMARK',
      payload: quoteId,
    };
  };
  
  export const updateBookmarks = (bookmarks) => {
    return {
      type: 'UPDATE_BOOKMARKS',
      payload: bookmarks,
    };
  };
  

  export const getRandomQuote = () => {
    // console.log("working");
    return async (dispatch) => {
      try {
        const response = await axios.get('https://api.quotable.io/random');
        const { content, author, _id } = response.data;
  
        dispatch({
          type: 'SET_RANDOM_QUOTE',
          payload: { content, author, _id},
        });
      } catch (error) {
        console.error('Error fetching random quote:', error);
      }
    };
  };