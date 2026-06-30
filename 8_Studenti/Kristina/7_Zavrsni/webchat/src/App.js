import React from "react";
import "./App.css";
import { Message, Input } from "./components";

function App() {
  return (
    <div className="App">
      <div className="header">
        <h1>My Chat App</h1>
      </div>
      <ul>
        <Message />
      </ul>
      <Input />
    </div>
  );
}

export default App;
