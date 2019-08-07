import React, { Component } from "react";

class TodoItem extends Component {
  // Need to add prop handling
  // Need to add delete onChange event handling
  // Styling to cross off 'To Do' item and slowly fade

  render() {
    return (
      <form>
        <label>
          <input type="checkbox" /> To Do Item
        </label>
        <input type="submit" value="Delete" />
      </form>
    );
  }
}

export default TodoItem;
