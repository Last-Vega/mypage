import React, { useEffect } from 'react';
import { Separator } from '../common';
import { skills } from '../../data/skills';
import './Skills.scss';

const Skills: React.FC = () => {
  useEffect(() => {
    const skillElements = document.querySelectorAll('.skill');
    skillElements.forEach((el, index) => {
      (el as HTMLElement).style.animation = `fadeInUp 1s ease ${index * 0.05}s both`;
    });
  }, []);

  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="block has-text-centered">
          <h2 className="title is-2">Skills</h2>
          <Separator />
          <h5 className="subtitle is-5">Technologies I have used.</h5>
        </div>
        <div className="skills columns is-multiline is-mobile">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="column is-half-mobile is-one-third-tablet is-one-quarter-desktop"
            >
              <div className="skill">
                <div className="image" title={skill.name}>
                  <img src={skill.image} alt={skill.name} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
