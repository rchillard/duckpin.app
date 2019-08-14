import React from "react";
import logo from "./logo.svg";
import "./App.css";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

function App() {
  // Need to add state here for all items
  // Need to add layout
  const data = [
    "Walk the dog",
    "Send out the mail",
    "Prepare for upcoming county fair",
    "Milk the cows",
    "Feed the chickens"
  ];
  return (
    <div className="App">
      <header className="App-header">Test</header>
      {/* Add four to do lists for each section */}
      <TodoList listData={data} />
      <TodoForm />
    </div>
  );
}

export default App;
