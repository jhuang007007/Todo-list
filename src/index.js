//import here
import {projectFactory} from './project.js';
import {todoFactory} from './todo.js';
import {closeSideBarEventListener, initialPageLoad, loadContent, loadHeader, loadSidebar, openSideBarEventListener, loadTodoForm} 
from './init.js';
import {createTodo} from './createTodo.js';
import './style.css';
//import { addProjectToDOM } from './addProject.js';

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

