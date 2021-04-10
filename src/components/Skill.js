import React from 'react';
import PropTypes from 'prop-types';

import '../css/Skill.css';

const Skill = (props) => {
  const { skill } = props;
  return(
    <div className="Skill">
      <div className="percent">
        <svg>
          <circle cx="70" cy="70" r="70"></circle>
          <circle 
            cx="70" 
            cy="70" 
            r="70"  
            style={{
              strokeDashoffset: parseInt(`-calc(440 - (440 * ${skill.percent})) / 100)`) < 0 ? `-calc(440 - (440 * ${skill.percent}) / 100)` : `calc(440 - (440 * ${skill.percent}) / 100)`
            }}></circle>
        </svg>
        <div className="number">
          <h2>{skill.percent}%</h2>
        </div>
      </div>
      <div className="text">{skill.name}</div>
    </div>
  );
}

Skill.propTypes = {
  skill: PropTypes.shape({
    name: PropTypes.string,
    percent: PropTypes.number
  })
};

export default Skill;