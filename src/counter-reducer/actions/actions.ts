export type CounterAction =
| {type: 'increaseBy', payload: { value: number } }
| {type: 'decreaseBy', payload: { value: number } }
| {type: 'reset'}

// action creators - creadores de acciones
// sirve para despachar las acciones a los reducers por medio de funciones
// tiene una semejanza a lo que se usa en Redux, lo cual es más comprensible
export const doReset = (): CounterAction => ({type: 'reset'});
export const doIncreaseBy = (value: number): CounterAction => ({type: 'increaseBy', payload: {value}});
export const doDecreaseBy = (value: number): CounterAction => ({type: 'decreaseBy', payload: {value}});
