import Component from './ToDoApp.jsx';
import * as actions from './actions';
import * as selectors from './selectors';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    tasks: selectors.getAllTask(state)
});

const mapDispatchToProps = dispatch => ({
    saveTask: task => dispatch(actions.onSaveTask(task)),
    taskDone: taskId => dispatch(actions.onTaskDone(taskId)),
    deleteTask: taskId => dispatch(actions.onDeleteTask(taskId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
