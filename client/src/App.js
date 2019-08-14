import React, { Component } from "react";
import "./App.css";
import List from "./List";
import Form from "./Form";

class App extends Component {
  // Need to add layout
  state = {
    items: []
  };

  handleSubmit = item => {
    this.setState({ items: [...this.state.items, item] });
  };

  removeItem = index => {
    const { items } = this.state;

    this.setState({
      items: items.filter((item, i) => {
        return i !== index;
      })
    });
  };

  render() {
    const { items } = this.state;

    return (
      <div className="App">
        <header className="App-header">Test</header>
        {/* Add four to do lists for each section */}
        <List
          type={"Urgent/Important"}
          itemData={items}
          removeItem={this.removeItem}
        />
        <Form handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default App;
