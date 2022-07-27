import {todoFactory} from './todo.js';
//read user input, create todo, push to array
const todoArray = [];

const createTodo = (event) => {
  event.preventDefault();
  //turn input into object
  const todo = Array.from(document.querySelectorAll('#todo-form>.form-value')).reduce((prev, input) => ({ ...prev, [input.id]: input.value }), {});

  todoArray.push(todo)

  //saveTodo(todo)
  renderTodo(todo)
}

// const saveTodo = () => {
  
// }

const renderTodo = (todo) => {
  const todoContainer = document.createElement('div')
  todoContainer.classList.add('todo-container')
  const todoValues = Object.values(todo)
  for (let i = 0; i < todoValues.length; i++) {
    const todoValue = document.createElement('p')
    console.log(todoValues)
    todoValue.textContent = todoValues[i];
    console.log(todoValues[i])
    todoContainer.appendChild(todoValue)
  }
  document.querySelector('#main-content').appendChild(todoContainer)
}

export {createTodo}