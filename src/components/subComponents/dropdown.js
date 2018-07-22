import React from "react";
import "./dropdown.css";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

class DropdownBox extends React.Component {
  state = {
    dropdownOpen: false
  };

  toggle = () => {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  };

  render() {
    return (
      <div className="dropdown-div">
        <div>
          <span className="left-choice-dropdown">{this.props.dropdownName}: </span>
        </div>
        <div>
          <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle
              caret
              color="primary"
              className="right-choice-dropdown"
            >
              {this.props.currentChoice}
            </DropdownToggle>
            <DropdownMenu>
              {this.props.choices.map((choice, index) => {
                return (
                  <DropdownItem
                    onClick={() => {
                      this.props.onChoiceChange(choice);
                      this.forceUpdate();
                    }}
                    key={index}
                  >
                    {choice}
                  </DropdownItem>
                );
              })}
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
    );
  }
}
export default DropdownBox;
