import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      <Link to="/" style={{ color: 'yellow' }}>
        page not found...go home!
      </Link>
    </div>
  );
};

export default NotFound;
