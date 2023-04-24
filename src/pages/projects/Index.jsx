import React from 'react';
import ProjectsLayout from '../../components/project-components/projects/Projects';
import Head from './Projects.head';

function Projects(props) {


    return (
   <section className='container mx-auto'>
        <Head/>
          <ProjectsLayout/>
   </section>
   
   
    );
}

export default Projects;