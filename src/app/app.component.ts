import {Component} from '@angular/core';
import {Store} from "@ngrx/store";
import * as actions from "./counter/ngrx-contador/contador.actions";
import {AppState} from "./counter/ngrx-contador/contador.models";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  contador!: number;

  constructor(private store: Store<AppState>) {
    this.store.select('contador').subscribe(counter => {
      this.contador = counter;
    })
  }

  incrementContador() {
    this.store.dispatch(actions.incrementCounterAction());
  }

  decrementContador() {
    this.store.dispatch(actions.decrementCounterAction());
  }

}
