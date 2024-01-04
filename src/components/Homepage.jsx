import React, { useEffect } from 'react';
import { BiBookmarkPlusFill } from "./BiBookmarkPlusFill";
import { GridiconsDropdown } from "./GridiconsDropdown";
import { useDispatch, useSelector } from 'react-redux';
import { getRandomQuote, addBookmark } from '../redux/action';
import { fetchRandomQuote } from '../services/api';
import { Link } from 'react-router-dom';
import "./home.css";

function Homepage() {

  const dispatch = useDispatch();
  const quote = useSelector((state) => state.quotes);
  // check
  // useEffect(() => {
  //   console.log('Fetching quote...');
  //   dispatch(getRandomQuote());
  //   console.log('Quote from state:', quote);
  // }, [dispatch, quote]);

  useEffect(() => {
    dispatch(getRandomQuote());
  }, [dispatch]);
  
  const handleGenerateQuote = () => {
    // console.log(quote._id);// data
    dispatch(getRandomQuote());
  };

  const handleBookmark = (content, author,quoteId) => {
    dispatch(addBookmark(content, author,quoteId));
    // Update local storage after adding bookmark
  };

  const handleClick = () => {
    handleBookmark(quote.content, quote.author, quote._id);
  };
  return (
    <div className="macbook-pro">
      <div className="div">
        <img className="bi-bookmark" alt="Bi bookmark" src="bi-bookmark.svg" />
          <div className="overlap">
        {quote && quote.content && quote.author ? (
            <div>
            <p className="the-human-spirit" >{quote.content}</p>
            <div className="text-wrapper">- {quote.author}</div>
            <button   onClick={() => handleBookmark(quote.content,quote.author,quote._id)}>Bookmark</button>
            {/* <BiBookmarkPlusFill className="bi-bookmark-plus" onClick={handleClick} /> */}
 
            </div>
        ) : (
          <p className='kd'>Loading...</p>
        )}
          </div>

        <div className="overlap-group">
            <button className="text-wrapper-2" onClick={handleGenerateQuote}>Next Quote</button>
          </div>

        <div className="gridicons-dropdown-wrapper">
          <GridiconsDropdown className="gridicons-dropdown" />
        </div>
        <Link to="/" className="text-wrapper-4">Home</Link>
        <Link to="/bookmarks" className="text-wrapper-3">Bookmark</Link>

        
      
      </div>
    </div>
  )
}

export default Homepage
