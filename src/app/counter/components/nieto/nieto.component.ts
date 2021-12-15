import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AppState} from '../../ngrx-contador/contador.models';
import {Store} from "@ngrx/store";
import {resetCounterAction} from "../../ngrx-contador/contador.actions";

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
})
export class NietoComponent implements OnInit {

  contador!: number;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.store.select('contador').subscribe(contador => {
      this.contador = contador;
    })
  }

  resetearContador = () => this.store.dispatch(resetCounterAction());

}
