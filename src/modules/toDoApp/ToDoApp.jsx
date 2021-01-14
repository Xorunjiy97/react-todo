import React,{ useState } from 'react';
import Task from "./components";
import './todoAppStyle.css'

const ToDo = props => {
    console.log(props);
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
        setTaskText('')
    }

     const handleInput = (event) => {
        setTaskText(event.target.value)        
     }

    return(
        <div className='container'>
            <h1>ToDo List</h1>
            <div className='container__input-wrapper'>
            <input type="text" 
                   value = {taskText}
                   onChange = {handleInput}
                   className='input-wrapper__text' 
                   placeholder="Add a task"/>
            <button onClick={handleClick}
                    children='Add'                         
                    className='input-wrapper__add-button'
            />                         
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