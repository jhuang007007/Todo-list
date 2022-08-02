import { projectButtonEventHandler } from "./createProjectButton";
import { projectFactory, projectArray } from "./projectFactory";

const createProject = (event) => {
  event.preventDefault();
  console.log('start')
  const projectName = document.querySelector('#create-project').value;
  const project = projectFactory(projectName)
  projectArray.push(project)
  console.log(projectArray)

  //saveProject
  renderProject(project)

  //remove form from dom and create a new 'create project button'
  document.querySelector('#project-form').remove();
  const projectLinkList = document.querySelector('.project-list')
  const createNewProjectButton = document.createElement('button');
  createNewProjectButton.textContent = 'Create new project';
  createNewProjectButton.id = 'create-project-button';
  projectLinkList.appendChild(createNewProjectButton)
  projectButtonEventHandler();
}

const renderProject = (project) => {
  const projectContainer = document.createElement('div')
  projectContainer.classList.add('project-container')
  const projectValues = Object.values(project)
  for (let i = 0; i < projectValues.length; i++) {
    const projectValue = document.createElement('p')
    console.log(projectValues)
    projectValue.textContent = projectValues[i];
    console.log(projectValues[i])
    projectContainer.appendChild(projectValue)
  }
  document.querySelector('.project-list').appendChild(projectContainer) 
}

export {createProject, renderProject}