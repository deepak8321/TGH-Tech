import React, { useEffect } from 'react';
import styles from './bookmarks.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { removeBookmark } from '../redux/action'; // Update the path accordingly
import { getBookmarkedQuotesFromLocalStorage} from '../utils/localStorage';
import { Link } from 'react-router-dom';

const Bookmarks = () => {
  const dispatch = useDispatch();
  const bookmarks = useSelector((state) => state.bookmarks);

  useEffect(() => {
    const bookmarkedQuotes = getBookmarkedQuotesFromLocalStorage();
    // Dispatch action to update bookmarks in Redux state
    console.log(bookmarkedQuotes);
  }, []);

  return (
    <div className="macbook-pro">
    <div className="div">
    {bookmarks.map((quote, index) => (
          <div key={index} className={`overlap-group-${index}`}>
            <p className={`some-people-go-to-${index}`}>{quote.content}</p>
            <div className={`text-wrapper-${index}`}>- {quote.author}</div>
          </div>
        ))}
        <Link to="/" className="text-wrapper-4">Home</Link>
        <Link to="/bookmarks" className="text-wrapper-3">Bookmark</Link>

    </div>
    </div>

  );
};

export default Bookmarks;
