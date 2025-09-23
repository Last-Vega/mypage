import React, { useEffect } from 'react';
import { Separator } from '../common';
import ProjectCard from './ProjectCard';
import { projects } from '../../data/projects';
import './Projects.scss';

const Projects: React.FC = () => {
  useEffect(() => {
    const projectElements = document.querySelectorAll('.reveal');
    projectElements.forEach((el, index) => {
      (el as HTMLElement).style.animation = `fadeInUp 1s ease ${index * 0.15}s both`;
    });
  }, []);

  return (
    <section id="products" className="section no-h-padding">
      <div className="block has-text-centered">
        <h2 className="title is-2">Products</h2>
        <Separator />
      </div>
      <div className="projectsContainer">
        {projects.map((project, index) => (
          <div key={index} className="project reveal">
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
