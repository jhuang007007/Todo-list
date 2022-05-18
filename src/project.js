//some constructor/factory to dynamically create project objects
//todos go into projects kinda like folders?
const projectFactory = (name) => {
  let _projectArray = [];
  _projectArray.push(name);
  let _index = _projectArray.indexOf(name);

  const getName = () => console.log(name);

  const setName = (newName) => {
    name = newName;
    _projectArray.splice(_index, 1, newName);
  }
  
  const deleteProject = () => _projectArray.splice(_index, 1); 

  return {
    getName,
    setName,
    deleteProject
  }
}

export {projectFactory};