import React from "react";
import "./App.css";
import { Message, Input } from "./components";
import { memberGenerator } from "./services";
import { Scaledrone } from "./services";

class App extends React.Component {
  UNSAFE_componentWillMount() {
    const config = {
      member: memberGenerator.get(),
      onInit: this.onInit,
      onMessageRecived: this.onMessageRecived,
    };

    this.drone = new Scaledrone(config);
  }

  onInit = () => {};

  onMessageRecived = () => {};

  render() {
    return (
      <div className="app">
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
}

export default App;
