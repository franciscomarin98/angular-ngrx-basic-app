import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState} from "../../ngrx-contador/contador.models";
import {divideCounterAction, multiplyCounterAction} from "../../ngrx-contador/contador.actions";

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
})
export class HijoComponent implements OnInit {

  contador!: number;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.select('contador').subscribe(counter => this.contador = counter);
  }

  multiplicarContador = () => this.store.dispatch(multiplyCounterAction({numeroAMultiplicar: 2}));
  dividirContador = () => this.store.dispatch(divideCounterAction({numeroADividir: 2}));


}
