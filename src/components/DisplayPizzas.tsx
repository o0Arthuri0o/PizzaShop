import  {FC} from 'react'
import Pizza from '../models/Pizza'
import SinglePizza from './SinglePizza'

interface DisplayPizzasProps {
    pizzasList: Pizza[],
    updatePizza: (newPizza: Pizza)=>void,
    deletePizza: (id: number)=>void,
}

const DisplayPizzas: FC<DisplayPizzasProps> = ({pizzasList, updatePizza, deletePizza}) => {
  return (
    <div className='container'>
        {pizzasList.map((pizza: Pizza) => {
            return <SinglePizza pizza={pizza} key={pizza.id} updatePizza={updatePizza} deletePizza={deletePizza} />
        })}
    </div>
  
  
)}

export default DisplayPizzas