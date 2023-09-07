import { Component } from '@angular/core';

@Component({
  selector: 'app-clase1',
  templateUrl: './clase1.component.html',
  styleUrls: ['./clase1.component.css']
})
export class Clase1Component {
  numeroUno: number = 0;
  numeroDos: number = 0;
  resultado: number = 0;
  promedio: number = 0;

  calcular() {
    this.resultado = Number(this.numeroUno) + Number(this.numeroDos);
    this.promedio = (this.resultado / 2);
  }

  limpiarInputs() {
    this.resultado = 0;
    this.promedio = 0;
    this.numeroUno = 0;
    this.numeroDos = 0;
  }
}
