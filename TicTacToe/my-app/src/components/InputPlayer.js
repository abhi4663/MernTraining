import React, { Component } from "react";

class InputPlayer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      player: "",
    };
  }
  handleChange = (e) => {
    this.setState({ player: e.target.value });
  };

  render() {
    return (
      <div className="inputName">
        <label>{this.props.label}</label>
        <input
          className="input"
          type="text"
          value={this.state.player}
          onChange={this.handleChange}
          required
        ></input>
        <br />
        <button
          onClick={() =>
            this.props.handleName(this.state.player, this.props.label)
          }
        >
          Submit
        </button>
      </div>
    );
  }
}

export default InputPlayer;
