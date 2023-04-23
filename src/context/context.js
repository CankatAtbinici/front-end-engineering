import { createContext, useState } from "react";
import {projectsData} from "../mock-data/mockData"

export const Context = createContext();

const ModalContext = ({ children }) => {

   const [projects, setProjects] = useState(projectsData);
   const [searchProject, setSearchProject] = useState('');
   const [selectProject, setSelectProject] = useState('');


   //Project filter functions
   const selectProjectsByCategory = projects.filter((item) => { //review : function naming search & objct values removed
    return item.type === selectProject;
  });
  
   const searchProjectsByTitle = projects.filter((item) => {
    const searchValue = searchProject.toLowerCase().trim()
    if(!searchValue) return item;
		const result = item.projectName.toLowerCase().includes(searchValue)
			? item
			: ''
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
