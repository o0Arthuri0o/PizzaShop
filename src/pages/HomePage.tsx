import  { FC, useEffect, useState }  from 'react'
import AddPizzaForm from '../components/AddPizzaForm'
import Pizza from '../models/Pizza'
import DisplayPizzas from '../components/DisplayPizzas'

const HomePage: FC = () => {

  const [pizzasList, setPizzaList] = useState<Pizza[]>([])
  const addPizza = (newPizza: Pizza) => {

    const newPizzasList = [...pizzasList, newPizza];
    setPizzaList(newPizzasList)
    localStorage.setItem('pizzasState', JSON.stringify(newPizzasList))
  }
  const updatePizza = (newPizza: Pizza) => {

    const newPizzasList = pizzasList.map((pizza) => 
      (pizza.id === newPizza.id) ? newPizza : pizza)
    setPizzaList(newPizzasList)
    localStorage.setItem('pizzasState', JSON.stringify(newPizzasList))
  }
  const deletePizza = (id: number) => {
    const newPizzasList = pizzasList.filter((pizza) => pizza.id !== id)
    setPizzaList(newPizzasList)
    localStorage.setItem('pizzasState', JSON.stringify(newPizzasList))
  }

  useEffect(() => {
    const pizzasState = localStorage.getItem('pizzasState');
    if (pizzasState) {
      setPizzaList(JSON.parse(pizzasState))
    }

  }, [])

  console.log('pizzaList >>>', pizzasList)

  return (
    <>
        <span className='heading'>Наша пиццерия</span>
        <AddPizzaForm addPizza = {addPizza}/>
        <DisplayPizzas pizzasList={pizzasList} updatePizza={updatePizza} deletePizza={deletePizza} />
    </>
        

  )
}

export default HomePage
