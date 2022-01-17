import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Likecom from "./components/like";
import MouseEvent from "./components/mouseEvent";
import useMousePosition from "./hooks/useMousePosition";

function App() {
  const position = useMousePosition()
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>x{position.x},y:{position.y}</p>
        <Likecom />
        <MouseEvent/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
