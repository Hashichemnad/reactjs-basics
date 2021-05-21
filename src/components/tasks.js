import React from 'react'
import Task from './Task'

const tasks = (props) => {

    return (
        <>
         {props.tasks.map((task)=>(
             <Task key={task.id} task={task} onToggle={props.onToggle} ondelete={props.ondelete}/>
         ))}   
        </>
    )
}

export default tasks
