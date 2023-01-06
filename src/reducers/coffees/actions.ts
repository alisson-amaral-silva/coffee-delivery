import { Coffee, CoffeeAcquisition } from './reducer'

export enum ActionTypes {
  ADD_COFFEE = 'ADD_COFFEE',
  REMOVE_COFFEE = 'REMOVE_COFFEE',
  INCREASE_COFFEE_ON_CART = 'INCREASE_COFFEE_ON_CART',
  DECREASE_COFFEE_ON_CART = 'DECREASE_COFFEE_ON_CART',
  ADD_COFFEE_ACQUISITION = 'ADD_COFFEE_ACQUISITION',
  REMOVE_COFFEE_ACQUISITION = 'REMOVE_COFFEE_ACQUISITION',
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

export function addCoffeeAcquisitionAction(coffeeAcquisition: CoffeeAcquisition) {
  return {
    type: ActionTypes.ADD_COFFEE_ACQUISITION,
    payload: {
      coffeeAcquisition,
    },
  }
}

export function removeCoffeeAcquisitionAction() {
  return {
    type: ActionTypes.REMOVE_COFFEE_ACQUISITION
  }
}