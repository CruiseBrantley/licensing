import React from "react";
import NavBar from "../navBar/navBar";
import ClientEntry from "../text_entry_forms/clientEntry";
import "./outline.css";

const Outline = () => {
  return (
    <div className="outline">
      <NavBar />
      <ClientEntry className="client-entry" />
      {/* <div className="spacing" /> */}
    </div>
  );
};
export default Outline;
