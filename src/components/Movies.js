import React from 'react'
import Cards from './cards';
export default function Movies() {
  return (
    <div>
      <h1 style={{color: "#fff"}}>Movies</h1>
      <p>Here you can find all the movies you love.</p>
      <Cards />
    </div>
  );
}