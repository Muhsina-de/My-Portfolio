import React from 'react';
import Project from '../../components/Project';

function Portfolio() {
  const projects = [
    // Add your projects here
    {
      title: 'Project 1',
      image: 'path/to/image1.jpg',
      deployedLink: 'https://deployed-link1.com',
      repoLink: 'https://github.com/your-repo1'
    },
    {
      title: 'Project 2',
      image: 'path/to/image2.jpg',
      deployedLink: 'https://deployed-link2.com',
      repoLink: 'https://github.com/your-repo2'
    },
    // Add more projects as needed
  ];

  return (
    <section>
      <h2>Portfolio</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;