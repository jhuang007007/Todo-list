import { createProject } from "./createProject";
import { loadNewProjectForm } from "./init";

const projectButtonEventHandler = () => {
  document.querySelector('#create-project-button').addEventListener('click', () => {
    loadNewProjectForm()
    document.querySelector('#project-form').addEventListener('submit', createProject);
  });
}

export {projectButtonEventHandler}