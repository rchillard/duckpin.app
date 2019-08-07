import React, { Component } from "react";
import TodoItem from "./TodoItem";

class TodoList extends Component {
  // Need logic to handle 4 different types of lists
  // Need to add prop handling for list (as loop)

  render() {
    return (
      <ul>
        <TodoItem />
      </ul>
    );
  }
}

export default TodoList;
