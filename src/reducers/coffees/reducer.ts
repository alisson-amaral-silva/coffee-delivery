import { ActionTypes } from "./actions"
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
      default:
        return state
    }
  }
  