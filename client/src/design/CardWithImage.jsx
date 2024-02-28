// CardWithImage.js
// eslint-disable-next-line no-unused-vars
import React from 'react';

// eslint-disable-next-line react/prop-types
const CardWithImage = ({ imageSrc, title, description, link, children, buttonClass }) => {
    return (
      <div className="max-w-md bg-gray-500 border border-gray-500 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-full">
        <a href={link}>
          <img className="rounded-t-lg object-cover w-full h-60" src={imageSrc} alt="" />
        </a>
        <div className="p-5">
          <a href={link}>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
          <button type="button" className={buttonClass}>
            {children}
          </button>
        </div>
      </div>
    );
  };
  

export default CardWithImage;
