// src/components/Products.js
import React from 'react';

function Products() {
  // Sample products data
  const cakes = [
    { id: 1, title: "Chocolate Dream Cake", description: "Rich chocolate cake with a creamy ganache topping." },
    { id: 2, title: "Vanilla Bean Delight", description: "Classic vanilla cake with a twist of real vanilla bean." },
    { id: 3, title: "Strawberry Fantasy", description: "Light and airy cake layered with fresh strawberry filling." },
  ];

  return (
    <div>
      <h2>Our Cakes</h2>
      <div className="row">
        {cakes.map(cake => (
          <div className="col-md-4 mb-4" key={cake.id}>
            <div className="card h-100">
              <img 
                src={`https://via.placeholder.com/300x200.png?text=${encodeURIComponent(cake.title)}`} 
                className="card-img-top" 
                alt={cake.title} 
              />
              <div className="card-body">
                <h5 className="card-title">{cake.title}</h5>
                <p className="card-text">{cake.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
