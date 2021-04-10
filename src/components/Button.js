import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../css/Button.css';

const Button = (props) => {
  const { type, title, icon, url } = props;
  const renderButton = () => {
    switch (type) {
      case 'button':
        return <button type="submit">
          <p>
            {title}
          </p>
          {icon}
        </button>
      case 'download':
        return <a href={url} download>
          <p>
            {title}
          </p>
          {icon}
        </a>
      default:
        return <Link to={url || ''}>
          <p>
            {title}
          </p>
          {icon}
        </Link>
    }
  }
  return (
    <div className="Button">
      { renderButton()}
    </div>
  );
}

Button.propTypes = {
  type: PropTypes.string,
  title: PropTypes.string,
  icon: PropTypes.object,
  url: PropTypes.string
};

export default Button;