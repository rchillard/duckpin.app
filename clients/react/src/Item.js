import React, { Component } from "react";

class Item extends Component {
  // Need to add prop handling
  // Need to add delete onChange event handling
  // Styling to cross off 'To Do' item and slowly fade

  render() {
    const { key, item, removeItem } = this.props;

    return (
      <form key={key}>
        <label>
          <input type="checkbox" />
          {item.name}
        </label>
        <button onClick={() => removeItem(item)}>Delete</button>
      </form>
    );
  }
}

export default Item;
