//some constructor/factory to dynamically create project objects
//todos go into projects kinda like folders
const projectArray = [];

// const projectFactory = (name) => {
//   const index = projectArray.findIndex(proj => proj.name === name);
//   return {
//     name,
//     deleteProject() {
//       projectArray.splice(index, 1)
//     }
//   }
// }

const projectFactory = (name) => {
  const index = projectArray.findIndex(proj => proj.name === name);
  const project = {};
  project.name = name;
  const deleteProject = () => {
    projectArray.splice(index, 1)
  }
  const getName = () => name;
  return {
    deleteProject,
    getName
  }
}

const general = projectFactory('General')
projectArray.push(general)

export {
  projectFactory,
  projectArray
}

