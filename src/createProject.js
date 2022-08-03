import { projectButtonEventHandler } from "./createProjectButton";
import { renderTodo, todoArray } from "./createTodo";
import { loadTodoButton, removeMainContentChildren } from "./init";
import { projectFactory, projectArray } from "./projectFactory";

const createProject = (event) => {
  event.preventDefault();
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
    projectValue.textContent = projectValues[i];
    //on click, filter tasks to project related tasks
    projectValue.addEventListener('click', () => {
      filterProject(projectValues[i])
    });
    projectContainer.appendChild(projectValue)
  }
  document.querySelector('.project-list').appendChild(projectContainer) 
}

const filterProject = (projectName) => {
  removeMainContentChildren();
  console.log(todoArray)
  todoArray.forEach(todo => {
    if (todo.project === projectName) {
      console.log(todo.project)
      console.log(projectName)
      renderTodo(todo);
    }
  });
  loadTodoButton();
}

export {createProject, renderProject, filterProject}