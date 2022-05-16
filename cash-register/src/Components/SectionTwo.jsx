import React, { useState } from "react";

function SectionTwo({
  availablrNotes,
  showSectionThree,
  setShowSectionThree,
  setNoOfNotes,
}) {
  const [dislplayCash, setDisplayCash] = useState(false);
  const [billAmt, setBillAmt] = useState("");
  const [cashGiven, setCashGiven] = useState("");
  const [errMessage, setErrMessage] = useState("");

  const billHandler = (e) => {
    if (errMessage) setErrMessage("");
    if (showSectionThree) setShowSectionThree(false);
    setBillAmt(e.target.value);
  };

  const cashHandler = (e) => {
    if (errMessage) setErrMessage("");
    if (showSectionThree) setShowSectionThree(false);
    setCashGiven(e.target.value);
  };

  const nextHandler = () => {
    if (Number(billAmt) <= 0) {
      setErrMessage("Enter valid Amount");
    } else {
      setDisplayCash(true);
    }
  };

  const checkHandler = () => {
    if (Number(billAmt) > Number(cashGiven)) {
      setErrMessage("Do you wanna wash the plates?");
      return;
    }
    if (Number(billAmt) <= 0 || Number(cashGiven) <= 0) {
      setErrMessage("Enter valid Amount");
      return;
    }
    setNoOfNotes(availablrNotes);

    let amountToReturn = Number(cashGiven) - Number(billAmt);

    if (amountToReturn === 0) {
      setErrMessage("No amount to be returned...");
    } else {
      setShowSectionThree(true);

      const notesArr = [2000, 500, 100, 20, 10, 5, 1];
      for (let note of notesArr) {
        if (amountToReturn >= note) {
          let noOfNote = Math.trunc(amountToReturn / note);
          setNoOfNotes((prevState) => ({ ...prevState, [note]: noOfNote }));
          amountToReturn -= noOfNote * note;
        }
        if (amountToReturn === 0) break;
      }
      setShowSectionThree(true);
    }
  };

  return (
    <div action="" className="form">
      <div className="bill">
        <label htmlFor="billAmt">Bill Amount:</label>
        <input
          type="text"
          id="billAmt"
          value={billAmt}
          onChange={billHandler}
        />
        <button id="btnNext" onClick={nextHandler}>
          Next
        </button>
      </div>

      {dislplayCash && (
        <div className="cash">
          <label htmlFor="cashAmt">Cash Given:</label>
          <input
            type="text"
            id="cashAmt"
            value={cashGiven}
            onChange={cashHandler}
          />
          <button id="btnCheck" onClick={checkHandler}>
            Check
          </button>
        </div>
      )}

      <p id="msg">{errMessage}</p>
    </div>
  );
}

export default SectionTwo;
