import React from 'react';
import './AtticProjects.css';

const AtticProjects = () => {
  return (
    <div className='third-intro'>
      <div className='container-third'>
        <p className='attic-projects'>Projects in the Attic</p>
        <div className='container-spec-projects'>
          <div className='child-spec-projects'>
            <p className='name-project'>Spring IO Platform</p>
            <p>
              Provides a cohesive, versioned platform for building modern
              applications. It is a modular, enterprise-grade distribution that
              delivers a curated set of dependencies.
            </p>
          </div>
          <div className='child-spec-projects'>
            <p className='name-project'>Spring For Android</p>
            <p>
              Provides key Spring components for use in developing Android
              applications.
            </p>
          </div>
          <div className='child-spec-projects'>
            <p className='name-project' style={{ color: '#086dc3' }}>
              Spring flex
            </p>
            <p>
              A project to make it easier to build Spring-powered Rich Internet
              Applications using Adobe Flex as the front-end client.
            </p>
          </div>
          <div className='child-spec-projects'>
            <p className='name-project'>Spring Integratoin Groovy DSL</p>
            <p>
              A Groovy based DSL for developing Spring Integration applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AtticProjects;
