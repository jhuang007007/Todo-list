//import here
import {closeSideBarEventListener, initialPageLoad, loadContent, loadHeader, loadSidebar, openSideBarEventListener, loadTodoForm, loadNewProjectForm} from './init.js';
import {createTodo} from './createTodo.js';
import './style.css';
import './custom.scss';
import {createProject} from './createProject.js';
import { projectButtonEventHandler } from './createProjectButton.js';

//initialize dom
initialPageLoad()
loadHeader()
loadSidebar()
loadContent()
openSideBarEventListener()
closeSideBarEventListener()
loadTodoForm()

//functionality
document.querySelector('#todo-form').addEventListener('submit', createTodo);
projectButtonEventHandler();