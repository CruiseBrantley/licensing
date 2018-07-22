import React from "react";
import Choicebar from "../choiceBar/choiceBar";
import ClientEntry from "../text_entry_forms/clientEntry";
import "./outline.css";

const Outline = () => {
  return (
    <div className="outline">
      <Choicebar />
      <ClientEntry />
    </div>
  );
};
export default Outline;
