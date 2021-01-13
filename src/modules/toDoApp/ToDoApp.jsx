import React,{ useState } from 'react';
import { onSaveTask } from './actions.js';
import Task from "./components/Task.jsx";
import './todoAppStyle.css'

const ToDo = props => {
    const [taskText, setTaskText] = useState('');

    const {
        tasks,
        saveTask,
    } = props

    const handleClick = event => {
        event.preventDefault();

        const task = {  
            id: tasks.length,
            text: taskText,
            isOpen: true,
            isCompleted: false,
        }
        saveTask(task);
    }

     const handleInput = (event) => {
        setTaskText(event.target.value)
     }

    return(
        <div className='container'>
            <h1>ToDo List :)</h1>
            <div className='container__input-wrapper'>
            <input type="text" 
                   onChange = {handleInput}
                   className='input-wrapper__text' 
                   placeholder="Add a task"/>
            <button className='input-wrapper__add-button'
                    onClick={handleClick}
                    children='Add'/>
                          
        </div>
        <div className='container__list-wrapper'>
            <ul className='list-wrapper__tasks'>
            {tasks.length ?
                tasks.map((task) => 
                    task.isOpen ? 
                    <Task id={task.id}
                          key={task.id}
                          isCompleted={task.isCompleted}
                          text ={task.text}                       
                    />
                    : null )
            : null
        }
            </ul>
        </div>               

        </div>
    )
}

export default React.memo(ToDo);