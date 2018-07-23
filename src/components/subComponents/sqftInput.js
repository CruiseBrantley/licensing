import React from "react";
import { InputGroup, Input, InputGroupAddon } from "reactstrap/";
import "./numberInput.css";

class sqftInput extends React.Component {
  state = {
    sqft: this.props.sqft
  };

  onChangeInput = event => {
    this.setState({ [event.target.name]: event.target.value });
    this.props.callback(event.target.value);
  };

  render() {
    return (
      <div>
        <InputGroup>
          <InputGroupAddon addonType="prepend" className="prepend-class">
            {this.props.name}
          </InputGroupAddon>
          <Input
            placeholder="Amount"
            name="sqft"
            type="number"
            step="20"
            value={this.state.sqft}
            onChange={e => this.onChangeInput(e)}
          />
          <InputGroupAddon addonType="append">squarefeet</InputGroupAddon>
        </InputGroup>
      </div>
    );
  }
}

export default sqftInput;
