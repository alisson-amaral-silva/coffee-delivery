import { ReactNode, createContext, useEffect, useReducer } from 'react'
import { Coffee, coffeesReducer } from '../reducers/coffees/reducer'
import { addCoffeeAction } from '../reducers/coffees/actions'

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
  getCoffeeList: () => number
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

  useEffect(() => {
    const stateJSON = JSON.stringify(coffeesState)

    localStorage.setItem('@coffee-delivery:coffees-state-1.0.0', stateJSON)
  }, [coffeesState])

  function getCoffeeList() {
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
        getCoffeeList,
      }}
    >
      {children}
    </CoffeesContext.Provider>
  )
}
