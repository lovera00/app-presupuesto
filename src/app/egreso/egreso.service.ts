import { Egreso } from "./egreso.models";

export class EgresoService {
    egreso: Egreso[] = []
    eliminarEgreso(ingreso:Egreso){
        let index:number = this.egreso.indexOf(ingreso);
        this.egreso.splice(index,1) 
    }
}