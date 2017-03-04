import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import * as actions from '../actions/action';

class Report extends Component {
  componentDidMount() {
    const { todos, fetchTodos } = this.props;
    if (todos.length === 0) {
      fetchTodos();
    }
  }

  render() {
    const { todos } = this.props;
    const unfinished_todos = todos.filter(t => {
      return !(t.is_finished);
    })
    const finished_todos = todos.filter(t => {
      return t.is_finished;
    })

    return (
      <div>
        <div>
          <div>
            Count unfinished: <span>{unfinished_todos.length}</span>
          </div>
          <div>
            Count finished: <span>{finished_todos.length}</span>
          </div>
        </div>
      </div>
    );
  }
}

Report.propTypes = {
  todos: PropTypes.array.isRequired,
  fetchTodos: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    todos: state.todos.todos,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    ...bindActionCreators(actions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Report);
