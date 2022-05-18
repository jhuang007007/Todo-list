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

  sidebar.id = 'sidebar';
  body.appendChild(sidebar);
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

export {
  initialPageLoad,
  loadHeader,
  loadSidebar,
  loadContent,
  openSideBarEventListener,
  closeSideBarEventListener
}