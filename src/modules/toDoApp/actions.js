import constants from '../../constants/index'

export const onSaveTask = task => ({
    type: constants.SAVE_TASK,
    payload: task
});

export const onDeleteTask = taskId => ({
    type: constants.TASK_DELETE,
    payload: taskId
});

export const onTaskDone = taskId => ({
    type: constants.TASK_DONE,
    payload: taskId
});
