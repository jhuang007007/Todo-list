//some constructor/factory to dynamically create project objects
//todos go into projects kinda like folders?
const projectFactory = (name) => {
  return {name}
}

const general = projectFactory('General')
const projectArray = [general];

export {
  projectFactory,
  projectArray
}

