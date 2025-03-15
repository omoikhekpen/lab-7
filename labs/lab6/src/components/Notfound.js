// src/components/NotFound.js
// This is the 404 page I created to handle unknown routes.
// It includes a link back to the Home page.

import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="text-center">
      <h2>404 - Page Not Found</h2>
      <p>Oops! We couldn't find the page you're looking for.</p>
      <Link to="/" className="btn btn-primary">
        Go Home
      </Link>
    </div>
  );
}

export default NotFound;
