import React, { Component } from "react";

export class buttonclick extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    };
  }

  clickHandler() {
    const oldCount = this.state.counter;
    const newCount = oldCount + 1;
    this.setState({
      counter: newCount
    });
  }

  render() {
    return (
      <div style={{ textAlign: "center", fontSize: 32 }}>
        <h1>{this.state.counter}</h1>
        <button onClick={() => this.clickHandler()}>Clicked</button>
      </div>
    );
  }
}

export default buttonclick;
