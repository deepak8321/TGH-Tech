import { combineReducers } from 'redux';
// reducers.js (Redux Reducers)

const quoteReducer = (state = {}, action) => {
  // console.log("hello");
  switch (action.type) {
    case 'SET_RANDOM_QUOTE':
      return {
        ...state,
        content: action.payload.content,
        author: action.payload.author,
        _id: action.payload._id
      };
    default:
      return state;
  }
};

const bookmarksReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_BOOKMARK':
      // Add the bookmarked quote to state
      const newBookmarkId = action.payload;
      if (!state.includes(newBookmarkId)) {
        return [...state, newBookmarkId];
      }
      return state;

    case 'REMOVE_BOOKMARK':
      // Remove the bookmarked quote from state
      const bookmarkToRemove = action.payload;
      return state.filter(bookmarkId => bookmarkId !== bookmarkToRemove);

    case 'UPDATE_BOOKMARKS':
      // Update bookmarks state from local storage or other source
      const updatedBookmarks = action.payload; // Assuming payload is an array of bookmark IDs
      return updatedBookmarks;

    default:
      return state;
  }
};
  
const rootReducer = combineReducers({
  quotes: quoteReducer,
  bookmarks: bookmarksReducer,
  // Other reducers like userReducer, settingsReducer, etc.
});

// reducers.js
export default rootReducer;
