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
  
    //   case ActionTypes.REMOVE_COFFEE: {
    //     const currentCycleIndex = state.cycles.findIndex((cycle) => {
    //       return cycle.id === state.activeCycleId
    //     })
  
    //     if (currentCycleIndex < 0) {
    //       return state
    //     }
    //     return produce(state, (draft) => {
    //       draft.activeCycleId = null
    //       draft.cycles[currentCycleIndex].finishedDate = new Date()
    //     })
    //   }
      default:
        return state
    }
  }
  