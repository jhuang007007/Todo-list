//some constructor/factory to dynamically create project objects
//todos go into projects kinda like folders?
const projectArray = [];

const projectFactory = (name) => {
  return {name}
}

export {
  projectFactory,
  projectArray
}

