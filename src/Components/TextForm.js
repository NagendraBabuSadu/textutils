import React, { useState } from "react";

export default function TextForm(props) {

    const handleToNormal = () => {
        console.log("Normal case button is clicked " + text);
        let newText = text.split(' ')
           .map(text => text[0].toUpperCase() + text.substring(1).toLowerCase())
           .join(' ');
        setText(newText);
    }
   

  const handleLoClick = () => {
    console.log("LowerCase button is clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleUpClick = () => {
    console.log("UpperCase button is clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value);
  };
  const [text, setText] = useState("Enter Text Here");

  return (
    <div>
      <div className="mb-3">
        <h1>{props.heading}</h1>
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="myBox"
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>
        Convert To UpperCase
      </button>{" "}
      &nbsp;
      <button className="btn btn-secondary" onClick={handleLoClick}>
        {" "}
        Convert To LowerCase{" "}
      </button>
        &nbsp;
      <button className="btn btn-info" onClick={handleToNormal}>Convert To NormalCase</button>
    </div>
  );
}
