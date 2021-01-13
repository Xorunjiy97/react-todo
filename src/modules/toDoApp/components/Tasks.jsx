import React from 'react'
import './tasksStyles.css'

const Tasks = props => {

    
  
    return(
        <>
        <div className='container__input-wrapper'>
            <input type="text" 
                //    onChange = {handleInput}
                   className='input-wrapper__text' 
                   placeholder="Add a task"/>
            <button className='input-wrapper__add-button'
                    // onClick={handleClick}
                    children='Add'/>
                          
        </div>
        <div className='container__list-wrapper'>
            <ul className='list-wrapper__tasks'>
                <li children={props.text}
                    className='tasks__list'>
                </li>
            </ul>            
        </div>
        </>
    )
}

export default React.memo(Tasks);