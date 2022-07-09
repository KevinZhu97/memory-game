import logo from './dim-sum-header.jpg'

const Header = ({currentScore, highScore}) => {
    return (
        <div style={container}>
            <div style={currentScoreBoard}>Current Score: {currentScore}</div>
            <img style={Logo} src={logo} alt="logo"/>
            <div style={highScoreBoard}>High Score: {highScore}</div>
        </div>
    )
}

const container = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '2rem'
}

const Logo = {
    width: "200px",
    height: "200px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: '1rem',
    marginRight: '3rem',
    marginLeft: '3rem'
}

const currentScoreBoard = {
    borderRadius: '20px',
    backgroundColor: '#FBA1A1',
    padding: '0.5rem',
    height: '40px',
    width: '230px'
}

const highScoreBoard = {
    borderRadius: '20px',
    backgroundColor: '#B8F1B0',
    padding: '0.5rem',
    height: '40px',
    width: '200px'
}

export default Header