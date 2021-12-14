import {Action} from "@ngrx/store";
import {decrementCounterAction, incrementCounterAction} from "./contador.actions";


export const _counterReducer = (state: number = 10, action: Action) => {
  switch (action.type) {
    case incrementCounterAction.type:
      return state + 1;
      case decrementCounterAction.type:
      return state - 1;
    default:
      return state;
  }
}
