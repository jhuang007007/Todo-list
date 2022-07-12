import { format } from "date-fns";

const body = document.querySelector('body');

const initialPageLoad = () => {
  const main = document.createElement('div');
  main.id = 'main';
  body.appendChild(main);

  main.textContent = 'main';
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

  sidebar.id = 'sidebar';
  body.appendChild(sidebar);
  sidebar.appendChild(projectLinkList)
  const closeSideBarButton = document.createElement('img');

  closeSideBarButton.id = 'close-sidebar-button';
  closeSideBarButton.src = '../src/img/x-lg.svg';

  sidebar.appendChild(closeSideBarButton)
}

const loadContent = () => {
  const main = document.querySelector('#main');
  const mainContent = document.createElement('div');

  mainContent.id = 'main-content';
  main.appendChild(mainContent);
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
  const mainContent = document.querySelector('#main-content')
  const todoForm = document.createElement('form')

  todoForm.id = 'todo-form';
  
  const nameLabel = document.createElement('label')
  nameLabel.setAttribute('for', 'name')
  nameLabel.textContent = 'name'

  const nameInput = document.createElement('input')
  nameInput.setAttribute('type', 'text')
  nameInput.setAttribute('name', 'name')
  nameInput.id = 'name'

  const descriptionLabel = document.createElement('label')
  descriptionLabel.setAttribute('for', 'description')

  const descriptionInput = document.createElement('input')
  descriptionInput.setAttribute('type', 'text')
  descriptionInput.setAttribute('name', 'description')
  descriptionInput.id = 'description'

  const dueDateLabel = document.createElement('label')
  dueDateLabel.setAttribute('for', 'dueDate')

  const dueDateInput = document.createElement('input')
  dueDateInput.setAttribute('type', 'text')
  dueDateInput.setAttribute('name', 'dueDate')
  dueDateInput.id = 'dueDate'

  const priorityLabel = document.createElement('label')
  priorityLabel.setAttribute('for', 'priority')

  const priorityInput = document.createElement('input')
  priorityInput.setAttribute('type', 'text')
  priorityInput.setAttribute('name', 'priority')
  priorityInput.id = 'priority'

  const noteLabel = document.createElement('label')
  noteLabel.setAttribute('for', 'note')

  const noteInput = document.createElement('input')
  noteInput.setAttribute('type', 'text')
  noteInput.setAttribute('name', 'note')
  noteInput.id = 'note'

  const projectLabel = document.createElement('label')
  projectLabel.setAttribute('for', 'project')

  const projectInput = document.createElement('input')
  projectInput.setAttribute('type', 'text')
  projectInput.setAttribute('name', 'project')
  projectInput.id = 'project'

  const submit = document.createElement('input')
  submit.setAttribute('type', 'submit')
  submit.setAttribute('value', 'Add todo')
  
  todoForm.appendChild(nameLabel)
  todoForm.appendChild(nameInput)
  todoForm.appendChild(descriptionLabel)
  todoForm.appendChild(descriptionInput)
  todoForm.appendChild(dueDateLabel)
  todoForm.appendChild(dueDateInput)
  todoForm.appendChild(priorityLabel)
  todoForm.appendChild(priorityInput)
  todoForm.appendChild(noteLabel)
  todoForm.appendChild(noteInput)
  todoForm.appendChild(projectLabel)
  todoForm.appendChild(projectInput)
  todoForm.appendChild(submit)

  mainContent.appendChild(todoForm)
}

export {
  initialPageLoad,
  loadHeader,
  loadSidebar,
  loadContent,
  openSideBarEventListener,
  closeSideBarEventListener,
  loadTodoForm
}