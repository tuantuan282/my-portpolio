import React, { useState, useRef, createRef, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';

import '../css/Portfolio.css';
import Header from '../components/Header';
import ProjectDetail from '../components/ProjectDetail';

const projects = [
  {
    image: '/images/HappyKids.PNG',
    title: 'Kids Fashion Store',
    detail: {
      type: 'Website',
      client: 'Self Project',
      technology: 'HTML5, CSS3, EJS, Express, MongoDB',
      preview: 'http://happykids.herokuapp.com/'
    }
  },
];

const Portfolio = () => {
  const header = { bg: 'works', main: 'my', sub: 'portfolio' };
  const myRefs = useRef(projects.map(() => createRef()));
  const [inClass, setInClass] = useState('');
  const [activeItem, setActiveItem] = useState(-1);
  const [currentActive, setCurrentActive] = useState(-1);
  const [outClass, setOutCLass] = useState('');
  const [project, setProject] = useState({});
  const [active, setActive] = useState(false);

  useEffect(() => {
    document.title = 'Project';
  });

  const getDirection = (event, item) => {
    const w = item.current.offsetWidth;
    const h = item.current.offsetHeight;
    let x = (event.pageX - item.current.offsetLeft - (w / 2) * (w > h ? (h / w) : 1));
    const y = (event.pageY - item.current.offsetTop - (h / 2) * (h > w ? (w / h) : 1));
    x = y < 0 ? ((x > 100 && x < 260) ? 90 : x) : ((x > 70 && x < 260) ? 50 : x);
    const d = Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4;
    return d;
  };

  const addClass = (event, item, state) => {
    const direction = getDirection(event, item);

    if (state === 'out') {
      switch (direction) {
        case 0:
          setOutCLass(state + '-top');
          break;
        case 1:
          setOutCLass(state + '-right');
          break;
        case 2:
          setOutCLass(state + '-bottom');
          break;
        default:
          setOutCLass(state + '-left');
          break;
      }
    }
    switch (direction) {
      case 0:
        setInClass(state + '-top');
        break;
      case 1:
        setInClass(state + '-right');
        break;
      case 2:
        setInClass(state + '-bottom');
        break;
      default:
        setInClass(state + '-left');
        break;
    }
  }

  const handleMouseOver = (item, index) => {
    return (event) => {
      setActiveItem(index);
      addClass(event, item, 'in');
    }
  }

  const handleMouseOut = (item, index) => {
    return (event) => {
      setCurrentActive(index);
      addClass(event, item, 'out');
    }
  }

  const handleShow = (project) => {
    setProject(project);
    setActive(!active);
    document.body.style.overflow = 'hidden';
  }

  const handleClose = () => {
    setActive(!active);
    document.body.style.overflow = 'unset';
  }

  return (
    <div className="Portfolio container">
      <div className="row d-flex justify-content-center">
        <Header header={header} />
      </div>
      <div className="row projects">
        {
          projects.map((project, index) =>
            <div
              key={index}
              className={"col-md-12 col-xl-4 col-lg-6"}
              ref={myRefs.current[index]}
            >
              <div
                onMouseEnter={handleMouseOver(myRefs.current[index], index)}
                onMouseLeave={handleMouseOut(myRefs.current[index], index)}
                className={
                  index === activeItem ? inClass + ' img-wrapper' : (
                    index === currentActive ? outClass + ' img-wrapper' : 'img-wrapper'
                  )
                }
              >
                <img src={project.image} alt="" />
                <div className="overlay" onClick={() => handleShow(project)}>
                  <p>{project.title || 'some text'}</p>
                </div>
              </div>
            </div>
          )
        }
      </div>
      <div onClick={handleClose} className={`modal-overlay ${active ? 'overlay-active' : ''}`}></div>
      <ProjectDetail
        project={project}
        active={active}
      />
      <div
        className={`esc-btn ${active ? 'esc-btn-active' : ''}`}
        onClick={handleClose}
      >
        <FaTimes size={40} />
      </div>
    </div>
  );
}

export default Portfolio;

