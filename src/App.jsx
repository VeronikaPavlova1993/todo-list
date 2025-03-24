import { useState } from 'react';

const styleWrap = {
 display: 'flex',
 flexWrap: 'wrap',
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
function App() {
 const [task, setTask] = useState('');

 function handleChange(e) {
  setTask(e.target.value);
 }

 return (
  <main style={styleMain}>
   <div style={styleWrap}>
    <div style={{ marginTop: '15px' }}>
     <input
      style={styleInput}
      type="text"
      value={task}
      placeholder="Название задачи"
      onChange={handleChange}
     />
     <button type="submit" style={styleSubmit}>
      Добавить
     </button>
    </div>
   </div>
  </main>
 );
}

export default App;
