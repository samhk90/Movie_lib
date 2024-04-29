import React from 'react';
import { BrowserRouter as Router, Route, Routes,Link} from 'react-router-dom';

import './App.css';
import Header from './components/Header.js';
import Movies from './components/Movies.js';
import Cards from './components/cards.js';
import About from './components/About.js';
import MoviesInfo from './components/MovieInfo.js';
import logo from './img/logo.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faHeart, faTv } from '@fortawesome/free-solid-svg-icons'
import { faFilm } from '@fortawesome/free-solid-svg-icons/faFilm';
function App() {
  return (
    <Router> {/* Wrap your entire application with Router */}
      <div className="App">
      <Header /> 
        <div className="row main">
          <div className="col-sm-2 sidebar">
            <img src={logo} alt="Logo" />
            <Link to="/movies"><button className="btn sbtn mt-4"><FontAwesomeIcon icon={faFilm} className='mx-2' />Movies</button></Link>
            <Link to="/movies"><button className="btn sbtn mt-4"><FontAwesomeIcon icon={faTv} className='mx-2' />Series</button></Link>
            <Link to="/movies"><button className="btn sbtn mt-4"><FontAwesomeIcon icon={faClock} className='mx-2' />Watch List</button></Link>
            <Link to="/movies"><button className="btn sbtn mt-4"><FontAwesomeIcon icon={faHeart} className='mx-2' />Favorites</button></Link>
          </div>
          <div className="col-sm-10 p-4 ">
    
            <Routes>    
            <Route path="/" element={<Cards />} />
            <Route path="/about" element={<About />} />
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
