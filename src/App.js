import React from 'react';
import { BrowserRouter as Router, Route, Routes,Link} from 'react-router-dom';

import './App.css';
import Header from './components/Header.js';
import Movies from './components/Movies.js';
import Cards from './components/cards.js';
import MoviesInfo from './components/MovieInfo.js';
import logo from './img/logo.jpg';

function App() {
  return (
    <Router> {/* Wrap your entire application with Router */}
      <div className="App">
        <div className="row main">
          <div className="col-sm-2 sidebar">
            <img src={logo} alt="Logo" />
            <Link to="/movies"><button className="btn sbtn mt-4">Movies</button></Link>
            <Link to="/movies"><button className="btn sbtn mt-4">Watch List</button></Link>
            <Link to="/movies"><button className="btn sbtn mt-4">Favorites</button></Link>
          </div>
          <div className="col-sm-10 p-4 ">
            <Header />     
            <Routes>    
            <Route path="/" element={<Cards />} />
            <Route path="/moviesinfo" element={<MoviesInfo />} />     
            <Route path="/movies" element={<Movies />} />
            </Routes>


          </div>
        </div>
      </div>

    </Router> 
  );
}

export default App;
