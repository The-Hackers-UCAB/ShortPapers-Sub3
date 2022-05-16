import { StatusConsulta } from '../DS/statusConsulta';
import { Cita } from '../models/cita';
import { Paciente } from '../models/paciente';
import { Doctor } from '../models/doctor';
import { ModalidadCita } from '../DS/modalidadCita';
// import { Persona } from "../models/persona";

export class ManejadorCitasPaciente {
    private paciente: Paciente;

    constructor(paciente: Paciente) {
        this.paciente = paciente;
    }

    public solicitarCita(doctor: Doctor, modalidad: ModalidadCita): Cita {
        return new Cita(modalidad, StatusConsulta.porAsignarFechaySinConfirmar, doctor, this.paciente);
    }

    public confirmarCita(cita: Cita): Cita {
        return new Cita(cita.getModalidad(), StatusConsulta.conFechaHoraConfirmada, cita.getDoctor(), cita.getPaciente(), cita.getFechaHora());
    }
}
