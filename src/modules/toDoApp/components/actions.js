import constants from "../../../constants";

export const onDeleteTask = taskId => ({
    type: constants.TASK_DELETE,
    payload: taskId   
});

export const onTaskDone = taskId => ({
    type: constants.TASK_DONE,
    payload: taskId
});