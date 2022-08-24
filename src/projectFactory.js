import { loadfromLocalStorage, saveToLocalStorage } from "./localStorageHandler";

let projectArray = loadfromLocalStorage('PROJECTS');
if (projectArray === null) {
  projectArray = []
}

const projectFactory = (name) => {
  const index = projectArray.findIndex(proj => proj.name === name);
  const project = {};
  project.name = name;
  const getName = () => name;
  const deleteProject = () => {
    projectArray.splice(index, 1)
    const projectNameArray = projectArray.map(proj => proj.getName())
    saveToLocalStorage('PROJECTS', projectNameArray)
  }
  return {
    deleteProject,
    getName
  }
}

const addFunctionsBackToProjects = () => {
  let newProjectArray = []
  for (let i = 0; i < projectArray.length; i++) {
    newProjectArray.push(projectFactory(projectArray[i]))
  }
  return newProjectArray
}

if (projectArray.length === 0) {
  const general = projectFactory('General')
  projectArray.push(general)
} else {
  projectArray = addFunctionsBackToProjects();
}

export {
  projectFactory,
  projectArray,
  addFunctionsBackToProjects
}

