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
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)',
    ColumnGap: '2rem',
    RowGap: '1rem',
}

export default CardGrid