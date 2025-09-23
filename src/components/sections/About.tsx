import React, { useEffect } from 'react';
import { Separator } from '../common';
import meRoundedImage from '../../assets/img/me_rounded.jpeg';
import './About.scss';

const About: React.FC = () => {
  useEffect(() => {
    const aboutBlock = document.querySelector('#about .block') as HTMLElement;
    if (aboutBlock) {
      aboutBlock.style.animation = 'fadeInUp 1s ease 0.2s both';
    }
  }, []);

  return (
    <section id="about" className="section">
      <div className="container">
        <div className="image avatar">
          <img src={meRoundedImage} alt="Shingo Watanabe" />
        </div>
        <h2 className="title is-2 has-text-centered">About Me</h2>
        <Separator />
        <div className="about-text block">
          My name is Shingo Watanabe. I'm a Master's student at{' '}
          <a href="https://informatics.tsukuba.ac.jp">
            the Masters Programs in Informatics
          </a>
          , at Degree Programs in Comprehensive Human Sciences, Graduate School of
          Comprehensive Human Sciences,{' '}
          <a href="https://www.tsukuba.ac.jp/">University of Tsukuba</a>. My major is
          information science and systems. I am conducting my research with a data science
          approach. Now, I am a member of{' '}
          <a href="https://fusioncomplab.org">fusioncomp lab</a> which mainly studying
          human computation or crowdsourcing, and I am particularly interested in human-AI
          collaboration in the information management. Since human-in-the-loop approach is
          effective way to solve the difficult problem which AI can not solve alone, by
          develop and utilizing the human-AI collaboration system, I firmly believe that
          our real world will be getting better and useful. In my research, I am developing
          a document management system which is based on human-in-the-loop latent space
          learning. The idea of this system is acquiring user's criterion of document
          management by human-in-the-loop. If our system can be effective, the user need
          not worry about taking up his or her time to manage document. I have a passion
          for developing the system which makes our real world better. Therefore, I will
          continue my studies in the field of information science in terms of human-AI
          collaboration system where I am researching.
        </div>
      </div>
    </section>
  );
};

export default About;
