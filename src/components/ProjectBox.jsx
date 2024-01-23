import React from 'react';

function ProjectBox({ title, description, link1, link2 }) {
    return (
        <div>
        <div className="project-box">
            <h3 className="project header-text">{title}</h3>
            <p className="project text">{description}</p>
            <div className="button-container">
                <a href={link1} className="project-button text" target="_blank" rel="noopener noreferrer">Github</a>
                <a href={link2} className="project-button text" target="_blank" rel="noopener noreferrer">Live demo</a>
            </div>
        </div>    
        </div>
    );
}

export default ProjectBox;
