import React, { Component } from "react";
import TodoItem from "./TodoItem";

class TodoList extends Component {
  // Need logic to handle 4 different types of lists
  // Need to add prop handling for list (as loop)

  render(props) {
    const rows = props.listData.map((row, index) => {
      return (
        <form key={index}>
          <label>
            <input type="checkbox" /> {row}
          </label>
          <input type="submit" value="Delete" />
        </form>
      );
    });

    return <ul>{rows}</ul>;
  }
}

export default TodoList;
