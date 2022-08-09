import React, { useState } from "react";

export default function TextForm(props) {
  // text =  "new text"; // Wrong way to change the state
  // setText("new text"); // Correct way to change the state

  //Find and Replace word

  // const [fWord, findWord] = useState("");
  // const [rWord, replaceWord] = useState("");

  // const handleFindChange = (event) => {
  //   findWord(event.target.value);
  // };

  // const handleReplaceChange = (event) => {
  //   console.log(replaceWord(event.target.value));
  // };

  // const handleReplaceClick = () => {
  //   let newText = text.replaceAll(fWord, rWord);
  //   setText(newText);
  // };
  // COde to remove extra spaces
  const handleExtraSpaces = ()=>{
    let newText = text.replace(/\s+/g, ' ').trim();
    setText(newText)
    }


  // Function to remove duplicate words from the string
  const onRemoveDuplicatesClick = (event) => {
    let newText = text
      .split(" ")
      .filter(function (item, i, allItems) {
        return i === allItems.indexOf(item);
      })
      .join(" ");

    setText(newText);
  };

  //Download the Text as a File
  const DownloadTextFile = () => {
    const element = document.createElement("a");
    const file = new Blob([text], {
      type: "text/plain",
    });
    element.href = URL.createObjectURL(file);
    element.download = "myfile.txt";
    element.click();
  };

  //Reverse the words
  const handleReverse = (event) => {
    /* Convert string to array*/
    let strArr = text.split("");
    /* Reverse array*/
    strArr = strArr.reverse();
    /* Convert array to string*/
    let newText = strArr.join("");
    setText(newText);
  };

  //Text-To-Speech
  const handleToSpeak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  };

  //Clear the Text
  const handleClear = () => {
    console.log("Clear button is clicked" + text);
    let newText = " ";
    setText(newText);
  };

  //Make it to Titlecase
  const handleToNormal = () => {
    console.log("Normal case button is clicked " + text);
    let newText = text
      .split(" ")
      .map((text) => text[0].toUpperCase() + text.substring(1).toLowerCase())
      .join(" ");
    setText(newText);
  };

  //Convert to Lowercase
  const handleLoClick = () => {
    console.log("LowerCase button is clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
  };

  // Convert to Uppercase
  const handleUpClick = () => {
    console.log("UpperCase button is clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };

  // to read each letter in the Text and to display on the Text area what is typed
  const handleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value);
  };

  // const acceptChar = (event) => {
  //   setText(event.target.value.replace(/[^a-zA-Z]*/g, ""));
  // };

  const [text, setText] = useState("Enter Text Here");

  return (
    <>
      <div className="container" my-3>
        <div className="mb-3">
          <h1>{props.heading}</h1>
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
          <br />
          <button className="btn btn-info mx-2" onClick={handleUpClick}>
            Convert To UpperCase
          </button>

          <button className="btn btn-info mx-2" onClick={handleLoClick}>
            Convert To LowerCase
          </button>

          <button className="btn btn-info mx-2" onClick={handleToNormal}>
            Convert To NormalCase
          </button>

          <button className="btn btn-info mx-2" onClick={handleClear}>
            Clear the Textarea
          </button>

          <button
            type="submit"
            onClick={handleToSpeak}
            className="btn btn-info mx-2"
          >
            Speak
          </button>

          <button
            type="submit"
            onClick={handleReverse}
            className="btn btn-info mx-2"
          >
            Reverse
          </button>

          <button className="btn btn-info mx-2" onClick={DownloadTextFile}>
            Download File
          </button>
          <button
            className="btn btn-info mx-2"
            onClick={onRemoveDuplicatesClick}
          >
            Erase Duplicate
          </button>

          <button className="btn btn-info mx-2 my-2" onClick={handleExtraSpaces}>Remove Extraspace</button>
          {/* <button
            type="submit"
            value={fWord}
            onChange={handleFindChange}
        
            className="btn btn-warning mx-2"
          >
            Find
          </button>
          <button
            type="submit"
            value={rWord}
            onChange={handleReplaceChange}
            onClick={handleReplaceClick}
            className="btn btn-warning mx-2"
          >
            Replace
          </button> */}
        </div>
      </div>
      <div className="container" my-5>
        <h2>Your Text Summary</h2>
        <p>
          You entered {text.split(" ").length} words and {text.length}{" "}
          characters
        </p>
      </div>
      <div className="container">
        <p>{0.008 * text.split(" ").length} minutes to read</p>
        <h3>Text Preview</h3>
        <p>{text}</p>
      </div>

      {/* <div className="container">
        <textarea
          className="form-control"
          id="myBox2"
          rows="8"
          value={text}
          onChange={acceptChar}
        ></textarea>
      </div> */}
    </>
  );
}
