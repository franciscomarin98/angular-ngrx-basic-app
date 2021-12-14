import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
})
export class NietoComponent implements OnInit {
  @Input() contador: number | undefined;
  @Output() resetContador = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit(): void {
  }

  resetearContador() {
    this.contador = 0;
    this.resetContador.emit(this.contador);
  }

}
