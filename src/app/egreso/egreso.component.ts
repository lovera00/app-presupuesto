import { Component, Input, OnInit } from '@angular/core';
import { Egreso } from './egreso.models';
import { EgresoService } from './egreso.service';

@Component({
  selector: 'app-egreso',
  templateUrl: './egreso.component.html',
  styleUrls: ['./egreso.component.css']
})
export class EgresoComponent implements OnInit {
  egresos:Egreso[]=[]
  @Input() ingresoTotal:number;
  constructor(private egresosService:EgresoService) { }

  ngOnInit(): void {
    this.egresos = this.egresosService.egreso;
  }
  calcularPorcentajeEgreso(egreso:Egreso){
    return egreso.valor / this.ingresoTotal;
  };
  eliminarEgresos(egreso:Egreso){
    this.egresosService.eliminarEgreso(egreso);
  }
}
