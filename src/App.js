import Header from './components/Header'
import React  from 'react';
import Tasks from './components/tasks'
import {useState} from 'react'

function App() {
  
  const [alltasks, setstate] = useState([
    {
        id:1,
        text:'Docters appoinment',
        day:'Feb 5th at 2:30pm',
        reminder:true
    },
    {
        id:2,
        text:'Meeting at School',
        day:'Feb 6th at 1:30pm',
        reminder:true
    },
    {
        id:3,
        text:'Food Shopping',
        day:'Feb 5th at 2:30pm',
        reminder:false
    }
])

const deleteTask=(id)=>{
  setstate(alltasks.filter((task)=>task.id!==id))
}
const toggleReminder=(id)=>{
  setstate(alltasks.map((task)=>task.id===id?{...task,reminder:!task.reminder}:{...task}))
}

  return (
    <div className="container">
      <Header/>
      {alltasks.length>0 ? <Tasks tasks={alltasks} onToggle={toggleReminder} ondelete={deleteTask}/> : 'No Task Available'}
    </div>
  );
}

export default App;
