import React, { Component } from "react";
import "./Form.css";

class Form extends Component {
  // Prevent default and handle submit needed here
  // Need to add to App state from this component
  // Should this even be its own component?

  constructor(props) {
    super(props);
    this.initialState = {
      name: "",
      urgent: false,
      important: false
    };

    this.state = this.initialState;
  }

  handleChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  submitForm = () => {
    this.props.handleSubmit(this.state);
    this.setState(this.initialState);
  };

  render() {
    const { name, urgent, important } = this.state;

    return (
      <form>
        <label>
          Add To Do:
          <input
            type="text"
            name="name"
            value={name}
            width="50%"
            onChange={this.handleChange}
          />
        </label>
        <label>
          <input
            type="checkbox"
            name="urgent"
            checked={this.state.urgent}
            onChange={this.handleChange}
          />
          Urgent
        </label>
        <label>
          <input
            type="checkbox"
            name="important"
            checked={this.state.important}
            onChange={this.handleChange}
          />
          Important
        </label>
        <input type="button" value="Submit" onClick={this.props.handleSubmit} />
      </form>
    );
  }
}

export default Form;
