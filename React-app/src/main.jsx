// Import React and ReactDOM Libraries
import React from "react"; // Defines what a component is and how multiple components work together
import ReactDom from "react-dom/client"; // Knows how to get a component to show up in browser
import App from "./App";

// Get a reference to the div wiht the ID of root
const el = document.getElementById("root");

// Tell React to take control of that element
const root = ReactDom.createRoot(el);

// Show the component on screen
root.render(<App />);
