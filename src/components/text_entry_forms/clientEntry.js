import React from "react";
import DropdownBox from "../subComponents/dropdown";
import "./clientEntry.css";

class ClientEntry extends React.Component {
  state = {
    primaryColor: "Brown",
    secondaryColor: "Black",
    colorOptions: ["White", "Brown", "Black", "Tan"],
    idNumber: "12",
    tagNumber: "13",
    issueDate: "12/12/1212",
    expDate: "12/13/1212",
    firstName: "Dave",
    lastName: "Davidson",
    homePhone: "555-555-5555",
    homeAddress: { street: "1st St", state: "CT", zip: "55555" },
    mailingAddress: true,
    miscInfo: "",
    location: "another street"
  };

  setPrimaryColor = e => {
    this.setState({ primaryColor: e });
  };
  setSecondaryColor = e => {
    this.setState({ secondaryColor: e });
  };

  render() {
    return (
      <div className="client-entry">
        <div className="dropdowns">
          <DropdownBox
            currentChoice={this.state.primaryColor}
            choices={this.state.colorOptions}
            dropdownName="Primary Color"
            onChoiceChange={this.setPrimaryColor}
          />
          <DropdownBox
            currentChoice={this.state.secondaryColor}
            choices={this.state.colorOptions}
            dropdownName="Secondary Color"
            onChoiceChange={this.setSecondaryColor}
          />
        </div>
      </div>
    );
  }
}

export default ClientEntry;
