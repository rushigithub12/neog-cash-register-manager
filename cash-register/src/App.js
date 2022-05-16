import React, { useState } from "react";
import "./App.css";
import SectionOne from "./Components/SectionOne";
import SectionThree from "./Components/SectionThree";
import SectionTwo from "./Components/SectionTwo";

let availableNotes = {
  2000: "",
  500: "",
  100: "",
  20: "",
  10: "",
  5: "",
  1: "",
};

function App() {
  const [noOfNotes, setNoOfNotes] = useState(availableNotes);
  const [showSectionThree, setShowSectionThree] = useState(false);

  return (
    <div className="App">
      <div className="container">
        <SectionOne />
        <SectionTwo
          availablrNotes={availableNotes}
          showSectionThree={showSectionThree}
          setShowSectionThree={setShowSectionThree}
          setNoOfNotes={setNoOfNotes}
        />
        {showSectionThree && <SectionThree noOfNotes={noOfNotes} />}
      </div>
    </div>
  );
}

export default App;
