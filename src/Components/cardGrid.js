import { dimsumDishes } from './cardInfo'
import Card from './card'

const CardGrid = () => {
    let dimsumDishesArray = dimsumDishes.map((dish) => (
        <Card dimsumDishName={dish.name} dimsumDishPic={dish.source}/>
    ))

    return(
        <div style={grid}>{dimsumDishesArray}</div>
    )
}

const grid = {
    maxWidth: '780px',
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)', 
    columnGap: '15px',
    rowGap: '15px',
}

export default CardGrid