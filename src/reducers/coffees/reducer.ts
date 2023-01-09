import { ActionTypes } from './actions'
import { produce } from 'immer'

export interface Coffee {
  id: number
  name: string
  price: number
  img: string
  quantity?: number
}

export interface CoffeeAcquisition {
  address: string
  state: string
  paymentMethod: string
  coffeeList: string
}

interface CoffeesState {
  coffees: Coffee[]
  coffeeAcquisition: CoffeeAcquisition | null
}

export function coffeesReducer(state: CoffeesState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_COFFEE: {
      const coffee = state.coffees.find((coffee) => {
        return coffee.id === action.payload.coffees.id
      })

      const coffeeIndex = state.coffees.findIndex((coffee) => {
        return coffee.id === action.payload.coffees.id
      })

      if (coffee) {
        const increasedQuantity = coffee!.quantity! + 1
        return produce(state, (draft) => {
          draft.coffees[coffeeIndex].quantity = increasedQuantity
        })
      } else
        return produce(state, (draft) => {
          draft.coffees.push(action.payload.coffees)
        })
    }

    case ActionTypes.REMOVE_COFFEE: {
      const coffeeListWithoutDeletedOne = state.coffees.filter((coffee) => {
        return coffee.id !== action.payload.coffeeId
      })

      return produce(state, (draft) => {
        draft.coffees = coffeeListWithoutDeletedOne
      })
    }

    case ActionTypes.INCREASE_COFFEE_ON_CART: {
      const coffee = state.coffees.find((coffee) => {
        return coffee.id === action.payload.coffeeId
      })

      const coffeeIndex = state.coffees.findIndex((coffee) => {
        return coffee.id === action.payload.coffeeId
      })

      const increasedQuantity = coffee!.quantity! + 1

      return produce(state, (draft) => {
        draft.coffees[coffeeIndex].quantity = increasedQuantity
      })
    }

    case ActionTypes.DECREASE_COFFEE_ON_CART: {
      const coffee = state.coffees.find((coffee) => {
        return coffee.id === action.payload.coffeeId
      })

      const coffeeIndex = state.coffees.findIndex((coffee) => {
        return coffee.id === action.payload.coffeeId
      })

      const decreasedQuantity = coffee!.quantity! - 1

      if (coffee!.quantity === 1) {
        return produce(state, (draft) => {
          draft.coffees[coffeeIndex].quantity = 1
        })
      } else {
        return produce(state, (draft) => {
          draft.coffees[coffeeIndex].quantity = decreasedQuantity
        })
      }
    }

    case ActionTypes.ADD_COFFEE_ACQUISITION: {
      return produce(state, (draft) => {
        draft.coffeeAcquisition = action.payload.coffeeAcquisition
      })
    }

    case ActionTypes.REMOVE_COFFEE_ACQUISITION: {
      return produce(state, (draft) => {
        draft.coffeeAcquisition = null
      })
    }

    default:
      return state
  }
}
