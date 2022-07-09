import { dimsumDishes } from './cardInfo'
import CardGrid from './cardGrid'

const Main = ({dimsumDishes}) => {
    console.log(dimsumDishes)
    return(
        <div style={container}>
            <CardGrid/>
        </div>
    )
}

const container = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}

export default Main