// Card.js
// eslint-disable-next-line no-unused-vars
import React from "react";

// eslint-disable-next-line react/prop-types
const Card = ({ children, className }) => (
  <div className={` p-8 rounded-lg shadow-md max-w-7xl mx-auto ${className}`}>
    {children}
  </div>
);

export default Card;
