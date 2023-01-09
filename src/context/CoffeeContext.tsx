import { ReactNode, createContext, useEffect, useReducer } from 'react'
import {
  Coffee,
  CoffeeAcquisition,
  coffeesReducer,
} from '../reducers/coffees/reducer'
import {
  addCoffeeAcquisitionAction,
  addCoffeeAction,
  decreaseCoffeeOnCartAction,
  increaseCoffeeOnCartAction,
  removeCoffeeAcquisitionAction,
  removeCoffeeAction,
} from '../reducers/coffees/actions'

export interface CoffeeData {
  id: number
  name: string
  price: number
  img: string
  quantity?: number
}

export interface CoffeeAcquisitionData {
  address: string
  state: string
  paymentMethod: string
  coffeeList: string
}

interface CoffeesContextType {
  coffees: Coffee[]
  coffeeAcquisition: CoffeeAcquisition | null
  createNewCoffee: (data: CoffeeData) => void
  getCoffeeQuantity: () => number | undefined
  deleteCoffee: (idToBeDeleted: number) => void
  increasedCoffeeQuantityOnCart: (idToBeIncreased: number) => void
  decreasedCoffeeQuantityOnCart: (idToBeDecreased: number) => void
  sumEveryCoffee: () => number
  handleCoffeeAcquisition: (coffeeAcquisition: CoffeeAcquisitionData) => void
  handleContinueAcquisitions: () => void
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
      coffeeAcquisition: null
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
        coffeeAcquisition: null
      }
    }
  )

  const { coffees, coffeeAcquisition } = coffeesState

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
    const coffeeSumList = coffees.map((coffee) => {
      return coffee.price * coffee.quantity!
    })
    return coffeeSumList.reduce((sum, currentValue) => {
      return sum + currentValue
    })
  }

  function getCoffeeQuantity() {
    if (coffees.length) {
      const coffeeQuantityList = coffees.map((coffee) => coffee.quantity)
      const coffeeList = coffeeQuantityList.reduce(
        (accumulator, currentValue) => {
          return accumulator! + currentValue!
        }
      )
      return coffeeList
    } else return 0
  }

  useEffect(() => {
    const stateJSON = JSON.stringify(coffeesState)

    localStorage.setItem('@coffee-delivery:coffees-state-1.0.0', stateJSON)
  }, [coffeesState])

  function handleCoffeeAcquisition(data: CoffeeAcquisitionData) {
    dispatch(addCoffeeAcquisitionAction(data))
    coffees.forEach(coffee => dispatch(removeCoffeeAction(coffee.id)))
  }

  function handleContinueAcquisitions(){
    dispatch(removeCoffeeAcquisitionAction())
  }

  return (
    <CoffeesContext.Provider
      value={{
        coffees,
        coffeeAcquisition,
        createNewCoffee,
        getCoffeeQuantity,
        deleteCoffee,
        increasedCoffeeQuantityOnCart,
        decreasedCoffeeQuantityOnCart,
        sumEveryCoffee,
        handleCoffeeAcquisition,
        handleContinueAcquisitions
      }}
    >
      {children}
    </CoffeesContext.Provider>
  )
}
