import React, { useState } from "react";
import { TextField, Button, List } from "@mui/material";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
const App = () => {
  const [result, setResult] = useState([]);
  const [inputresult, setInputResult] = useState([]);
  const temp = [
    " A chameleon with locations",
    "Chameleon in a lab with a computer",
    "A chicken with a helicopter on a hill",
  ];
  const test = (v) => {
    console.log("test" + v);
  };

  const generatePrompt = (category_type) => {
    console.log("called!");
    fetch("/generate", {
      method: "POST",
      mode: "cors",
      body: category_type,
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then((response) =>
      response.json().then((data) => {
        console.log(data);
        setResult(data.prompts);
      })
    );
  };

  return (
    <div className="app-container">
      {/* <Navbar /> */}
      <div className="banner-container">
        <div className="banner-text-container">
          <h1>Generate drawing prompts with ImagINE Art</h1>
        </div>
      </div>

      <div className="prompt-container">
        <p className="prompt-title">
          Enter your prompt below or select a category
        </p>
        <div className="prompt-feild">
          <TextField
            id="input"
            placeholder="e.g Mona Lisa crying"
            InputProps={{ style: { fontSize: 24 } }}
            InputLabelProps={{ style: { fontSize: 30 } }}
            onChange={(e) => {
              setInputResult(e.target.value);
            }}
          />
        </div>
        <Button onClick={() => generatePrompt(inputresult)}>
          Generate prompt
        </Button>
        <div className="category-container">
          <p className="category-title">Choose a Category!</p>
          <div className="categories">
            <a
              className="cardHolder category-link"
              href="#/"
              onClick={() => generatePrompt("locations")}
            >
              <div className="category-card category1"></div>
              <p className="category-name">Scenery</p>
            </a>
            <a
              className="cardHolder category-link"
              href="#/"
              onClick={() => generatePrompt("people")}
            >
              <div className="category-card category2"></div>
              <p className="category-name">Characters</p>
            </a>
            <a
              className="cardHolder category-link"
              href="#/"
              onClick={() => generatePrompt("animals")}
            >
              <div className="category-card category3"></div>
              <p className="category-name">Animals</p>
            </a>
          </div>
        </div>
        <div className="prompts">
          <ul>
            {result.length > 0
              ? result.map((d) => (
                  <li key={d}>
                    <p className="listitems">{d}</p>
                  </li>
                ))
              : null}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
