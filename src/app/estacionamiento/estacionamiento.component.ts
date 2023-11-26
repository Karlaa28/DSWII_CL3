import { Component } from '@angular/core';

@Component({
  selector: 'app-estacionamiento',
  templateUrl: './estacionamiento.component.html',
  styleUrl: './estacionamiento.component.css'
})

export class EstacionamientoComponent {
  tiempoHoras: number = 0;
  tiempoMinutos: number = 0;
  costoPorHora: number = 1500;
  costoTotal: number = 0;

  calcularCosto(): void {
    const tiempoTotalEnHoras = this.tiempoHoras + this.tiempoMinutos / 60;
    this.costoTotal = tiempoTotalEnHoras * this.costoPorHora;
  }
}
