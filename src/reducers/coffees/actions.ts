import { Coffee } from './reducer'

export enum ActionTypes {
  ADD_COFFEE = 'ADD_COFFEE',
  REMOVE_COFFEE = 'REMOVE_COFFEE',
}

export function addCoffeeAction(newCoffee: Coffee) {
  return {
    type: ActionTypes.ADD_COFFEE,
    payload: {
      coffees: newCoffee,
    },
  }
}

export function removeCoffeeAction(coffeeId: number) {
  return {
    type: ActionTypes.REMOVE_COFFEE,
    payload: {
      coffeeId,
    },
  }
}
