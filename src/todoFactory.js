import { loadfromLocalStorage, saveToLocalStorage } from "./localStorageHandler";

let todoArray = [];

const todoFactory = (name, description, dueDate, priority = 'normal', note = null, project = 'general', completed = false) => {
  const _todo = {};
  _todo.name = name;
  _todo.description = description;
  _todo.dueDate = dueDate;
  _todo.priority = priority;
  _todo.note = note;
  _todo.project = project;
  _todo.completed = completed;

  todoArray.push(_todo);
  let _index = todoArray.findIndex(td => td.name === name);

  const getName = () => name;
  const getDescription = () => description;
  const getDueDate = () => dueDate;
  const getPriority = () => priority;
  const getNote = () => note;
  const getProject = () => project;
  const getCompleted = () => completed;

  const setName = (newName) => {
    name = newName;
    todoArray[_index].name = newName;
    saveToLocalStorage('TODO_NAMES', todoArray.map(td => td.name))
  }
  const setDescription = (newDescription) => {
    description = newDescription;
    todoArray[_index].description = newDescription;
    saveToLocalStorage('TODO_DESCRIPTIONS', todoArray.map(td => td.description))
  }
  const setDueDate = (newDueDate) => {
    dueDate = newDueDate;
    todoArray[_index].dueDate = newDueDate;
    saveToLocalStorage('TODO_DUEDATES', todoArray.map(td => td.dueDate))
  }
  const setPriority = (newPriority) => {
    priority = newPriority;
    todoArray[_index].priority = newPriority;
    saveToLocalStorage('TODO_PRIORITIES', todoArray.map(td => td.priority))
  }
  const setNote = (newNote) => {
    note = newNote;
    todoArray[_index].note = newNote;
    saveToLocalStorage('TODO_NOTES', todoArray.map(td => td.note))
  }
  const setProject = (newProject) => {
    project = newProject;
    todoArray[_index].project = newProject;
    saveToLocalStorage('TODO_PROJECTS', todoArray.map(td => td.project))
  }
  const setCompleted = (newCompleted) => {
    completed = newCompleted;
    todoArray[_index].completed = newCompleted;
    saveToLocalStorage('TODO_COMPLETED', todoArray.map(td => td.completed))
  }

  const deleteTodo = () => {
    todoArray.splice(_index, 1);
    const todoNamesArray = todoArray.map(td => td.name)
    const todoDescriptionsArray = todoArray.map(td => td.description)
    const todoDueDatesArray = todoArray.map(td => td.dueDate)
    const todoPrioritiesArray = todoArray.map(td => td.priority)
    const todoNotesArray = todoArray.map(td => td.note)
    const todoProjectsArray = todoArray.map(td => td.project)
    const todoCompletedArray = todoArray.map(td => td.completed)
    saveToLocalStorage('TODO_NAMES', todoNamesArray)
    saveToLocalStorage('TODO_DESCRIPTIONS', todoDescriptionsArray)
    saveToLocalStorage('TODO_DUEDATES', todoDueDatesArray)
    saveToLocalStorage('TODO_PRIORITIES', todoPrioritiesArray)
    saveToLocalStorage('TODO_NOTES', todoNotesArray)
    saveToLocalStorage('TODO_PROJECTS', todoProjectsArray)
    saveToLocalStorage('TODO_COMPLETED', todoCompletedArray)
  }
  
  return {
    getName,
    getDescription,
    getDueDate,
    getPriority,
    getNote,
    getProject,
    getCompleted,
    setName,
    setDescription,
    setDueDate,
    setPriority,
    setNote,
    setProject,
    setCompleted,
    deleteTodo
  }
}

const retrieveTodosFromLocalStorage = () => {
  const todoNamesArray = loadfromLocalStorage('TODO_NAMES')
  const todoDescriptionsArray = loadfromLocalStorage('TODO_DESCRIPTIONS')
  const todoDueDatesArray = loadfromLocalStorage('TODO_DUEDATES')
  const todoPrioritiesArray = loadfromLocalStorage('TODO_PRIORITIES')
  const todoNotesArray = loadfromLocalStorage('TODO_NOTES')
  const todoProjectsArray = loadfromLocalStorage('TODO_PROJECTS')
  const todoCompletedArray = loadfromLocalStorage('TODO_COMPLETED')
  const todoArrayLength = todoNamesArray.length;
  const loadedTodoArray = []
  for (let i = 0; i < todoArrayLength; i++) {
    const todo = todoFactory(
      todoNamesArray[i],
      todoDescriptionsArray[i],
      todoDueDatesArray[i],
      todoPrioritiesArray[i],
      todoNotesArray[i],
      todoProjectsArray[i],
      todoCompletedArray[i])
    loadedTodoArray.push(todo)
  }
  return loadedTodoArray
}

export {todoFactory, retrieveTodosFromLocalStorage};