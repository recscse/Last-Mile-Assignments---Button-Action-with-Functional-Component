import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {
  const [text, setText] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setText(true)
  }
  return (
    <div id="main">
      
      <button id="click" onClick={handleClick}>Click</button>
      {text===true?<p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>:''}


    </div>
  );
}


export default App;
