import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import * as actions from '../actions/action';

class Index extends Component {
  componentDidMount() {
    const { todos, fetchTodos } = this.props;
    if (todos.length === 0) {
      fetchTodos();
    }
  }

  render() {
    const { todos } = this.props;
    const rows = todos.map((todo) => {
      return (
        <tr key={todo.id}>
          <td>{todo.id}</td>
          <td>{todo.name}</td>
          <td>{todo.desc}</td>
          <td>{(todo.is_finished) ? 'finished!' : ''}</td>
        </tr>
      );
    });

    return (
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>name</th>
            <th>description</th>
            <th>finished</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    );
  }
}

Index.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(Index);
