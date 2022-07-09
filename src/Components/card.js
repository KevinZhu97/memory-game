import './card.css'

const Card = ({dimsumDishPic, dimsumDishName, handleCardClick}) => {
    return (
        <div style={container} className="cardContainer" onClick={handleCardClick}>
            <img style={image} src={dimsumDishPic} alt=''/>
            <p>{dimsumDishName}</p>
        </div>
    )
}

const container ={
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '140px',
    width: '140px',
    padding: '5px',
    borderRadius: '10px',
    boxShadow: 'rgb(0 0 0 / 35%) 0px 5px 15px',
    cursor: 'pointer',
    transition: 'transform 0.3s ease 0s',
}

const image = {
    borderRadius: '20%',
    height: '100px',
    width: '100px',
    display: 'flex',
}

export default Card