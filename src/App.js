import React from "react";
//import logo from "./logo.svg";
import "./App.css";
import Home from "./components/homepage";
import StateManager from "./components/StateManager";

function App() {
  return (
    <React.Fragment>
      <div className="App">
        <StateManager>
          <Home />
        </StateManager>
      </div>
    </React.Fragment>
  );
}

export default App;
