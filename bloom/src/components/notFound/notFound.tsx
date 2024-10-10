// Modules
import React from 'react';
import { Link } from 'react-router-dom';
// Models
// Components
// CSS
import './notFound.css';
// Services

const NotFound404: React.FC = () => {
  return (
    <div className="notfound-container">
      <h1 className="notfound-404">404</h1>
      <Link to="/" className="home-link">
        home
      </Link>
    </div>
  );
};

export default NotFound404;
