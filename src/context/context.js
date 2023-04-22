import { createContext, useState } from "react";
import {projectsData} from "../fakeData/fakeData.js"

export const Context = createContext();

const ModalContext = ({ children }) => {

   const [projects, setProjects] = useState(projectsData);
   const [searchProject, setSearchProject] = useState('');
   const [selectProject, setSelectProject] = useState('');


   //Project filter functions
   const selectProjectsByCategory = Object.values(projects).filter((item) => {
    return item.type.includes(selectProject);
  });
  
   const searchProjectsByTitle = projects.filter((item) => {
		const result = item.projectName.toLowerCase().includes(searchProject.toLowerCase())
			? item
			: searchProject === ''
			? item
			: '';
		return result;
	});

 
  
  return (
    <Context.Provider
      value={{
        projects,
        setProjects,
        searchProject,
        setSearchProject,
        selectProject,
        setSelectProject,
        selectProjectsByCategory,
        searchProjectsByTitle
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ModalContext;
