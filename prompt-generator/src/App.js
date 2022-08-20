import React, { useState, useEffect } from "react";

function App() {
  const [result, setResult] = useState("Hello");

  useEffect(() => {
	fetch("/members")
	.then(response => response.json()
	.then(data => {
	  console.log(data)
	  setResult(data);
	})
  )}, [])

  return <div>Hello</div>
};

export default App;
