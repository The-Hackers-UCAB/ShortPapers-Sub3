
import { Persona } from "../models/persona";


function verNombres(_array:Array<Persona>) {
    
    console.log("Lista de pacientes: ");

    
    _array.forEach(element => {
        console.log(
            element.getNombre() + ', '
        );
    });
}
