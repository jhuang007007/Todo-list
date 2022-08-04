import { format } from "date-fns";
import { createTodo, renderTodo, todoArray } from "./createTodo";
import { projectArray } from "./projectFactory";

const body = document.querySelector('body');

const initialPageLoad = () => {
  const main = document.createElement('div');
  main.id = 'main';
  body.appendChild(main);

  const title = document.createElement('h1');
  title.textContent = 'Todo';

  main.appendChild(title)
}

const loadHeader = () => {
  const header = document.createElement('header');
  const main = document.querySelector('#main')

  main.appendChild(header);
  const nav = document.createElement('nav');
  const ul = document.createElement('ul');
  const openSideBarButtonContainer = document.createElement('li');
  const homeButtonContainer = document.createElement('li');
  const searchBarContainer = document.createElement('li');
  const openSideBarButton = document.createElement('img');
  const homeButton = document.createElement('img');
  const searchBar = document.createElement('input');
  const searchBarImage = document.createElement('img');
  const homeButtonLink = document.createElement('a');

  openSideBarButton.id = 'open-sidebar-button';

  header.appendChild(nav);
  nav.appendChild(ul);
  ul.appendChild(openSideBarButtonContainer);
  ul.appendChild(homeButtonContainer);
  ul.appendChild(searchBarContainer);
  homeButtonContainer.appendChild(homeButtonLink);
  openSideBarButtonContainer.appendChild(openSideBarButton);
  homeButtonLink.appendChild(homeButton);
  searchBarContainer.appendChild(searchBar);
  searchBarContainer.appendChild(searchBarImage);

  openSideBarButton.src = '../src/img/list.svg';
  homeButton.src = '../src/img/house.svg';
  searchBarImage.src = '../src/img/search.svg';
}

const loadSidebar = () => {
  const sidebar = document.createElement('div');
  const projectLinkList = document.createElement('ul');
  projectLinkList.classList.add('project-list');

  //all todos tab
  //loads all todos on click
  const allTodos = document.createElement('div')
  allTodos.classList.add('project-container')
  const allTodosLink = document.createElement('p')
  allTodosLink.textContent = 'All todos'
  allTodosLink.addEventListener('click', loadAllTodos)
  projectLinkList.appendChild(allTodos)
  allTodos.appendChild(allTodosLink)

  const projectContainer = document.createElement('li');
  projectContainer.classList.add('project');

  sidebar.id = 'sidebar';
  body.appendChild(sidebar);
  sidebar.appendChild(projectLinkList)
  projectLinkList.appendChild(projectContainer)
  
  const closeSideBarButton = document.createElement('img');

  closeSideBarButton.id = 'close-sidebar-button';
  closeSideBarButton.src = '../src/img/x-lg.svg';

  sidebar.appendChild(closeSideBarButton)
}

//load all todos (not filtered based on project)
const loadAllTodos = () => {
  removeMainContentChildren()
  todoArray.forEach(todo => {
    renderTodo(todo);
  });
  loadTodoButton()
}

const loadNewProjectButton = () => {
  const createNewProjectButton = document.createElement('button');
  createNewProjectButton.textContent = 'Create new project';
  createNewProjectButton.id = 'create-project-button';
  const projectLinkList = document.querySelector('.project-list')
  projectLinkList.appendChild(createNewProjectButton)
}

const loadContent = () => {
  const main = document.querySelector('#main');
  const mainContent = document.createElement('div');

  mainContent.id = 'main-content';
  main.appendChild(mainContent);
}

const loadNewProjectForm = () => {
  const projectLinkList = document.querySelector('.project-list')
  const newProjectForm = document.createElement('form');
  newProjectForm.id = 'project-form';
  const createNewProject = document.createElement('input');createNewProject.setAttribute('type', 'text');
  createNewProject.id = 'create-project';
  projectLinkList.appendChild(newProjectForm)
  newProjectForm.appendChild(createNewProject)
  
  //hide create project button
  document.querySelector('#create-project-button').remove();
}

const openSideBar = () => {
  document.querySelector('#sidebar').style.width = '250px';
  document.querySelector('#main').style.marginLeft = '250px';
}

const closeSideBar = () => {
  document.querySelector('#sidebar').style.width = '0';
  document.querySelector('#main').style.marginLeft = '0';
}

const openSideBarEventListener = () => {
  document.querySelector('#open-sidebar-button').addEventListener('click', openSideBar)
}

const closeSideBarEventListener = () => {
  document.querySelector('#close-sidebar-button').addEventListener('click', closeSideBar)
}

