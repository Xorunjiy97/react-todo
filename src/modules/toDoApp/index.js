import Component from './ToDoApp';
import * as actions from './actions';
import * as selectors from './selectors';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    tasks: selectors.getAllTask(state)
});

const mapDispatchToProps = dispatch => ({
    saveTask: task => dispatch(actions.onSaveTask(task)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
