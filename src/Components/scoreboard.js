const Scoreboard = ({currentScore, highScore}) => {
    return(
        <div style={scoreDisplay}>
            <div style={currentScoreBoard}>Current Score: {currentScore}</div>
            <div style={highScoreBoard}>High Schore: {highScore}</div>
        </div>
    )
}

const scoreDisplay = {
    display: 'flex',
    justifyContent: 'space-around',
    fontSize: '1.5rem'
}

const currentScoreBoard = {
    borderRadius: '10px',
    backgroundColor: '#FBA1A1',
    padding: '0.5rem'
}

const highScoreBoard = {
    borderRadius: '10px',
    backgroundColor: '#B8F1B0',
    padding: '0.5rem'
}

export default Scoreboard