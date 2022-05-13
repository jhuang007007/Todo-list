//some constructor/factory to dynamically create todo objects
const todoFactory = (name, description, dueDate, priority = 'normal', note = null, project = 'general') => {
  let _todoArray = [];
  _todoArray.push(name);

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

  const deleteTodo = () => splice(_todoArray.indexOf(name), 1)
  
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