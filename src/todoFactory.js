import { loadfromLocalStorage, saveToLocalStorage } from "./localStorageHandler";

let todoArray = [];

const todoFactory = (name, description, dueDate, priority = 'normal', note = null, project = 'general') => {
  const _todo = {};
  _todo.name = name;
  _todo.description = description;
  _todo.dueDate = dueDate;
  _todo.priority = priority;
  _todo.note = note;
  _todo.project = project;

  todoArray.push(_todo);
  let _index = todoArray.findIndex(td => td.name === name);

  const getName = () => name;
  const getDescription = () => description;
  const getDueDate = () => dueDate;
  const getPriority = () => priority;
  const getNote = () => note;
  const getProject = () => project;

  const setName = (newName) => name = newName;
  const setDescription = (newDescription) => description = newDescription;
  const setDueDate = (newDueDate) => dueDate = newDueDate;
  const setPriority = (newPriority) => priority = newPriority;
  const setNote = (newNote) => note = newNote;
  const setProject = (newProject) => project = newProject;

  const deleteTodo = () => {
    console.table(todoArray)
    todoArray.splice(_index, 1);
    const todoNamesArray = todoArray.map(td => td.name)
    console.table(todoNamesArray)
    const todoDescriptionsArray = todoArray.map(td => td.description)
    const todoDueDatesArray = todoArray.map(td => td.dueDate)
    const todoPrioritiesArray = todoArray.map(td => td.priority)
    const todoNotesArray = todoArray.map(td => td.note)
    const todoProjectsArray = todoArray.map(td => td.project)
    saveToLocalStorage('TODO_NAMES', todoNamesArray)
    saveToLocalStorage('TODO_DESCRIPTIONS', todoDescriptionsArray)
    saveToLocalStorage('TODO_DUEDATES', todoDueDatesArray)
    saveToLocalStorage('TODO_PRIORITIES', todoPrioritiesArray)
    saveToLocalStorage('TODO_NOTES', todoNotesArray)
    saveToLocalStorage('TODO_PROJECTS', todoProjectsArray)
  }
  
  return {
    getName,
    getDescription,
    getDueDate,
    getPriority,
    getNote,
    getProject,
    setName,
    setDescription,
    setDueDate,
    setPriority,
    setNote,
    setProject,
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
  const todoArrayLength = todoNamesArray.length;
  const loadedTodoArray = []
  for (let i = 0; i < todoArrayLength; i++) {
    const todo = todoFactory(
      todoNamesArray[i],
      todoDescriptionsArray[i],
      todoDueDatesArray[i],
      todoPrioritiesArray[i],
      todoNotesArray[i],
      todoProjectsArray[i])
    loadedTodoArray.push(todo)
  }
  return loadedTodoArray
}

export {todoFactory, retrieveTodosFromLocalStorage};