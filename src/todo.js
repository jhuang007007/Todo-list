//some constructor/factory to dynamically create todo objects
const todoFactory = (name, description, dueDate, priority = 'normal', note = null, project = 'general') => {
  const todo = {};
  todo.name = name;
  todo.description = description;
  todo.dueDate = dueDate;
  todo.priority = priority;
  todo.note = note;
  todo.project = project;

  let _todoArray = [];
  _todoArray.push(todo);
  let _index = _todoArray.findIndex(td => td.name === name);
  console.log(_index);
  console.table(_todoArray);

  const getName = () => console.log(name);
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
    _todoArray === -1 ? console.log('todo does not exist') : _todoArray.splice(_index, 1);
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

export {todoFactory};