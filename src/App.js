// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Homepage from './components/Homepage';
import Bookmarks from './components/Bookmarks';
import store from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div>
          {/* <h1>Quote Generator App</h1> */}
          <Routes>
            <Route exact path="/" element={<Homepage />} /> {/* Use 'element' prop */}
            <Route path="/bookmarks" element={<Bookmarks />} /> Use 'element' prop
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
