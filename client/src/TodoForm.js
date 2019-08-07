import React, { Component } from "react";

class TodoForm extends Component {
  // Prevent default and handle submit needed here
  // Need to add to App state from this component
  // Should this even be its own component?

  render() {
    return (
      <form>
        <label>
          Add ToDo Item:
          <input type="text" width="50%" />
        </label>
        <input type="submit" value="Create" />
      </form>
    );
  }
}

export default TodoForm;
