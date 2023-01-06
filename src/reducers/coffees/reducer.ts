import { ActionTypes } from './actions'
import { produce } from 'immer'

export interface Coffee {
  id: number
  name: string
  price: number
  img: string
  quantity: number
}

interface CoffeesState {
  coffees: Coffee[]
}

export function coffeesReducer(state: CoffeesState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_COFFEE:
      return produce(state, (draft) => {
        draft.coffees.push(action.payload.coffees)
      })

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

      const increasedQuantity = coffee!.quantity + 1

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

      const decreasedQuantity = coffee!.quantity - 1

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

    default:
      return state
  }
}
