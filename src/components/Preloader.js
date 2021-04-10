import React from 'react';

import '../css/Preloader.css';

const Preloader = () => {
  return(
    <div className='Preloader'>
      <div className="black-wall"></div>
      <div className="loader"></div>
    </div>
  );
}

export default Preloader;