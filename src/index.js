//import here
import {projectFactory} from './project.js';
import {todoFactory} from './todo.js';
import {closeSideBarEventListener, initialPageLoad, loadContent, loadHeader, loadSidebar, openSideBarEventListener} from './init.js';
import './style.css';

//initialize dom
initialPageLoad()
loadHeader()
loadSidebar()
loadContent()
openSideBarEventListener()
closeSideBarEventListener()

const bruh = todoFactory('bruh', 'description', 'noduedate');
bruh.getName()
bruh.setName("bruhh")
bruh.getName()
bruh.deleteTodo("bruhh")