import React from 'react'
import './tasksStyles.css'

const Tasks = () => {

    return(
        <>
        <div className='container__input-wrapper'>
            <input type="text" 
                   className='input-wrapper__text' 
                   placeholder="Add a task"/>
            <button className='input-wrapper__add-button'>Add</button>       
        </div>
        <div className='container__list-wrapper'>
            <ul className='list-wrapper__tasks'></ul>
        </div>
        </>
    )
}

export default React.memo(Tasks);