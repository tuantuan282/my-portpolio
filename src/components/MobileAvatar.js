import React from 'react';
import PropTypes from 'prop-types';

import '../css/MobileAvatar.css';

const MobileAvatar = (props) => {
  const { type } = props;
  return(
    <div 
      className={
        type === 'about' ?
        "MobileAvatar d-block d-sm-none" :
        "MobileAvatar d-none d-xl-none d-md-block"
      }
    ></div>
  );
}

MobileAvatar.propTypes = {
  type: PropTypes.string
}

export default MobileAvatar;