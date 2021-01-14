import Component from './Task.jsx';
import * as actions from './actions.js';
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => ({
    deleteTask: taskId => dispatch(actions.onDeleteTask(taskId)),
    taskDone: taskId => dispatch(actions.onTaskDone(taskId))
});

export default connect( null, mapDispatchToProps )(Component);