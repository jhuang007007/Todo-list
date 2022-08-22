import { createProject, reloadCreateProjectButton } from "./createProject";
import { loadNewProjectForm } from "./init";

const projectButtonEventHandler = () => {
  document.querySelector('#create-project-button').addEventListener('click', () => {
    loadNewProjectForm()
    document.querySelector('#project-form').addEventListener('submit', createProject);
    document.querySelector('#create-project').focus()
    document.querySelector('#create-project').addEventListener('blur', reloadCreateProjectButton)
  });
}

export {projectButtonEventHandler}