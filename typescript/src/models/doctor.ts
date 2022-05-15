// telefono tambien se puede implementar como: type Telefono = { codigo:string; numero;string;}

import { ManejadorCitasDoctor } from "../handlers/citaDoctor";
import { Especialidad } from "./especialidad";
import { Paciente } from "./paciente";
import { Persona } from "./persona";

export class Doctor extends Persona {
    //
    private citasHandler: ManejadorCitasDoctor;
    private especialidad: Especialidad;
    private pacientes: Paciente[] = [];

    constructor(
        id: number,
        nombre: String,
        apellido: String,
        especialidad: Especialidad,
        pacientes: Paciente[] = []
    ) {
        super(id, nombre, apellido);
        this.especialidad = especialidad;

        this.pacientes = pacientes;
        this.citasHandler = new ManejadorCitasDoctor(this);
    }

    public getCitasHandler(): ManejadorCitasDoctor {
        return this.citasHandler;
    }

    private setEspecialidad(especialidad: Especialidad) {
        this.especialidad = especialidad;
    }

    public getEspecialidad(): Especialidad {
        return this.especialidad;
    }

    private setPacientes(pacientes: Paciente[]) {
        this.pacientes = pacientes;
    }

    public getPacientes(): Paciente[] {
        return this.pacientes;
    }
}
