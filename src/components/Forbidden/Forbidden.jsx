import React from 'react';
import { Link } from 'react-router-dom';
// import './Forbidden.scss'; // Asegúrate de tener el archivo de estilos adecuado

const Forbidden = () => {
  return (
    <div className="forbidden-container">
      <h1>403 Forbidden</h1>
      <p>You do not have permission to access this page.</p>
      <Link to="/">Go to Home</Link>
    </div>
  );
};

export default Forbidden;
