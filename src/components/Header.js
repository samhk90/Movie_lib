import React from 'react';
import { BrowserRouter as Router, Route, Routes,Link} from 'react-router-dom';
export default function Header() {
  return (
    <div>
          <header className='header'>
          <nav className="navbar navbar-expand-lg">
  <div className="container-fluid head" >
    <Link className="navbar-brand title_text "  to="/">Movie lib</Link>
    <button className="navbar-toggler " id='hbtn' type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav" id='navitem'>
        <li className="nav-item mx-3">
          <Link className="nav-link active" id='navtext' aria-current="page" to='/'>Home</Link>
        </li>
        <li className="nav-item mx-3">
          <Link className="nav-link active" id='navtext' aria-current="page" to="/about">About</Link>
        </li>
        <li className="nav-item mx-3">
          <a className="nav-link active" id='navtext' aria-current="page" href="\">Contact</a>
        </li>
      </ul>

    </div>
  </div>
</nav>
    </header>
    </div>
  );
}
