import React from "react";
import { InputGroup, Input, InputGroupAddon } from "reactstrap/";
import "./subComponentCss/numInput.css";

const NumInput = props => {
  return (
    <div>
      <InputGroup className="num-input">
        <InputGroupAddon addonType="prepend" className="prepend-class">
          {props.title}
        </InputGroupAddon>
        <Input
          placeholder={props.placeholder}
          name={props.name}
          value={props.value}
          onChange={e => props.onChange(e)}
          type="number"
        />
      </InputGroup>
    </div>
  );
};

export default NumInput;
