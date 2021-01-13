import React from 'react';
import Tasks from "./components/Tasks.jsx";
import './todoAppStyle.css'

const ToDo = () => {

    return(
        <div className='container'>
            <h1>ToDo List :)</h1>
            <Tasks/>    

        </div>
    )
}

export default React.memo(ToDo);