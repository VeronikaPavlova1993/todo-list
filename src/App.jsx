import { useState } from 'react';
import { DeleteIcon } from './icons/DeleteIcon';

const styleWrap = {
 position: 'absolute',
 left: '50%',
 top: '50%',
 width: '460px',
 paddingTop: '100px',
 textAlign: 'center',
 transform: 'translate(-50%, -50%)',
 backgroundColor: 'rgb(221, 163, 113)',
 boxShadow: '0 2px 8px rgba(49, 49, 49, 0.1)',
};

const styleDiv = {
 backgroundColor: 'rgb(212, 209, 207)',
};

const styleН1 = {
 margin: '12px 0',
};

const styleInput = {
 padding: '6px 4px',
 width: '70%',
 outline: 'none',
};

const styleSubmit = {
 padding: '7px 14px',
 backgroundColor: 'rgb(129, 127, 127)',
 border: 'none',
 borderRadius: '4px',
 color: 'rgb(255, 255, 255)',
};

const divUlList = {
 height: '600px',
 overflowY: 'auto',
};

const ulStyle = {
 padding: '15px',
 listStyleType: 'none',
};

const liStyle = {
 display: 'flex',
 justifyContent: ' space-between',
 listStyle: 'none',
 padding: '10px 5px',
 backgroundColor: 'rgb(255, 255, 255)',
 margin: '12px 0',
 boxShadow: '0 2px 8px rgb(5, 5, 5)',
 borderRadius: '3px',
 transition: '0.4s',
};

const delButton = {
 border: 'none',
 backgroundColor: 'rgb(255, 255, 255)',
};

function App() {
 const [tasks, setTasks] = useState([]);
 const [todo, setTodo] = useState('');

 function addTask() {
  const task = {
   id: Math.random(),
   value: todo,
  };
  let newTask = [task, ...tasks];
  setTasks(newTask);
  setTodo('');
 }

 function handleSubmit(e) {
  e.preventDefault();
 }

 function handleChange(e) {
  setTodo(e.target.value);
 }

 function handleDelete(id) {
  const del = tasks.filter((e) => e.id !== id);
  setTasks(del);
 }

 

 const taskTodoList = tasks.map((task) => {
  return (
   <li task={task.id} style={liStyle}>
    <div>{task.value}</div>
    <button style={delButton} onClick={() => handleDelete(task.id)}>
     {DeleteIcon()}
    </button>
   </li>
  );
 });

 return (
  <div style={styleDiv}>
   <div style={styleWrap}>
    <h1 style={styleН1}>ToDo List</h1>
    <form onSubmit={handleSubmit} style={{ margin: '12px 0' }}>
     <input
      style={styleInput}
      type="text"
      value={todo}
      placeholder="Название задачи"
      onChange={handleChange}
     />
     <button type="submit" style={styleSubmit} onClick={() => addTask()}>
      Добавить
     </button>
    </form>
    <div style={divUlList}>
     <ul style={ulStyle}>
      {tasks.length === 0 ? <li>Заданий нет</li> : taskTodoList}
     </ul>
    </div>
   </div>
  </div>
 );
}

export default App;
