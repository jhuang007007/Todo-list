//import here
import {closeSideBarEventListener, initialPageLoad, loadContent, loadHeader, loadSidebar, openSideBarEventListener, loadTodoButton, loadNewProjectButton, loadAllTodos} from './init.js';
import './style.css';
import './custom.scss';
import { renderProject} from './createProject.js';
import { projectButtonEventHandler } from './createProjectButton.js';
import { projectFactory } from './projectFactory.js';

//initialize dom
initialPageLoad()
loadHeader()
loadSidebar()
loadContent()
openSideBarEventListener()
closeSideBarEventListener()
loadTodoButton()
renderProject(projectFactory('General'))
loadNewProjectButton();
loadAllTodos();

//functionality
projectButtonEventHandler();
