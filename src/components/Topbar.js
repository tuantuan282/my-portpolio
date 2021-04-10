import React, { useState } from 'react';
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

import '../css/Topbar.css';
import Burger from './Burger';
import Header from './Header';

const Topbar = (props) => {
  const { location } = props;
  const [ isClick, setClick ] = useState(false);

  const nav = [
    { name: 'HOME', url: '/', icon: <FaHome />},
    { name: 'ABOUT', url: '/about', icon: <FaUserAlt />},
    { name: 'PORTFOLIO', url: '/portfolio', icon: <FaBriefcase />},
    { name: 'CONTACT', url: '/contact', icon: <FaEnvelopeOpen />},
    { name: 'BLOG', url: '/blog', icon: <FaComments />}
  ];

  const renderHeader = () => {
    switch(location.pathname) {
      case '/about': 
        return { bg: 'resume', main: 'about', sub: 'me' };
      case '/portfolio':
        return { bg: 'works', main: 'my', sub: 'portfolio' };
      case '/contact':
        return { bg: 'contact', main: 'get in', sub: 'touch' };
      case '/blog':
        return { bg: 'posts', main: 'my', sub: 'blogs'};
      default:
        return { bg: '', main: '', sub: '' };
    }
  }

  const header = renderHeader();

  return(
    <div 
      className="Topbar d-block d-sm-none"
      style={
        location.pathname === '/' ? {
          visibility: "hidden"
        } : null
      }
    >
      <Header type="topmenu" header={header} />
      <Burger isClick={isClick} setClick={setClick} pathname={location.pathname} />
      <ul 
        className={isClick ? "nav nav-active" : "nav"}
        style={
          location.pathname === '/' ? {
            visibility: "visible"
          } : null
        }
      >
        {
          nav.map(item => 
            <li className="nav-item" key={item.name}>
              <Link 
                to={item.url}
                onClick={() => setClick(!isClick)}
                className={ location.pathname === item.url ? "nav-item-active" : null}
              >
                {item.icon}
                <p>{item.name}</p>
              </Link>
            </li>
          )
        }
      </ul>
    </div>
  );
}

Topbar.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string
  })
};

export default withRouter(Topbar);