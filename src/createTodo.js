import { filterProject } from "./createProject";
import { loadTodoButton } from "./init";
import { todoFactory } from "./todoFactory";

//read user input, create todo, push to array
const todoArray = [];

const createTodo = (event) => {
  event.preventDefault();
  //turn input into object
  // const todo = Array.from(document.querySelectorAll('#todo-form>.form-value')).reduce((prev, input) => ({ ...prev, [input.id]: input.value }), {});
  const name = document.querySelector('#name').value;
  const description = document.querySelector('#description').value;
  const dueDate = document.querySelector('#dueDate').value;
  const priority = document.querySelector('#priority').value;
  const note = document.querySelector('#note').value;
  const project = document.querySelector('#project').value;

  const todo = todoFactory(name, description, dueDate, priority, note, project)
  
  todoArray.push(todo)

  renderTodo(todo)

  //hide form
  document.querySelector('#todo-form').remove()
  loadTodoButton();
  
  //show todos with same project value
  filterProject(todo.getProject());
}

// const saveTodo = () => {
  
// }

const renderTodo = (todo) => {
  const todoContainer = document.createElement('div')
  todoContainer.classList.add('todo-container')

  //todo values
  const name = document.createElement('p');
  name.textContent = todo.getName();
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
  todoContainer.appendChild(description)
  todoContainer.appendChild(dueDate)
  todoContainer.appendChild(priority)
  todoContainer.appendChild(note)
  todoContainer.appendChild(project)

  //delete button
  const deleteTodoButton = document.createElement('img');
  deleteTodoButton.classList.add('delete-todo-button')
  deleteTodoButton.src = '../src/img/x-lg.svg'
  deleteTodoButton.addEventListener('click', () => {
    todoContainer.remove();
    project.deleteTodo();
  })
  todoContainer.appendChild(deleteTodoButton)

  document.querySelector('#main-content').appendChild(todoContainer)
}

export {createTodo, renderTodo, todoArray}