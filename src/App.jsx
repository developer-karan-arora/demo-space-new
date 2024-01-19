import { useState, useEffect } from "react";
import { Wavedata } from "./data/Wavedata";
import "./App.css";
import "./Game.css";

function App() {
  // using states
  let [missfire, setMissfire] = useState(0);
  let [currentWave, setCurrentWave] = useState(0);
  let [emenyDetailedArray, setEmenyDetailedArray] = useState([
    { x: 100, y: 100, text: "codedamn" },
  ]);

  // global varriables 
  let lockedEnemyIndex = -1;
  let remainingEnemy = 0;

  // handle wave
  
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
          {emenyDetailedArray.map((enemy, enemyIndex) => {
            let toShow = false;
            let enemyText = enemy.text;
            let enemy_x = enemy.x;
            let enemy_y = enemy.y;
            let enemyPositionCSS = {
              top: `${enemy_y}px`,
              left: `${enemy_x}px`,
            };

            if (enemyText.length > 0) toShow = true; // if ememy then toShow
            return (
              toShow && (
                <span
                  className="enemy-mine" // enemy stylling
                  key={enemyIndex} // to prevent key error
                  style={enemyPositionCSS} // css change every frame
                >
                  <p>{enemyText}</p>
                  <div className="rotate mine-img"></div>
                </span>
              )
            );
          })}
          <div className="red-lane"></div>
          <div className="player"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
