import React, { Component } from "react";
import PropTypes from "prop-types";

class List extends Component {
  render() {
    const { todos } = this.props;
    return (
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.name}</li>
        ))}
      </ul>
    );
  }
}

List.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      done: PropTypes.bool.isRequired
    })
  )
};

export default List;
