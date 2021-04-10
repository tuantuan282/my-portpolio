import React, { useEffect } from 'react';
import {
  FaDownload,
  FaGraduationCap
} from 'react-icons/fa';

import '../css/About.css';
import Header from '../components/Header';
import Button from '../components/Button';
import Achievement from '../components/Achievement';
import MobileAvatar from '../components/MobileAvatar';
import Skill from '../components/Skill';
import Experience from '../components/Experience';

const About = () => {
  useEffect(() => {
    document.title = 'About'
  })
  const content = [
    { key: 'first name', value: 'Nguyen' },
    { key: 'last name', value: 'Tuan' },
    { key: 'birth date', value: '10/09/1998' },
    { key: 'nationality', value: 'Viet Nam' },
    { key: 'address', value: 'Ho Chi Minh' },
    { key: 'phone', value: '0976649000' },
    { key: 'email', value: '98tuannguyen@gmail.com' },
    { key: 'languages', value: 'Vietnamese, English' },
  ];

  const achievement = [
    { amount: '1', text: 'years of', subText: 'experience' },
    { amount: '0', text: 'completed', subText: 'projects' },
    { amount: '0', text: 'happy', subText: 'customers' },
    { amount: '0', text: 'awards', subText: 'won' },
  ];

  const header = { bg: 'resume', main: 'about', sub: 'me' };

  const skills = [
    { name: 'html', percent: 90 },
    { name: 'css', percent: 85 },
    { name: 'javascript', percent: 75 },
    { name: 'react', percent: 60 },
    { name: 'nodejs', percent: 45 },
    { name: 'expressjs', percent: 45 },
    { name: 'mongodb', percent: 45 },
    { name: 'c++', percent: 60 },
  ];

  const experience = [
    { icon: <FaGraduationCap />, time: '2016-present', text: 'Engineering degree', place: 'University of Information Technology - VNUHCM', des: 'Major in Computer Networks and Communications' }
  ];

  return (
    <div className="About container">
      <div className="row d-flex justify-content-center">
        <Header header={header} />
      </div>
      <div className="row info">
        <div className="col-12 col-xl-6 mb-5">
          <div className="row">
            <div className="title col-12">personal infos</div>
            <div className="col-12 mb-3">
              <MobileAvatar type="about" />
            </div>
            <ul className="col-6">
              {
                content.slice(0, 5).map(item =>
                  <li key={item.key}>
                    <span>{item.key}: </span>
                    <span className="d-block d-sm-inline-block">{item.value}</span>
                  </li>
                )
              }
            </ul>
            <ul className="col-6">
              {
                content.slice(5, 10).map(item =>
                  <li key={item.key}>
                    <span>{item.key}: </span>
                    <span className="d-block d-sm-inline-block">{item.value}</span>
                  </li>
                )
              }
            </ul>
            <div className="col">
              <Button type="download" url='/' title="download cv" icon={<FaDownload />} />
            </div>
          </div>
        </div>
        <div className="col-12 col-xl-6">
          <div className="row">
            {
              achievement.map(item =>
                <div key={item.text} className="col-6">
                  <Achievement item={item} />
                </div>
              )
            }
          </div>
        </div>
      </div>
      <hr className="separator" />
      {/* skills */}
      <div className="row skill">
        <div className="col-12 title text-center mb-5">my skills</div>
        {
          skills.map(skill =>
            <div key={skill.name} className="col-6 col-md-3">
              <Skill skill={skill} />
            </div>
          )
        }
      </div>
      <hr className="separator" />
      {/* experience */}
      <div className="row experience">
        <div className="col-12 title text-center ">experience & education</div>
        {
          experience.map(content =>
            <div key={content.des} className="col-12 col-md-6">
              <Experience
                icon={content.icon}
                time={content.time}
                text={content.text}
                place={content.place}
                des={content.des}
              />
            </div>
          )
        }
      </div>
    </div>
  );
}

export default About;