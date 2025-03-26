import { useState } from 'react';

const styleWrap = {
 display: 'flex',
 flexWrap: 'wrap',
 flexDirection: 'column',
 justifyContent: 'center',
 border: '2px solid rgb(22, 22, 22)',
 borderRadius: '5px',
 width: '50vw',
 height: '80vh',
 backgroundColor: 'rgb(113, 112, 111)',
};

const styleMain = {
 height: '100vh',
 display: 'flex',
 justifyContent: 'center',
 alignItems: 'center',
 backgroundColor: 'rgb(212, 209, 207)',
};

const styleInput = {
 maxWidth: '370px',
 margin: '18px 0px 24px',
 outline: 'none',
 padding: '18px 14px',
 color: 'rgb(153, 153, 153)',
 backgroundColor: 'rgb(244, 244, 244)',
 border: '1px solid rgb(244, 244, 244)',
};

const styleSubmit = {
 maxWidth: '173px',
 padding: '19px 50px',
 borderRadius: '0px',
 border: 'none',
 fontSize: '16px',
 fontWeight: '500',
 transitionProperty: 'background-color, color, border-color',
 cursor: 'pointer',
 transitionDuration: '300ms',
 color: 'rgb(255, 255, 255)',
 backgroundColor: 'rgb(168, 182, 79)',
};

const ulStyle = {
 maxWidth: '528px',
 color: 'rgb(255, 255, 255)',
 fontWeight: '700',
 fontSize: ' 24px',
 listStyleType: 'none',
};

const liStyle = {
 display: 'flex',
 justifyContent: ' space-between',
 maxWidth: '370px',
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

 function handleChange(e) {
  setTodo(e.target.value);
 }

 function handleDelete(id) {
  const del = tasks.filter(e => e.id !== id);
  setTasks(del);
 }

 function DeleteIcon() {
  return (
   <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
   >
    <g clipPath="url(#clip0_35_21)">
     <path
      d="M12 6.75V14.25H6V6.75H12ZM10.875 2.25H7.125L6.375 3H3.75V4.5H14.25V3H11.625L10.875 2.25ZM13.5 5.25H4.5V14.25C4.5 15.075 5.175 15.75 6 15.75H12C12.825 15.75 13.5 15.075 13.5 14.25V5.25Z"
      fill="#A8B64F"
     />
    </g>
    <defs>
     <clipPath id="clip0_35_21">
      <rect width="18" height="18" fill="white" />
     </clipPath>
    </defs>
   </svg>
  );
 }

 const taskTodoList = tasks.map((task) => {
  return (
   <li task={task.id} style={liStyle}>
    <div>{task.value}</div>
    <button  onClick={() => handleDelete(task.id)}>{DeleteIcon()}</button>
   </li>
  );
 });

 return (
  <main style={styleMain}>
   <div style={styleWrap}>
    <div style={{ marginTop: '15px' }}>
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
    </div>
    <ul style={ulStyle}>
     {tasks.length === 0 ? <li>Заданий нет</li> : taskTodoList}
    </ul>
   </div>
  </main>
 );
}

export default App;
