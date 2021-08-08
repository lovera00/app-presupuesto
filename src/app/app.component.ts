import { Component } from '@angular/core';
import { Egreso } from './egreso/egreso.models';
import { EgresoService } from './egreso/egreso.service';
import { Ingreso } from './ingreso/ingreso.model';
import { IngresoService } from './ingreso/ingreso.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ingresos: Ingreso[] = [];
  egresos: Egreso[] = [];
  constructor(private ingresoServicio: IngresoService, private egresoServicio: EgresoService) {
    this.ingresos = ingresoServicio.ingreso;
    this.egresos = egresoServicio.egreso;
  }
  getIngresoTotal() {
    let ingresoTotal: number = 0;
    this.ingresos.forEach(ingreso => {
      ingresoTotal = ingresoTotal + ingreso.valor;
    });
    return ingresoTotal;
  };
  getEgresoTotal() {
    let egresoTotal: number = 0;
    this.egresos.forEach(egreso => {
      egresoTotal = egresoTotal + egreso.valor;
    });
    return egresoTotal;
  };
  getPorcentajeTotal() {
    return this.getIngresoTotal() / this.getEgresoTotal();
  };
  getPresupuestoTotal() {
    let total:number;
    total = this.getIngresoTotal()-this.getEgresoTotal();
    console.log(total)
    return total;
  };
}
