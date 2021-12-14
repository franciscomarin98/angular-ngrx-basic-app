import {Component} from '@angular/core';
import {Store} from "@ngrx/store";
import * as actions from "./counter/ngrx-contador/contador.actions";

interface AppState {
  contador: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  contador: number | undefined;

  constructor(private store: Store<AppState>) {
    this.store.subscribe(state => {
      this.contador = state.contador;
    })
  }

  incrementContador() {
    this.store.dispatch(actions.incrementCounterAction());
  }

  decrementContador() {
    this.store.dispatch(actions.decrementCounterAction());
  }

}
