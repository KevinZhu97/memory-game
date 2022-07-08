const Card = ({dimsumDishPic, dimsumDishName}) => {
    return (
        <div style={container}>
            <img style={image} src={dimsumDishPic} alt=''/>
            <p>{dimsumDishName}</p>
        </div>
    )
}

const container ={
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '150px',
    width: '150px',
    border: '1px solid black',
    padding: '5px'
}

const image = {
    borderRadius: '50%',
    height: '100px',
    width: '100px',
    display: 'flex',
}

export default Card