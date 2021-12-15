import {createAction, props} from "@ngrx/store";

export const incrementCounterAction = createAction('[Counter Component] Increment counter');
export const decrementCounterAction = createAction('[Counter Component] Decrement counter');
export const multiplyCounterAction = createAction(
  '[Hijo Component] Multiply counter',
  props<{ numeroAMultiplicar: number }>()
);
export const divideCounterAction = createAction(
  '[Hijo Component] Divide counter',
  props<{ numeroADividir: number }>()
);
export const resetCounterAction = createAction('[Nieto Component] Reset counter');
