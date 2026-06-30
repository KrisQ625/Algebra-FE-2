import React from "react";

class Input extends React.Component {
  state = {
    text: "",
  };

  handleChange = (e) => {
    const text = e.target.value;
    this.setState({ text });
  };

  handleSubmit = (event) => {
    event.preventDeafult();

    //

    this.setState({ text: "" });
  };

  render() {
    const { text } = this.state;
    return (
      <div className="input-container">
        <form onSubmit={this.handleSubmit}>
          <Input
            type="text"
            value={text}
            placeholer="Enter your message"
            autofocus
            onChange={this.handleChange}
          />
          <button className="send-button">Send</button>
        </form>
      </div>
    );
  }
}

export default Input;
