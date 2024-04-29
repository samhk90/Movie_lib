import React from 'react'
import about from '../img/about.avif'
export default function About() {
  return (
    <div>
        <h1 style={{color: "#fff"}}>About</h1>
        <div className=" about">
        <div className="row">
            <div className="col-sm-4 p-3 d-flex justify-content-center align-item-center">
                <img src={about} className='aboutimg' alt="about"  />
            </div>
            <div className="col-sm-8 p-4 d-flex justify-content-center align-item-center">
            <p style={{color: "#fff"}} >The Movie Library application is your gateway to an extensive collection of films, where you can dive into a world of cinematic wonders. Explore a plethora of movies spanning various genres, from timeless classics to the latest blockbusters. With an intuitive interface, you can effortlessly navigate through the library, discovering captivating titles and uncovering hidden gems. Delve deeper into each movie's details, from intriguing synopses to captivating posters, and gain insights into the cast and crew behind the scenes. Our robust search functionality empowers you to find your favorite movies in an instant, whether by title or genre. With responsive design, the Movie Library adapts seamlessly to your device, ensuring an immersive experience across desktops, tablets, and smartphones. Join us on this cinematic journey, where every click opens the door to a world of entertainment possibilities.</p>
        
            </div>
        </div>
        </div>

    </div>
  );
}