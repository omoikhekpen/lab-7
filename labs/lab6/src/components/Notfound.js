// src/components/NotFound.js
// 404 page component for handling unknown routes.

import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="text-center" style={{ padding: '3rem' }}>
      <h2>404 - Page Not Found</h2>
      <p>Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" className="btn btn-primary">Go Back Home</Link>
    </div>
  );
}

export default NotFound;
