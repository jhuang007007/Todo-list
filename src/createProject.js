import { projectButtonEventHandler } from "./createProjectButton";
import { renderTodo, todoArray } from "./createTodo";
import { loadTodoButton, removeMainContentChildren } from "./init";
import { projectFactory, projectArray } from "./projectFactory";

const createProject = (event) => {
  event.preventDefault();
  const createProjectInput = document.querySelector('#create-project')
  const projectName = createProjectInput.value;

  //prevent duplicate names
  const projectArrayLength = projectArray.length;
  const projectNameArray = []
  for (let i = 0; i < projectArrayLength; i++) {
    projectNameArray.push(projectArray[i].getName())
  }
  let projectNameExists = false;
  if (projectNameArray.indexOf(projectName) !== -1) {
    projectNameExists = true;
  }
  if (projectNameExists === false) {
    createProjectInput.classList.remove('create-project-exists-error')
    const project = projectFactory(projectName)
    projectArray.push(project)
  
    //renderProject
    renderProject(project)
  
    //remove form and create a new 'create project button'
    reloadCreateProjectButton();
  } else {
    console.log('Project names must be unique')
    createProjectInput.classList.add('create-project-exists-error')
  }
}

const reloadCreateProjectButton = () => {
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
  const projectName = project.getName()
  const projectValue = document.createElement('p')
  projectValue.textContent = projectName;
  projectValue.addEventListener('click', () => {
    filterProject(projectName)
  });
  projectContainer.appendChild(projectValue)

  //delete button
  if (projectName !== 'General') {
    const deleteProjectButton = document.createElement('img');
    deleteProjectButton.classList.add('delete-project-button')
    deleteProjectButton.src = '../src/img/x-lg.svg'
    deleteProjectButton.addEventListener('click', () => {
      projectContainer.remove();
      project.deleteProject();
    })
    projectContainer.appendChild(deleteProjectButton)
  }
  
  
  document.querySelector('.project-list').appendChild(projectContainer)
}

const filterProject = (projectName) => {
  removeMainContentChildren();
  todoArray.forEach(todo => {
    if (todo.getProject() === projectName) {
      renderTodo(todo);
    }
  });
  loadTodoButton();
}

export {createProject, renderProject, filterProject, reloadCreateProjectButton}