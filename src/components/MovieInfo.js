import React from 'react';
import image from '../img/movies1.avif'; // Import your image

export default function MovieInfo() {
  return (
    <div className="container-fluid m-4">
      <div className="row">
        <div className="col-sm-4">
          <img src={image} alt="Movie" className="img-fluid" />
        </div>
        <div className="col-sm-8">
          <h2>Movie Title</h2>
          <p>Description of the movie goes here.</p>
          <p>Release Date: January 1, 2022</p>
          <h4>where you can Watch: Netflix</h4>
        </div>
      </div>
    </div>
  );
}
