import { useState, useEffect } from "react";
import "./App.css";
import "./Game.css";

function App() {
  // using states 
  let [missfire, setMissfire] = useState(0);
  let [currentWave, setCurrentWave] = useState(0);


  return (
    <div className="game-bg">
      <div className="game">
        <div className="game-container">
          <div className="game-grid-animation"></div>
          <div className="data-container">
            <p>Press any Key to Start Game and space to go to next level</p>
            <p>{"CURRENT WAVE : " + currentWave}</p>
            <p>{"MISSFIRE : " + missfire}</p>
          </div>
          <div className="red-lane"></div>
          <div className="player"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
