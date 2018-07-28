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
    breedOptions: ["Husky", "Chihuahua", "Great Dane"],
    genderOptions: ["Male", "Female"],
    gender: "Male",
    idNumber: "12",
    tagNumber: "13",
    dogName: "Fido",
    issueDate: new Date("1/31/2015"),
    expDate: new Date("12/13/2015"),
    vacLength: "2 years",
    firstName: "Dave",
    lastName: "Davidson",
    suffix: "Jr.",
    homePhone: "555-555-5555",
    street: "1st St",
    street2: "",
    state: "CT",
    zip: "55555",
    city: "Mount Hills",
    mailingAddress: true,
    miscInfo: "",
    location: "another street"
  };

  setBreed = e => {
    this.setState({ breed: e });
  };
  setPrimaryColor = e => {
    this.setState({ primaryColor: e });
  };
  setSecondaryColor = e => {
    this.setState({ secondaryColor: e });
  };
  setGender = e => {
    this.setState({ gender: e });
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
        <div className="name-entries">
          <TextInput
            onChange={this.handleChange}
            title="Last"
            name="lastName"
            value={this.state.lastName}
          />
          <TextInput
            onChange={this.handleChange}
            title="First"
            name="firstName"
            value={this.state.firstName}
          />
          <TextInput
            onChange={this.handleChange}
            title="Suffix"
            name="suffix"
            value={this.state.suffix}
          />
        </div>
        <div className="address-entries">
          <TextInput
            onChange={this.handleChange}
            title="St"
            name="street"
            value={this.state.street}
          />
          <TextInput
            onChange={this.handleChange}
            title="City"
            name="city"
            value={this.state.city}
          />
          <TextInput
            onChange={this.handleChange}
            title="State"
            name="state"
            value={this.state.state}
          />
          <NumInput
            onChange={this.handleChange}
            title="Zip"
            name="zip"
            value={this.state.zip}
          />
        </div>
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
          <TextInput
            onChange={this.handleChange}
            title="Name"
            name="dogName"
            value={this.state.dogName}
          />
        </div>
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
          <TextInput
            onChange={this.handleChange}
            title="Length"
            name="vacLength"
            value={this.state.vacLength}
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
          <DropdownBox
            currentChoice={this.state.gender}
            choices={this.state.genderOptions}
            dropdownName="Gender"
            onChoiceChange={this.setGender}
          />
        </div>
      </div>
    );
  }
}

export default ClientEntry;
