import constants from '../../constants/index'

const initialState = {
    tasks:[]
}

export default(state = initialState,action) => {
    switch(action.type) {
        case constants.SAVE_TASK:
            return {
                ...state,
                tasks: [...state.tasks,action.payload],
            }
        case constants.TASK_DONE:
            return {
                ...state,
                tasks: state.tasks.map(element => +action.payload === element.id ? { ...element, isCompleted: element.isCompleted ? false : true }: element)
            }
        case constants.TASK_DELETE:
            return {
                ...state,
                tasks: state.tasks.map(element => +action.payload === element.id ? { ...element, isOpen: false }: element)                
            }
        default:
            return state;        
    }
}