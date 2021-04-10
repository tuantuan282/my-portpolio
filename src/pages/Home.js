import React, { useEffect, useState, useRef } from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { useSpring, animated } from 'react-spring'
import useTypewriter from "react-typewriter-hook"

import '../css/Home.css';
import Button from '../components/Button';
import MobileAvatar from '../components/MobileAvatar';

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const MagicOcean = [
  "dumb",
  "My passionate is building excellent website that improves the lives of those around me. ",
  "事不过三，bye."
];

let index = 0;

const Home = () => {
  useEffect(() => {
    document.title = 'Personal Portfolio';
  });
  const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }));
  const [magicName, setMagicName] = useState("I'm a web designer & front‑end developer");
  const intervalRef = useRef({});
  const name = useTypewriter(magicName);

  useEffect(
    () => {
      intervalRef.current = setInterval(() => {
        index = index > 1 ? 0 : ++index;
        setMagicName(MagicOcean[index]);
      }, 5000);
      return function clear() {
        clearInterval(intervalRef.current);
      };
    },
    [magicName]
  );

  return (
    <div className="Home container-fluid p-xl-5">
      <div className="color-block d-xl-block d-none"></div>
      <div className="row h-100 ">
        <animated.div
          className="avatar col-xl-4 p- d-xl-block d-none"
          onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
          onMouseLeave={() => set({ xys: [0, 0, 1] })}
          style={{ transform: props.xys.interpolate(trans) }}
        />
        <div className="intro col-xl-8">
          <MobileAvatar />
          <h6> "Hi there !"</h6>
          <h1>
            I'm
            <span> Tuan</span>
          </h1>
          <p>{name}</p>
          <div>
            <Button title="more about me" icon={<FaUserAlt />} url="/about" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;