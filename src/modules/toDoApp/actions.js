import constants from '../../constants/index'

export const onSaveTask = task => ({
    type: constants.SAVE_TASK,
    payload: task
});