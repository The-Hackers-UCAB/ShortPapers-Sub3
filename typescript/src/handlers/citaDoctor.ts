import { Modalidad, StatusConsulta } from "../DS/cita";
import { Cita } from "../models/cita";
import { Doctor } from "../models/doctor";

// import { Persona } from "../models/persona";

export class ManejadorCitasDoctor {
    private doctor: Doctor;

    constructor(doctor: Doctor) {
        this.doctor = doctor;
    }

    public asignarFecha(fechaHora: Date, cita: Cita): Cita {
        return new Cita(
            cita.getModalidad(),
            StatusConsulta.conFechaHoraSinConfirmar,
            cita.getDoctor(),
            cita.getPaciente(),
            fechaHora
        );
    }
}
