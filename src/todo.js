//some constructor/factory to dynamically create todo objects
// const todoFactory = (name, description, dueDate, priority = 'normal', note = null, project = 'general') => {
//   const _todo = {};
//   _todo.name = name;
//   _todo.description = description;
//   _todo.dueDate = dueDate;
//   _todo.priority = priority;
//   _todo.note = note;
//   _todo.project = project;

//   let todoArray = [];
//   todoArray.push(_todo);
//   let _index = todoArray.findIndex(td => td.name === name);

//   const getName = () => name;
//   const getDescription = () => description;
//   const getDueDate = () => dueDate;
//   const getPriority = () => priority;
//   const getNote = () => note;
//   const getProject = () => project;

//   const setName = (newName) => name = newName;
//   const setDescription = (newDescription) => description = newDescription;
//   const setDueDate = (newDueDate) => dueDate = newDueDate;
//   const setPriority = (newPriority) => priority = newPriority;
//   const setNote = (newNote) => note = newNote;
//   const setProject = (newProject) => project = newProject;

//   const deleteTodo = () => {
//     todoArray === -1 ? console.log('todo does not exist') : todoArray.splice(_index, 1);
//   }
  
//   return {
//     getName,
//     getDescription,
//     getDueDate,
//     getPriority,
//     getNote,
//     getProject,
//     setName,
//     setDescription,
//     setDueDate,
//     setPriority,
//     setNote,
//     setProject,
//     deleteTodo,
//     todoArray
//   }
// }

const todoFactory = (name, description, dueDate, priority = 'normal', note = null, project = 'general') => {
  return {
    name, 
    description, 
    dueDate, 
    priority, 
    note, 
    project
  }
}

export {todoFactory};