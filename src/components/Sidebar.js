import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import {
  Link,
  withRouter
} from 'react-router-dom';
import {
  FaHome,
  FaUserAlt,
  FaBriefcase,
  FaEnvelopeOpen,
  FaComments
} from 'react-icons/fa';

import StyleContext from "../contexts/StyleContext";
import '../css/Sidebar.css';

const Sidebar = (props) => {
  const { location } = props;
  const { isDark } = useContext(StyleContext);
  const [isChecked, setChecked] = useState(isDark);
  const styleContext = useContext(StyleContext);

  const nav = [
    { name: 'HOME', url: '/', icon: <FaHome /> },
    { name: 'ABOUT', url: '/about', icon: <FaUserAlt /> },
    { name: 'PORTFOLIO', url: '/portfolio', icon: <FaBriefcase /> },
    { name: 'CONTACT', url: '/contact', icon: <FaEnvelopeOpen /> },
    { name: 'BLOG', url: '/blog', icon: <FaComments /> }
  ]
  return (
    <div className="Sidebar d-none d-sm-flex">
      <ul className="nav">
        <li className="nav-item">
          <div className="switch-container">
            <input
              checked={!isDark}
              class="Switch"
              type="checkbox"
              onChange={() => {
                styleContext.changeTheme();
                setChecked(!isChecked);
              }}
            />
          </div>
        </li>
        {
          nav.map(item =>
            <li key={item.name} className="nav-item">
              <Link
                to={item.url}
                className={location.pathname === item.url ? "nav-active" : null}
              >
                {item.icon}
                <p className="nav-name">{item.name}</p>
              </Link>
            </li>
          )
        }
      </ul>
    </div>
  )
}

Sidebar.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string
  })
};

export default withRouter(Sidebar);