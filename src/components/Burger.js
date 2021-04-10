import React from 'react';
import PropTypes from 'prop-types';

import '../css/Burger.css';

const Burger = (props) => {
  const { isClick, setClick, pathname } = props;

  return(
    <div 
      className={isClick ? "Burger toggle" : "Burger"} 
      onClick={() => setClick(!isClick)}
      style={
        pathname === '/' ? {
          visibility: "visible",
          top: "100%"          
        } : null
      }
    >
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>
    </div>
  );
}

Burger.propTypes = {
  isClick: PropTypes.bool,
  setClick: PropTypes.func,
  pathname: PropTypes.string
};

export default Burger;