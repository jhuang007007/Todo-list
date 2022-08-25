import { filterProject } from "./createProject";
import { loadTodoButton } from "./init";
import { loadfromLocalStorage, saveToLocalStorage } from "./localStorageHandler";
import { retrieveTodosFromLocalStorage, todoFactory } from "./todoFactory";

let todoArray = [];
if (loadfromLocalStorage('TODO_NAMES') !== null) {
  todoArray = retrieveTodosFromLocalStorage();
}

const createTodo = (event) => {
  event.preventDefault();

  //turn input into object
  const name = document.querySelector('#name').value;
  const description = document.querySelector('#description').value;
  const dueDate = document.querySelector('#dueDate').value;
  const priority = document.querySelector('#priority').value;
  const note = document.querySelector('#note').value;
  const project = document.querySelector('#project').value;

  const todo = todoFactory(name, description, dueDate, priority, note, project)
  
  //save todos
  todoArray.push(todo)
  const todoNamesArray = todoArray.map(td => td.getName())
  const todoDescriptionsArray = todoArray.map(td => td.getDescription())
  const todoDueDatesArray = todoArray.map(td => td.getDueDate())
  const todoPrioritiesArray = todoArray.map(td => td.getPriority())
  const todoNotesArray = todoArray.map(td => td.getNote())
  const todoProjectsArray = todoArray.map(td => td.getProject())
  saveToLocalStorage('TODO_NAMES', todoNamesArray)
  saveToLocalStorage('TODO_DESCRIPTIONS', todoDescriptionsArray)
  saveToLocalStorage('TODO_DUEDATES', todoDueDatesArray)
  saveToLocalStorage('TODO_PRIORITIES', todoPrioritiesArray)
  saveToLocalStorage('TODO_NOTES', todoNotesArray)
  saveToLocalStorage('TODO_PROJECTS', todoProjectsArray)

  //render todos
  renderTodo(todo)

  //hide form
  document.querySelector('#todo-form').remove()
  loadTodoButton();
  
  //show todos with same project value
  filterProject(todo.getProject());
}

const renderTodo = (todo) => {
  console.table(todoArray.map(td => td.getName()))
  const todoContainer = document.createElement('div')
  todoContainer.classList.add('todo-container')
  const todoName = todo.getName();

  //todo values
  const name = document.createElement('p');
  name.textContent = todoName;
  const description = document.createElement('p');
  description.textContent = todo.getDescription();
  const dueDate = document.createElement('p');
  dueDate.textContent = todo.getDueDate();
  const priority = document.createElement('p');
  priority.textContent = todo.getPriority();
  const note = document.createElement('p');
  note.textContent = todo.getNote();
  const project = document.createElement('p');
  project.textContent = todo.getProject();
  todoContainer.appendChild(name)
  // todoContainer.appendChild(description)
  // todoContainer.appendChild(dueDate)
  // todoContainer.appendChild(priority)
  // todoContainer.appendChild(note)
  // todoContainer.appendChild(project)

  //delete button
  const deleteTodoButton = document.createElement('img');
  deleteTodoButton.classList.add('delete-todo-button')
  deleteTodoButton.src = '../src/img/x-lg.svg'
  deleteTodoButton.addEventListener('click', () => {
    todoContainer.remove();
    todo.deleteTodo();
    todoArray.splice(todoArray.findIndex(td => td.getName() === todoName), 1)
  })
  todoContainer.appendChild(deleteTodoButton)

  //expand button
  const expandTodoButton = document.createElement('img');
  expandTodoButton.classList.add('expand-todo-button')
  expandTodoButton.src = '../src/img/chevron-down.svg'
  expandTodoButton.addEventListener('click', () => {
    todoContainer.appendChild(description)
    todoContainer.appendChild(dueDate)
    todoContainer.appendChild(priority)
    todoContainer.appendChild(note)
    todoContainer.appendChild(project)
    expandTodoButton.remove()
    todoContainer.appendChild(collapseTodoButton)
  })
  todoContainer.appendChild(expandTodoButton)

  document.querySelector('#main-content').appendChild(todoContainer)

  //collapse button
  const collapseTodoButton = document.createElement('img');
  collapseTodoButton.classList.add('collapse-todo-button')
  collapseTodoButton.src = '../src/img/chevron-up.svg'
  collapseTodoButton.addEventListener('click', () => {
    description.remove()
    dueDate.remove()
    priority.remove()
    note.remove()
    project.remove()
    collapseTodoButton.remove()
    todoContainer.appendChild(expandTodoButton)
  })

  document.querySelector('#main-content').appendChild(todoContainer)
}

export {createTodo, renderTodo, todoArray}