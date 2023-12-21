import React, { useState, useEffect } from 'react';
import './Projects.css';
import searchIcon from '../../images/search.svg';
const Projects = (props) => {
  const { projects } = props;
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [value, setValue] = useState('');
  useEffect(() => {
    const filterTimeout = setTimeout(() => {
      const filtered = projects.filter((project) => {
        return project.name.toLowerCase().includes(value.toLowerCase());
      });
      setFilteredProjects(filtered);
    }, 400);

    return () => clearTimeout(filterTimeout);
  }, [value, projects]);

  return (
    <div className="second-intro">
      <div className="container-second">
        <form action="">
          <input className="search" type="search" onChange={(event) => setValue(event.target.value)} />
          <img className="fa fa-search" alt='icon-project' src={searchIcon} />
        </form>
        <div className="container-projects" id="cont-prj">
          {filteredProjects.map((project, index) => (
            <div className="child-projects" key={index}>
              <div>
                <img className="icons" alt='icon project' src={project.img} />
              </div>
              <div>
                <p className="name-project">{project.name}</p>
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
