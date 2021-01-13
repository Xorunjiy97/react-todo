import React from 'react'
import './tasksStyles.css'

const Task = props => {
    
     

    return(
            <li id={props.id}
                children={props.text}
                className='tasks__list'>                    
            </li>
        
    )
}

export default React.memo(Task);