import { Coffee } from './reducer'

export enum ActionTypes {
  ADD_COFFEE = 'ADD_COFFEE',
  REMOVE_COFFEE = 'REMOVE_COFFEE',
  INCREASE_COFFEE_ON_CART = 'INCREASE_COFFEE_ON_CART',
  DECREASE_COFFEE_ON_CART = 'DECREASE_COFFEE_ON_CART',
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

export function increaseCoffeeOnCartAction(coffeeId: number) {
  return {
    type: ActionTypes.INCREASE_COFFEE_ON_CART,
    payload: {
      coffeeId,
    },
  }
}

export function decreaseCoffeeOnCartAction(coffeeId: number) {
  return {
    type: ActionTypes.DECREASE_COFFEE_ON_CART,
    payload: {
      coffeeId,
    },
  }
}