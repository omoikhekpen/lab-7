// src/components/Home.js
import React from 'react';

function Home() {
  return (
    <div className="text-center">
      <h2>Welcome to Efe's Cakes</h2>
      <p>Your one-stop destination for freshly baked, mouth-watering cakes!</p>
      <img 
        src="https://via.placeholder.com/800x400.png?text=Efe's+Cakes" 
        alt="Delicious cakes from Efe's Cakes" 
        className="img-fluid my-4"
      />
      <p>Explore our site to learn more about our story and see our range of exquisite cakes.</p>
    </div>
  );
}

export default Home;
