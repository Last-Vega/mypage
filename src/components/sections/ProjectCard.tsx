import React from 'react';
import { Project } from '../../types';
import './ProjectCard.scss';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image">
          <img src={project.projectImage} alt={`${project.name} project`} />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4">{project.name}</p>
            <p className="subtitle is-6">{project.year}</p>
            {project.tags.map((tag, index) => (
              <span key={index} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="content">
          <span dangerouslySetInnerHTML={{ __html: project.description }} />
          <br />
        </div>
        <div className="bottom">
          <a
            className="button"
            target="_blank"
            rel="noopener noreferrer"
            href={project.repo}
          >
            <span className="icon">
              <i className="fa fa-github"></i>
            </span>
            <span>GitHub</span>
          </a>
          <a
            className="button"
            target="_blank"
            rel="noopener noreferrer"
            href={project.slideUrl}
          >
            <span className="icon">
              <i className="fa fa-google"></i>
            </span>
            <span>Slides</span>
          </a>
          <a
            className="button is-primary"
            target="_blank"
            rel="noopener noreferrer"
            href={project.url}
          >
            <span>Demo</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
