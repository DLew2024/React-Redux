// Import React and ReactDOM Libraries
import React from "react"; // Defines what a component is and how multiple components work together
import ReactDom from "react-dom/client"; // Knows how to get a component to show up in browser

// Get a reference to the div wiht the ID of root
const el = document.getElementById("root");

// Tell React to take control of that element
const root = ReactDom.createRoot(el);

// Create a component
function App() {
  const name = "Darius Lewis";
  const age = 21;

  return (
    <div>
      My name is:
      <h1>{name}</h1>
      I am :
      <h1>{age}</h1>
      years old
    </div>
  );
}

// Show the component on screen
root.render(<App />);
