import React, { useState } from "react";
import { TextField } from "@mui/material";
import "./App.css";
const App = () => {
  const [result, setResult] = useState([]);

  const generatePrompt = () => {
    fetch("/generate").then((response) =>
      response.json().then((data) => {
        console.log(data);
        setResult(data.text);
      })
    );
  };

  return (
    <div className="app-container">
      <div className="shadow">
        <h1>
          Imag<span>INE</span> Art
        </h1>
        <TextField
          id="input"
          placeholder="e.g Mona Lisa crying"
          InputProps={{ style: { fontSize: 35 } }}
          InputLabelProps={{ style: { fontSize: 30 } }}
        />
        {/* <button onClick={generatePrompt}> Generate Prompt</button> */}
        {result.length > 0 ? result : null}
      </div>
    </div>
  );
};

export default App;
