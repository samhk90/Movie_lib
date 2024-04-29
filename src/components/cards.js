import React from 'react';
import image from '../img/movies1.avif'; // Import your image
import { Link } from 'react-router-dom';

export default function Cards() {
  return (
    <Link to="/moviesinfo" className='links'>
           <div className="row">
            <div className="col-sm-2">
                 <div className="card1" style={{width: "18rem"}}>
      <img src={image} className="img" alt="..." /> {/* Use your image */}
      <div className="card-body">
        <h5 className="card-title">Maidaan</h5>
      </div>
    </div>
            </div>
            <div className="col-sm-2">
                 <div className="card1" style={{width: "18rem"}}>
      <img src={image} className="img" alt="..." /> {/* Use your image */}
      <div className="card-body">
        <h5 className="card-title">Maidaan</h5>
      </div>
    </div>
            </div>
            <div className="col-sm-2">
                 <div className="card1" style={{width: "18rem"}}>
      <img src={image} className="img" alt="..." /> {/* Use your image */}
      <div className="card-body">
        <h5 className="card-title">Maidaan</h5>
      </div>
    </div>
            </div>
            <div className="col-sm-2">
                 <div className="card1" style={{width: "18rem"}}>
      <img src={image} className="img" alt="..." /> {/* Use your image */}
      <div className="card-body">
        <h5 className="card-title">Maidaan</h5>
      </div>
    </div>
            </div>
           </div>
    </Link>
  );
}