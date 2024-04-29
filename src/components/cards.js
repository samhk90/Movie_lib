import React, { useState } from "react";
import image from "../img/movies1.avif"; // Import your image
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faHeart } from "@fortawesome/free-solid-svg-icons";

export default function Cards() {
  const [favoriteStates, setFavoriteStates] = useState({
    card1: false,
    card2: false,
    card3: false,
    card4: false,
  });

  const toggleFavorite = (card) => {
    setFavoriteStates({
      ...favoriteStates,
      [card]: !favoriteStates[card],
    });
  };

  return (
    <div>
      <div className="row">
        <div className="col-sm-2">
          <div className="card1" style={{ width: "18rem" }}>
            <Link to="/moviesinfo" className="links">
              <img src={image} className="img" alt="..." />{" "}
              {/* Use your image */}
            </Link>
            <div className="card-body">
              <h5 className="card-title">Maidaan</h5>
              <h5 className="icons">
                <FontAwesomeIcon
                  icon={faHeart}
                  onClick={() => toggleFavorite("card1")}
                  style={{ color: favoriteStates.card1 ? "#7851ff" : "white" }}
                />
                <FontAwesomeIcon icon={faClock} />
              </h5>
            </div>
          </div>
        </div>
        <div className="col-sm-2">
          <div className="card1" style={{ width: "18rem" }}>
            <Link to="/moviesinfo" className="links">
              <img src={image} className="img" alt="..." />{" "}
              {/* Use your image */}
            </Link>
            <div className="card-body">
              <h5 className="card-title">Maidaan</h5>
              <h5 className="icons">
                <FontAwesomeIcon
                  icon={faHeart}
                  onClick={() => toggleFavorite("card2")}
                  style={{ color: favoriteStates.card2 ? "#7851ff" : "white" }}
                />
                <FontAwesomeIcon icon={faClock} />
              </h5>
            </div>
          </div>
        </div>
        <div className="col-sm-2">
          <div className="card1" style={{ width: "18rem" }}>
            <Link to="/moviesinfo" className="links">
              <img src={image} className="img" alt="..." />{" "}
              {/* Use your image */}
            </Link>
            <div className="card-body">
              <h5 className="card-title">Maidaan</h5>
              <h5 className="icons">
                <FontAwesomeIcon
                  icon={faHeart}
                  onClick={() => toggleFavorite("card3")}
                  style={{ color: favoriteStates.card3 ? "#7851ff" : "white" }}
                />
                <FontAwesomeIcon icon={faClock} />
              </h5>
            </div>
          </div>
        </div>
        <div className="col-sm-2">
          <div className="card1" style={{ width: "18rem" }}>
            <Link to="/moviesinfo" className="links">
              <img src={image} className="img" alt="..." />{" "}
              {/* Use your image */}
            </Link>
            <div className="card-body">
              <h5 className="card-title">Maidaan</h5>
              <h5 className="icons">
                <FontAwesomeIcon
                  icon={faHeart}
                  onClick={() => toggleFavorite("card4")}
                  style={{ color: favoriteStates.card4 ? "#7851ff" : "white" }}
                />
                <FontAwesomeIcon icon={faClock} />
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
