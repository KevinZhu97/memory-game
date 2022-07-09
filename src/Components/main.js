import CardGrid from './cardGrid'
import React, { useState, useEffect } from 'react';

const Main = ({getScores}) => {
    const [currentScore, setCurrentScore] = useState(0);
    const [highScore, setHighScore] = useState(0);
    const [cardsClicked, setCardsClicked] = useState([]);

    const getDish = (e) => {
            const dishName = e.target.parentNode.lastChild.textContent;
            playRound(dishName)
    }

    const playRound = (dishName) => {
            if (cardsClicked.includes(dishName)) {
                resetGame()
            } else {
                let newScore = currentScore + 1 
                if (newScore > highScore) {
                    setHighScore(newScore)
                }
                setCurrentScore(newScore)
                setCardsClicked((prevState) => [...prevState, dishName])
                console.log(newScore)
                console.log(cardsClicked)
            };
    } 

    const resetGame = () => {
        setCardsClicked([])
        setCurrentScore(0)
    }

    return(
        <div style={container} sendscores={getScores(currentScore, highScore)}>
            <CardGrid handleCardClick={getDish}/>
        </div>
    )
}

const container = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}

export default Main