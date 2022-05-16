import React from "react";

function SectionThree({ noOfNotes }) {
  return (
    <>
      <div className="outputBox">
        <h2>Return Change</h2>
        <table>
          <tbody>
            <tr>
              <td>No of Notes</td>
              <td className="no-of-notes">
                {noOfNotes[2000] === "" ? "" : noOfNotes[2000]}
              </td>
              <td className="no-of-notes">
                {noOfNotes[500] === "" ? "" : noOfNotes[500]}
              </td>
              <td className="no-of-notes">
                {noOfNotes[100] === "" ? "" : noOfNotes[100]}
              </td>
              <td className="no-of-notes">
                {noOfNotes[20] === "" ? "" : noOfNotes[20]}
              </td>
              <td className="no-of-notes">
                {noOfNotes[10] === "" ? "" : noOfNotes[10]}
              </td>
              <td className="no-of-notes">
                {noOfNotes[5] === "" ? "" : noOfNotes[5]}
              </td>
              <td className="no-of-notes">
                {noOfNotes[1] === "" ? "" : noOfNotes[1]}
              </td>
            </tr>
            <tr>
              <td>Note(in Rs.)</td>
              <td>2000</td>
              <td>500</td>
              <td>100</td>
              <td>20</td>
              <td>10</td>
              <td>5</td>
              <td>1</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default SectionThree;
