import React, { Component } from "react";
import "./App.css";
import List from "./List";
import Form from "./Form";

class App extends Component {
  // Need to add layout
  state = {
    priority: [],
    focus: [],
    delegate: [],
    ignore: []
  };

  handleSubmit = item => {
    console.log(item);
    if (item.urgent === true) {
      if (item.important === true) {
        this.setState({ priority: [...this.state.priority, item] });
      } else {
        this.setState({ delegate: [...this.state.delegate, item] });
      }
    } else {
      if (item.important === true) {
        this.setState({ focus: [...this.state.focus, item] });
      } else {
        this.setState({ ignore: [...this.state.ignore, item] });
      }
    }
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
    const { priority, focus, delegate, ignore } = this.state;

    return (
      <div className="App">
        <header className="App-header">General Order</header>
        {/* Add four to do lists for each section */}
        <q>
          What is important is seldom urgent and what is urgent is seldom
          important.<cite>-Dwight D. Eisenhower</cite>
        </q>
        <List
          type={"Priority"}
          advice={
            "These todo items are both urgent and important.  They get priority!"
          }
          itemData={priority}
          removeItem={this.removeItem}
        />
        <List
          type={"Focus"}
          advice={
            "These todo items are important but not urgent.  Focus on them."
          }
          itemData={focus}
          removeItem={this.removeItem}
        />
        <List
          type={"Delegate"}
          advice={
            "These todo items are urgent but not important.  Delegate them."
          }
          itemData={delegate}
          removeItem={this.removeItem}
        />
        <List
          type={"Ignore"}
          advice={
            "These todo items are neither urgent, nor important.  You should ignore them."
          }
          itemData={ignore}
          removeItem={this.removeItem}
        />
        <Form handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default App;
