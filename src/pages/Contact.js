import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaPaperPlane,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaGithub
} from 'react-icons/fa';

import '../css/Contact.css';
import Header from '../components/Header';
import Button from '../components/Button';

const Contact = () => {
  const [data, setData] = useState({});
  const [msg, setMsg] = useState('');
  const [loading, setLoading] = useState(false);
  const header = { bg: 'contact', main: 'get in', sub: 'touch' };

  useEffect(() => {
    document.title = 'Contact';
  });

  const info = [
    { icon: <FaEnvelopeOpen size={40} />, header: 'mail me', content: '98tuannguyen@gmail.com' },
    { icon: <FaPhoneSquareAlt size={40} />, header: 'call me', content: '0976 649 000' },
  ];

  const socials = [
    { icon: <FaFacebookF />, title: 'Facebook', href: 'https://www.facebook.com/' },
    { icon: <FaTwitter />, title: 'Twitter', href: 'https://twitter.com/' },
    { icon: <FaInstagram />, title: 'Instagram', href: 'https://www.instagram.com//' },
    { icon: <FaGithub />, title: 'Github', href: 'https://github.com/' },
  ];

  const handleInput = (event) => {
    event.preventDefault();
    setData({ ...data, [event.target.name]: event.target.value });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    axios.post('https://dvbt-porfolio.herokuapp.com/api/form', data)
      .then(res => {
        setData({});
        setMsg('The message has been sent successfully!');
        setLoading(false);
      })
      .catch(err => {
        setMsg('The message has been sent unsuccessfully!');
      });
  }

  return (
    <div className="Contact container">
      <div className="row d-flex justify-content-center">
        <Header header={header} />
      </div>
      <div className="row">
        <div className="col-lg-4">
          <div className="title">don't be shy !</div>
          <p className="contact-p">Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
          <div>
            {
              info.map(value =>
                <div className="info" key={value.header}>
                  {value.icon}
                  <div className="main">
                    <div>{value.header}</div>
                    <div>{value.content}</div>
                  </div>
                </div>
              )
            }
          </div>
          <ul className="socials">
            {
              socials.map(social =>
                <li key={social.title}>
                  <a target="blank" href={social.href} title={social.title}>
                    {social.icon}
                  </a>
                </li>
              )
            }
          </ul>
        </div>
        <div className="col-lg-8 mb-5">
          <form className="contact-form row" onSubmit={handleSubmit}>
            <div className="form-group col-md-4">
              <input value={data.name || ''} required autoComplete="off" onChange={handleInput} placeholder="your name" name="name" type="text" />
            </div>
            <div className="form-group col-md-4">
              <input value={data.email || ''} required autoComplete="off" onChange={handleInput} placeholder="your email" name="email" type="email" />
            </div>
            <div className="form-group col-md-4">
              <input value={data.subject || ''} required autoComplete="off" onChange={handleInput} placeholder="your subject" name="subject" type="text" />
            </div>
            <div className="form-group col-12">
              <textarea value={data.message || ''} required autoComplete="off" onChange={handleInput} placeholder="your message" name="message" type="text" />
            </div>
            <div
              className="col-12 mb-3"
              style={
                {
                  color: msg === 'The message has been sent successfully!' ? "#155724" : "#721c24",
                  display: msg ? "block" : "none"
                }
              }
            >
              {msg}
            </div>
            <div className="col-lg-12 align-items-center d-flex">
              {
                loading ?
                  <div class="spinner-border" role="status" style={{ color: "var(--main-color)" }}>
                    <span class="sr-only">Loading...</span>
                  </div> :
                  <Button type="button" title="send message" icon={<FaPaperPlane />} />
              }
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;