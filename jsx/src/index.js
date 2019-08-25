// Import React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";

// Create a React component
const App = () => {

  const buttonText = 'Click me!';
  const labelText = 'Enter name:  ';
  return (
    <div>
      <label className="label" htmlFor="name">
        {labelText}
      </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: "blue", color: "white" }}>
        {buttonText}
      </button>
    </div>
  );
};

// Take component and show on screen
ReactDOM.render(<App />, document.querySelector("#root"));
