import { projectButtonEventHandler } from "./createProjectButton";
import { renderTodo, todoArray } from "./createTodo";
import { loadTodoButton, removeMainContentChildren } from "./init";
import { projectFactory, projectArray } from "./projectFactory";

const createProject = (event) => {
  event.preventDefault();
  const projectName = document.querySelector('#create-project').value;
  const project = projectFactory(projectName)
  projectArray.push(project)
  console.log(project)
  console.table(projectArray)

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