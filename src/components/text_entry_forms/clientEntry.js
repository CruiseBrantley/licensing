import React from "react";
import "./clientEntry.css";
import DropdownBox from "../subComponents/dropdown";
import NumInput from "../subComponents/numInput";
import CustomDatePicker from "../subComponents/customDatePicker";
import { Input } from "reactstrap";

class ClientEntry extends React.Component {
  state = {
    primaryColor: "Brown",
    secondaryColor: "Black",
    colorOptions: ["White", "Brown", "Black", "Tan"],
    idNumber: "12",
    tagNumber: "13",
    issueDate: new Date("1/31/2015"),
    expDate: new Date("12/13/2015"),
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
  setIdNumber = e => {
    this.setState({ idNumber: e });
  };
  setTagNumber = e => {
    this.setState({ tagNumber: e });
  };
  handleIssueDateChange = date => {
    this.setState({ issueDate: date });
  };
  handleExpDateChange = date => {
    this.setState({ expDate: date });
  };

  render() {
    return (
      <div className="client-entry">
        <div className="value-entries">
          <NumInput
            onNumChange={this.setIdNumber}
            name="ID #"
            value={this.state.idNumber}
          />
          <NumInput
            onNumChange={this.setTagNumber}
            name="Tag #"
            value={this.state.tagNumber}
          />
        </div>
        <div className="calendar-entries">
          <CustomDatePicker
            dateName="Issued"
            handleDateChange={this.handleIssueDateChange}
            date={this.state.issueDate}
          />
          <CustomDatePicker
            dateName="Expires"
            handleDateChange={this.handleExpDateChange}
            date={this.state.expDate}
          />
        </div>
        <div className="name-entries">
          <Input className="text-field" placeholder="First Name" />
          <Input className="text-field" placeholder="Last Name" />
        </div>
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
