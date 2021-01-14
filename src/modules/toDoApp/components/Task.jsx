import React from 'react'
import './tasksStyles.css'

const Task = props => {
    const { 
        deleteTask,
        taskDone
    } = props;
    console.log(props);
    const onDeleteTask = event => {
        deleteTask(event.target.id);
    }

    const onCompleteTask = event => {
        taskDone(event.target.id);
    }

    return(
            <li id={props.id}
                children={props.text}
                
                className='tasks__list'>   
                <span id={props.id}
                      onClick={onCompleteTask}
                      children={props.text}
                      className={`list__text ${props.isCompleted ? 'done' : null}`}
                 />
                <button
                    id={props.id}
                    onClick={onDeleteTask}
                    children='delete'
                    className='list__delete-btn'>
                </button>                  
            </li>
        
    )
}

export default React.memo(Task);