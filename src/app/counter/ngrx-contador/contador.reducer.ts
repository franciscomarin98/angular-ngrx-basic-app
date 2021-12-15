import {createReducer, on} from "@ngrx/store";
import * as actions from "./contador.actions";

export const initialState = 20;
export const _counterReducer = createReducer(initialState,
  on(actions.incrementCounterAction, state => state + 1),
  on(actions.decrementCounterAction, state => state - 1),
  on(actions.multiplyCounterAction, (state, {numeroAMultiplicar}) => state * numeroAMultiplicar), //Aquí se se recibe props = {numeroAMultiplicar}
  on(actions.divideCounterAction, (state, {numeroADividir}) => state / numeroADividir),
  on(actions.resetCounterAction, state => initialState),
);


/*export const _counterReducer = (state: number = 10, action: Action) => {
  switch (action.type) {
    case incrementCounterAction.type:
      return state + 1;
      case decrementCounterAction.type:
      return state - 1;
    default:
      return state;
  }
}*/

