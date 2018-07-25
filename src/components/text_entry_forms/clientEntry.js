import React from "react";
import "./clientEntry.css";
import DropdownBox from "../subComponents/dropdown";
import NumInput from "../subComponents/numInput";
import TextInput from "../subComponents/textInput";
import CustomDatePicker from "../subComponents/customDatePicker";

class ClientEntry extends React.Component {
  state = {
    primaryColor: "Brown",
    secondaryColor: "Black",
    colorOptions: ["White", "Brown", "Black", "Tan"],
    breed: "Husky",
    breedOptions: ["Husky", "Chihuahua", "Great Dane", "Chewbacca"],
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
  setBreed = e => {
    this.setState({ breed: e });
  };
  setSecondaryColor = e => {
    this.setState({ secondaryColor: e });
  };
  handleIssueDateChange = date => {
    this.setState({ issueDate: date });
  };
  handleExpDateChange = date => {
    this.setState({ expDate: date });
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="client-entry">
        <div className="value-entries">
          <NumInput
            onChange={this.handleChange}
            title="ID #"
            name="idNumber"
            value={this.state.idNumber}
          />
          <NumInput
            onChange={this.handleChange}
            title="Tag #"
            name="tagNumber"
            value={this.state.tagNumber}
          />
          <div className="calendar-entries">
            <CustomDatePicker
              dateName="Issued"
              name="issueDate"
              handleDateChange={this.handleIssueDateChange}
              date={this.state.issueDate}
            />
            <CustomDatePicker
              dateName="Expires"
              name="expDate"
              handleDateChange={this.handleExpDateChange}
              date={this.state.expDate}
            />
          </div>
        </div>
        <div className="name-entries">
          <TextInput
            onChange={this.handleChange}
            title="First"
            name="firstName"
            value={this.state.firstName}
          />
          <TextInput
            onChange={this.handleChange}
            title="Last"
            name="lastName"
            value={this.state.lastName}
          />
        </div>
        <div className="dropdowns">
          <DropdownBox
            currentChoice={this.state.breed}
            choices={this.state.breedOptions}
            dropdownName="Breed"
            onChoiceChange={this.setBreed}
          />
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
