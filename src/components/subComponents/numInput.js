import React from "react";
import { InputGroup, Input, InputGroupAddon } from "reactstrap/";
import "./subComponentCss/numInput.css";

const NumInput = props => {
  return (
    <div>
      <InputGroup className="num-input">
        <InputGroupAddon addonType="prepend" className="prepend-class">
          {props.name}
        </InputGroupAddon>
        <Input
          placeholder={props.placeholder}
          value={props.value}
          onChange={e => props.onNumChange(e.target.value)}
          type="number"
        />
      </InputGroup>
    </div>
  );
};

export default NumInput;
