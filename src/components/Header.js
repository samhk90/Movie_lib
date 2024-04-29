import React from 'react'
export default function Header() {
  return (
    <div>
          <header className='header'>
          <nav className="navbar navbar-expand-lg">
  <div className="container-fluid head" >
    <a className="navbar-brand title_text mx-4"  href="\">Movie lib</a>
    <button className="navbar-toggler " id='hbtn' type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
      <ul className="navbar-nav">
        <li className="nav-item mx-3">
          <a className="nav-link active" id='navtext' aria-current="page" href="\">Home</a>
        </li>
        <li className="nav-item mx-3">
          <a className="nav-link active" id='navtext' aria-current="page" href="\">About</a>
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
