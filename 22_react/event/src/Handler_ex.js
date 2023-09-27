import React, { Component } from "react";

class Handler_ex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      str: "Hello world!",
    };
  }
  render() {
    const { str } = this.state;
    return (
      <>
        <p>{str}</p>
        <button
          onClick={() => {
            this.setState({ str: "Goodbye World!" });
          }}
        >
          Change
        </button>
      </>
    );
  }
}

export default Handler_ex;
