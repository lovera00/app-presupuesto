import { Ingreso } from "./ingreso.model";

export class IngresoService {
    ingreso: Ingreso[] = [];
    eliminarIngreso(ingreso:Ingreso){
        let index:number = this.ingreso.indexOf(ingreso);
        this.ingreso.splice(index,1) 
    }
}