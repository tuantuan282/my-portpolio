import React from 'react';
import PropTypes from 'prop-types';

import '../css/Achievement.css';

const Achievement = (props) => {
  const { item } = props;

  return(
    <div className="Achievement">
      <h3 className="amount">{item.amount}</h3>
      <div className="text">
        {item.text}
        <p>{item.subText}</p>
      </div>
    </div>
  );
}

Achievement.propTypes = {
  item: PropTypes.shape({
    amount: PropTypes.string,
    text: PropTypes.string,
    subText: PropTypes.string
  })
};

export default Achievement;