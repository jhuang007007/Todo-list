import { projectFactory } from "./project"

const addProject = (name) => {
   const project = projectFactory(name);
}

const addProjectEventListener = (button) => {
  button.addEventListener('click', addProject)
}