import { Component } from '@angular/core';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrl: './notas.component.css'
})

export class NotasComponent {
  nota1: number = 0;
  nota2: number = 0;
  nota3: number = 0;
  nota4: number = 0;
  promedio: number = 0;

  calcularPromedio(): void {
    const notas = [this.nota1, this.nota2, this.nota3, this.nota4];
    const notaMinima = Math.min(...notas);

    const promedioCalculado =
      (this.nota1 + this.nota2 + this.nota3 + this.nota4 - notaMinima) / 3;

    this.promedio = this.nota1 * 0.2 + this.nota2 * 0.3 + promedioCalculado * 0.5;
  }
}
