// el state y el action deben estar tipados (notar las interfaces)

import { CounterAction } from "../actions/actions";
import { CounterState } from "../interfaces/interfaces";

// lo demás es igual que siempre
export const counterReducer = (state: CounterState, action: CounterAction): CounterState => {
  switch(action.type) {
    case 'increaseBy':
      return {
        ...state,
        counter: state.counter + action.payload.value,
        previous: state.counter,
        changes: state.changes + 1,
      }
    case 'decreaseBy':
      return {
        ...state,
        counter: state.counter - action.payload.value,
        previous: state.counter,
        changes: state.changes + 1,
      }
    case 'reset':
      return {
        ...state,
        counter: 0,
        previous: 0,
        changes: 0,
      }
    default:
      return state;
  }
}
