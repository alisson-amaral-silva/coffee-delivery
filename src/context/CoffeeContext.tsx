import { ReactNode, createContext, useEffect, useReducer } from 'react'
import { Coffee, coffeesReducer } from '../reducers/coffees/reducer'
import {
  addCoffeeAction,
  decreaseCoffeeOnCartAction,
  increaseCoffeeOnCartAction,
  removeCoffeeAction,
} from '../reducers/coffees/actions'

export interface CoffeeData {
  id: number
  name: string
  price: number
  img: string
  quantity: number
}

interface CoffeesContextType {
  coffees: Coffee[]
  createNewCoffee: (data: CoffeeData) => void
  getCoffeeQuantity: () => number
  deleteCoffee: (idToBeDeleted: number) => void
  increasedCoffeeQuantityOnCart: (idToBeIncreased: number) => void
  decreasedCoffeeQuantityOnCart: (idToBeDecreased: number) => void
  sumEveryCoffee: () => number
}

interface CoffeesContextProviderProps {
  children: ReactNode
}

export const CoffeesContext = createContext({} as CoffeesContextType)

export function CoffeesContextProvider({
  children,
}: CoffeesContextProviderProps) {
  const [coffeesState, dispatch] = useReducer(
    coffeesReducer,
    {
      coffees: [],
    },
    () => {
      const storedStateAsJSON = localStorage.getItem(
        '@coffee-delivery:coffees-state-1.0.0'
      )

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON)
      }

      return {
        coffees: [],
      }
    }
  )

  const { coffees } = coffeesState

  function createNewCoffee(data: CoffeeData) {
    dispatch(addCoffeeAction(data))
  }

  function deleteCoffee(idToBeDeleted: number) {
    dispatch(removeCoffeeAction(idToBeDeleted))
  }

  function increasedCoffeeQuantityOnCart(idToBeDeleted: number) {
    dispatch(increaseCoffeeOnCartAction(idToBeDeleted))
  }

  function decreasedCoffeeQuantityOnCart(idToBeDeleted: number) {
    dispatch(decreaseCoffeeOnCartAction(idToBeDeleted))
  }

  function sumEveryCoffee() {
    const coffeeSumList = coffees.map((coffee) => {return coffee.price * coffee.quantity})
    return coffeeSumList.reduce((sum, currentValue) => {
      return sum + currentValue
    })
  }

  useEffect(() => {
    const stateJSON = JSON.stringify(coffeesState)

    localStorage.setItem('@coffee-delivery:coffees-state-1.0.0', stateJSON)
  }, [coffeesState])

  function getCoffeeQuantity() {
    if (coffees.length) {
      const coffeeQuantityList = coffees.map((coffee) => coffee.quantity)
      const coffeeList = coffeeQuantityList.reduce(
        (accumulator, currentValue) => {
          return accumulator + currentValue
        }
      )
      return coffeeList
    } else return 0
  }

  return (
    <CoffeesContext.Provider
      value={{
        coffees,
        createNewCoffee,
        getCoffeeQuantity,
        deleteCoffee,
        increasedCoffeeQuantityOnCart,
        decreasedCoffeeQuantityOnCart,
        sumEveryCoffee
      }}
    >
      {children}
    </CoffeesContext.Provider>
  )
}
