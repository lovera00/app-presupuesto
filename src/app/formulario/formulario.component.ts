import { Component, OnInit } from '@angular/core';
import { Egreso } from '../egreso/egreso.models';
import { EgresoService } from '../egreso/egreso.service';
import { Ingreso } from '../ingreso/ingreso.model';
import { IngresoService } from '../ingreso/ingreso.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  tipo:string = "IngresoOperacion";
  descripcionInput:string;
  valorInput:number;
  constructor(private ingresoServicio:IngresoService,private egresoServicio:EgresoService) { }

  ngOnInit(): void {
  }
  tipoOperacion(evento){
  this.tipo = evento.target.value;
  }
  agregarValor(){
  if(this.tipo ==='IngresoOperacion'){
    this.ingresoServicio.ingreso.push(new Ingreso(this.descripcionInput,this.valorInput));
  }else{
    this.egresoServicio.egreso.push(new Egreso(this.descripcionInput,this.valorInput));
  }
  }
}
