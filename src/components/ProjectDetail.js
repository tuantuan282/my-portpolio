import React from 'react';
import PropTypes from 'prop-types';
import {
  FaFileAlt,
  FaUser,
  FaCode,
  FaExternalLinkAlt
} from 'react-icons/fa';

import '../css/ProjectDetail.css';

const ProjectDetail = (props) => {
  const { project, active } = props;
  const content = [
    { icon: <FaFileAlt />, key: 'project', value: project.detail ? project.detail.type : '' },
    { icon: <FaUser />, key: 'client', value: project.detail ? project.detail.client : '' },
    { icon: <FaCode />, key: 'technologies', value: project.detail ? project.detail.technology : '' },
    { icon: <FaExternalLinkAlt />, key: 'preview', value: project.detail ? project.detail.preview : '' },
  ];
  return (
    <div className={`ProjectDetail ${active ? 'active' : ''}`}>
      <div className="overlay"></div>
      <h1>{project.title || 'lorem ipsum'}</h1>
      <div className="row m-0 detail">
        {
          content.map(item =>
            <div className="content-wrapper col-6 mb-3" key={item.key}>
              {item.icon}
              <span className="key">{item.key}</span>
              {`: `}
              {
                item.key === 'preview' ?
                  <a target="_blank" href={item.value} rel="noopener noreferrer">Link</a> :
                  <span className="value">{item.value || 'lorem ipsum'}</span>
              }
            </div>
          )
        }
      </div>
      <div className="img-wrapper">
        <img src={project.image} alt="" />
      </div>
    </div>
  );
}

ProjectDetail.propTypes = {
  active: PropTypes.bool,
  project: PropTypes.shape({
    title: PropTypes.string,
    image: PropTypes.string,
    detail: PropTypes.shape({
      type: PropTypes.string,
      client: PropTypes.string,
      language: PropTypes.string,
      preview: PropTypes.string,
    })
  })
};

export default ProjectDetail;