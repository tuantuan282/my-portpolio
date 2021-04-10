import React from 'react';
import PropTypes from 'prop-types';

import '../css/Experience.css';

const Experience = (props) => {
  const { icon, time, text, place, des } = props

  return (
    <div className="Experience">
      <div className="icon">{icon}</div>
      <div className="content">
        <div className="time">{time}</div>
        <div className="text">
          {text}

        </div>
        <div className="text2">
          {place}
        </div>
        <p className="des">{des}</p>
      </div>
    </div>
  );
}

Experience.propTypes = {
  icon: PropTypes.object,
  time: PropTypes.string,
  text: PropTypes.string,
  place: PropTypes.string,
  des: PropTypes.string,
};

export default Experience;