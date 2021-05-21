import Header from './components/Header'
import React  from 'react';
import Tasks from './components/tasks'
import {useState} from 'react'
import AddTask from './components/AddTask'

function App() {
  const [showAddTask, setshowAddTask] = useState(false)
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

const onshowclick=()=>{
  setshowAddTask(!showAddTask)
}
const addTask=(task)=>{
  const id=Math.floor(Math.random()*10000)+1
  const newTask={id,...task}
  setstate([...alltasks,newTask])

}
const deleteTask=(id)=>{
  setstate(alltasks.filter((task)=>task.id!==id))
}
const toggleReminder=(id)=>{
  setstate(alltasks.map((task)=>task.id===id?{...task,reminder:!task.reminder}:{...task}))
}

  return (
    <div className="container">
      <Header showtask={onshowclick} btnstate={showAddTask}/>
      {showAddTask && <AddTask addtask={addTask}/>}
      {alltasks.length>0 ? <Tasks tasks={alltasks} onToggle={toggleReminder} ondelete={deleteTask}/> : 'No Task Available'}
    </div>
  );
}

export default App;
