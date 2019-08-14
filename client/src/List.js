import React, { Component } from "react";
import Item from "./Item";

class List extends Component {
  // Need logic to handle 4 different types of lists
  // URGENT + IMPORTANT
  // NOT URGENT + IMPORTANT
  // URGENT + NOT IMPORTANT
  // NOT URGENT + NOT IMPORTANT

  render() {
    const { type, advice, itemData, removeItem } = this.props;
    const rows = itemData.map((row, index) => {
      return <Item key={index} item={row} removeItem={removeItem} />;
    });

    return (
      <div>
        <h2>{type}</h2>
        <p>{advice}</p>
        <ul>{rows}</ul>
      </div>
    );
  }
}

export default List;
