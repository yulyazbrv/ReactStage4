import React, { useState, useEffect } from 'react';
import searchIcon from '../../images/search.svg';
import { useSelector } from 'react-redux';
import './Projects.css';

const Projects = () => {
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [value, setValue] = useState('');
  const pr = useSelector((state) => state.projects);
  useEffect(() => {
    const filterTimeout = setTimeout(() => {
      const filtered = pr.projects.filter((project) => {
        return project.name.toLowerCase().includes(value.toLowerCase());
      });
      setFilteredProjects(filtered);
    }, 400);

    return () => clearTimeout(filterTimeout);
  }, [value, pr.projects]);

  return (
    <div className='second-intro'>
      <div className='container-second'>
        <div className='search-container'>
          <input
            className='search'
            type='search'
            onChange={(event) => setValue(event.target.value)}
          />
          <img className='fa' alt='icon-project' src={searchIcon} />
        </div>
        <div className='projects-container'>
          {filteredProjects.map((project, index) => (
            <div className='child-projects' key={index}>
              <div>
                <img className='icons' alt='icon project' src={project.img} />
              </div>
              <div>
                <p className='name-project'>{project.name}</p>
                <p>{project.info}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
