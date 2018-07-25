import React from "react";
import { InputGroup, Input, InputGroupAddon } from "reactstrap/";
import "./subComponentCss/numInput.css";

const TextInput = props => {
  return (
    <div>
      <InputGroup className="num-input">
        <InputGroupAddon addonType="prepend" className="prepend-class">
          {props.title}
        </InputGroupAddon>
        <Input
          placeholder={props.placeholder}
          name={props.name}
          value={props.value ? props.value : null}
          onChange={e => props.onChange(e)}
          type="text"
        />
      </InputGroup>
    </div>
  );
};

export default TextInput;
