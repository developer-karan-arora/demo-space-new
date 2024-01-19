import { useState, useEffect } from "react";
import "./App.css";
import "./Game.css";

function App() {
  return (
    <div className="game-bg">
      <div className="game">
        <div className="game-container">
          <div className="game-grid-animation"></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default App;
