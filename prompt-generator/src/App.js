import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
const App = () => {
  const [result, setResult] = useState([]);

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
      <Navbar />
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
          />
        </div>
        <Button>Generate prompt</Button>
        <div className="category-container">
          <p className="category-title">Choose a Category!</p>
          <div className="categories">
            <a className="cardHolder category-link" href="#/" onClick={() => generatePrompt("locations")}>
              <div className="category-card category1"></div>
              <p className="category-name">Scenery</p>
            </a>
            <a className="cardHolder category-link" href="#/">
              <div className="category-card category2"></div>
              <p className="category-name">Characters</p>
            </a>
            <a className="cardHolder category-link" href="#/">
              <div className="category-card category3"></div>
              <p className="category-name">Animals</p>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
