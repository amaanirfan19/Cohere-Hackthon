import React, { useState } from "react";
import { TextField, Container, Button } from "@mui/material";
import "./Reset.css"
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
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
      <Navbar />
      <div className="banner-container">
        <div className="banner-text-container">
          <h1>Generate drawing prompts with ImagINE Art</h1>
        </div>
      </div>
     
      <div className="prompt-container">
        <p className="prompt-title">Enter your prompt below or select a category</p>
         <div className="prompt-feild">
          <TextField
            id="input"
            placeholder="e.g Mona Lisa crying"
            InputProps={{ style: { fontSize: 24 } }}
            InputLabelProps={{ style: { fontSize: 30 } }} />
         </div>
         <Button>Generate prompt</Button>
          {/* <button onClick={generatePrompt}> Generate Prompt</button> */}
          {result.length > 0 ? result : null}
          <div className="category-container">
            <p className="category-title">Categories</p>
            <div className="categories">
              <a className="cardHolder category-link" href="#">
                <div className="category-card category1"></div>
                <p className="category-name">Scenes</p>
              </a>
              <a className="cardHolder category-link" href="#">
              <div className="category-card category2"></div>
                <p className="category-name">Characters</p>
              </a>
              <a className="cardHolder category-link" href="#">
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
