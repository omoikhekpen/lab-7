// src/components/Footer.js
// Footer component for Efe's Cakes portfolio.

import React from 'react';

function Footer() {
  return (
    <footer className="bg-light text-center py-3 mt-auto">
      <div className="container">
        <p className="mb-0">
          &copy; {new Date().getFullYear()} Efe's Cakes. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
