import React, { useEffect } from 'react';
import NavBar from './NavBar';
import { Separator } from '../common';
import { useNavbar, useSmoothScroll } from '../../hooks';
import { CONTACT_INFO } from '../../constants';
import './Hero.scss';

const Hero: React.FC = () => {
  const { isTransparent } = useNavbar();
  const { scrollToElement } = useSmoothScroll();

  const scrollToAbout = () => {
    scrollToElement('#about');
  };

  useEffect(() => {
    // ScrollReveal equivalent - we'll implement this later
    const elements = document.querySelectorAll('#hero .hero-body > .container *');
    elements.forEach((el, index) => {
      (el as HTMLElement).style.animation = `fadeInUp 1s ease ${index * 0.1}s both`;
    });

    const heroFoot = document.querySelector('#hero .hero-foot') as HTMLElement;
    if (heroFoot) {
      heroFoot.style.animation = 'fadeInUp 1s ease 0.5s both';
    }

    // Animation initialization only
  }, []);

  return (
    <section id="hero">
      <div className={`hero header-image ${isTransparent ? 'is-primary' : ''}`}>
        <div className="hero-head">
          <NavBar />
        </div>
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="image logotype">
              <h3 className="title is-5">{CONTACT_INFO.NAME}</h3>
            </div>
            <Separator color="rgba(255, 255, 255, 0.8)" />
            <h5 className="subtitle is-5">{CONTACT_INFO.LOCATION}</h5>
            <h5 className="subtitle is-5">{CONTACT_INFO.STATUS}</h5>
          </div>
        </div>
        <div className="hero-foot">
          <div className="container has-text-centered">
            <button onClick={scrollToAbout} className="scroll-button">
              <i className="fa fa-chevron-down scroll-down"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
