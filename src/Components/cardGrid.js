import { dimsumDishes } from './cardInfo'
import Card from './card'

const CardGrid = ({handleCardClick}) => {
    let dimsumDishesArray = dimsumDishes.map((dish, index) => (
        <Card key={index} dimsumDishName={dish.name} dimsumDishPic={dish.source} handleCardClick={handleCardClick}/>
    ))

    return(
        <div style={grid} onClick={()=>shuffleArray(dimsumDishes)}>{dimsumDishesArray}</div>
    )
}

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

const grid = {
    maxWidth: '780px',
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)', 
    columnGap: '15px',
    rowGap: '15px',
}

export default CardGrid