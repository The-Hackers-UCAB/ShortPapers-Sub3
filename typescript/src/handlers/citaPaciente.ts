import { Modalidad, StatusConsulta } from "../DS/cita";
import { Cita } from "../models/cita";
import { Paciente } from "../models/paciente";
import { Doctor } from "../models/doctor";
// import { Persona } from "../models/persona";

export class ManejadorCitasPaciente {
    private paciente: Paciente;

    constructor(paciente: Paciente) {
        this.paciente = paciente;
    }

    public solicitarCita(doctor: Doctor, modalidad: Modalidad): Cita {
        return new Cita(
            modalidad,
            StatusConsulta.porAsignarFechaySinConfirmar,
            doctor,
            this.paciente
        );
    }

    public confirmarCita(cita: Cita): Cita {
        return new Cita(
            cita.getModalidad(),
            StatusConsulta.conFechaHoraConfirmada,
            cita.getDoctor(),
            cita.getPaciente(),
            cita.getFechaHora()
        );
    }
}