const loadTodoForm = () => {
  const today = new Date();
  const todayFormatted = format(today,'yyyy-MM-dd')
  const mainContent = document.querySelector('#main-content')
  const todoForm = document.createElement('form')

  todoForm.id = 'todo-form';
  
  const nameLabel = document.createElement('label')
  nameLabel.setAttribute('for', 'name')

  const nameInput = document.createElement('input')
  nameInput.setAttribute('type', 'text')
  nameInput.setAttribute('name', 'name')
  nameInput.setAttribute('placeholder', 'Name of todo')
  nameInput.id = 'name'
  nameInput.classList.add('form-value')
  nameInput.required = true;

  const descriptionLabel = document.createElement('label')
  descriptionLabel.setAttribute('for', 'description')

  const descriptionInput = document.createElement('input')
  descriptionInput.setAttribute('type', 'text')
  descriptionInput.setAttribute('name', 'description')
  descriptionInput.setAttribute('placeholder', 'Description')
  descriptionInput.id = 'description'
  descriptionInput.classList.add('form-value')
  descriptionInput.required = true;

  const dueDateLabel = document.createElement('label')
  dueDateLabel.setAttribute('for', 'dueDate')

  const dueDateInput = document.createElement('input')
  dueDateInput.setAttribute('type', 'date')
  dueDateInput.setAttribute('name', 'dueDate')
  dueDateInput.setAttribute('value', todayFormatted)
  dueDateInput.setAttribute('min', todayFormatted)
  dueDateInput.id = 'dueDate'
  dueDateInput.classList.add('form-value')
  dueDateInput.required = true;

  const priorityList = document.createElement('select')
  priorityList.id = 'priority'
  priorityList.classList.add('form-value')

  const priorityLow = document.createElement('option')
  priorityLow.textContent = 'Low';
  priorityLow.setAttribute('value', 'Low')
  const priorityMedium = document.createElement('option')
  priorityMedium.textContent = 'Medium';
  priorityMedium.setAttribute('value', 'Medium')
  const priorityHigh = document.createElement('option')
  priorityHigh.textContent = 'High';
  priorityHigh.setAttribute('value', 'High')

  priorityList.appendChild(priorityLow)
  priorityList.appendChild(priorityMedium)
  priorityList.appendChild(priorityHigh)

  const noteLabel = document.createElement('label')
  noteLabel.setAttribute('for', 'note')

  const noteInput = document.createElement('input')
  noteInput.setAttribute('type', 'text')
  noteInput.setAttribute('name', 'note')
  noteInput.setAttribute('placeholder', 'Add a note here...')
  noteInput.id = 'note'
  noteInput.classList.add('form-value')

  const projectLabel = document.createElement('label')
  projectLabel.setAttribute('for', 'project')

  const projectList = document.createElement('select')
  projectList.id = 'project'
  projectList.classList.add('form-value')

  //iterate through projectArray to render all project names into DOM in sidebar
  for (let i = 0; i < projectArray.length; i++) {
    const projectOption = document.createElement('option')
    projectOption.textContent = projectArray[i].name;
    projectOption.setAttribute('value', projectArray[i].name);
    projectList.appendChild(projectOption)
  }

  const submit = document.createElement('button')
  submit.setAttribute('type', 'submit')
  submit.textContent = 'submit'
  
  todoForm.appendChild(nameLabel)
  todoForm.appendChild(nameInput)
  todoForm.appendChild(descriptionLabel)
  todoForm.appendChild(descriptionInput)
  todoForm.appendChild(dueDateLabel)
  todoForm.appendChild(dueDateInput)
  todoForm.appendChild(priorityList)
  todoForm.appendChild(noteLabel)
  todoForm.appendChild(noteInput)
  todoForm.appendChild(projectLabel)
  todoForm.appendChild(projectList)
  todoForm.appendChild(submit)

  mainContent.appendChild(todoForm)
}

const loadTodoButton = () => {
  const todoButton = document.createElement('button')
  todoButton.textContent = 'Create new todo'
  const mainContent = document.querySelector('#main-content')

  mainContent.appendChild(todoButton)

  todoButton.addEventListener('click', () => {
    loadTodoForm()
    document.querySelector('#todo-form').addEventListener('submit', createTodo)
    todoButton.remove()
  });
}

const removeMainContentChildren = () => {
  const mainContent = document.querySelector('#main-content');
  while (mainContent.lastElementChild) {
    console.log(mainContent.lastElementChild)
    mainContent.removeChild(mainContent.lastElementChild);
  }
}

export {
  initialPageLoad,
  loadHeader,
  loadSidebar,
  loadNewProjectForm,
  loadContent,
  openSideBarEventListener,
  closeSideBarEventListener,
  loadTodoForm,
  loadTodoButton,
  loadNewProjectButton,
  removeMainContentChildren,
  loadAllTodos
}