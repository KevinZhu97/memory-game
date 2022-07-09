import Header from './Components/header'
import Main from './Components/main'
import Footer from './Components/footer'
import React, { useState, useEffect } from 'react'

function App() {

  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  
  const getScores = (currentScore, highScore) => {
    setCurrentScore(currentScore)
    setHighScore(highScore)
  }

  return (
    <div className="App">
        <Header currentScore={currentScore} highScore={highScore}/>
        <Main getScores={getScores}/>
        <Footer/>
    </div>
  );
}

export default App;
