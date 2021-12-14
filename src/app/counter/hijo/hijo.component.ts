import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
})
export class HijoComponent implements OnInit {

  @Input() contador: number | undefined;
  @Output() nuevoContador = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit(): void {
  }

  multiplicarContador() {
    this.contador! *= 2;
    this.nuevoContador.emit(this.contador)
  }

  dividirContador() {
    this.contador! /= 2;
    this.nuevoContador.emit(this.contador)
  }

  resetNieto(contadorReseteado: number) {
    this.contador = contadorReseteado;
    this.nuevoContador.emit(this.contador);
  }
}
