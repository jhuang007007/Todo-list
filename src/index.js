//import here
import {closeSideBarEventListener, initialPageLoad, loadContent, loadHeader, loadSidebar, openSideBarEventListener, loadTodoButton, loadNewProjectButton, loadAllTodos} from './init.js';
import './style.css';
import './custom.scss';
import { renderAllProjects} from './createProject.js';
import { projectButtonEventHandler } from './createProjectButton.js';

//initialize dom
initialPageLoad()
loadHeader()
loadSidebar()
loadContent()
openSideBarEventListener()
closeSideBarEventListener()
loadTodoButton()
renderAllProjects()
loadNewProjectButton()
loadAllTodos()

//functionality
projectButtonEventHandler()

