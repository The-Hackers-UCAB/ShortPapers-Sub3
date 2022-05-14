import { Doctor } from "./doctor";
import { Modalidad, StatusConsulta } from "../enums/cita";
import { Paciente } from "./paciente";
import { Fecha, Hora } from "./tiempo";

export class Cita {
    private fecha: Fecha;
    private hora: Hora;
    private modalidad: Modalidad;
    private status: StatusConsulta;
    private doctor: Doctor;
    private paciente: Paciente;

    constructor(
        fecha: Fecha,
        hora: Hora,
        modalidad: Modalidad,
        status: StatusConsulta,
        doctor: Doctor,
        paciete: Paciente
    ) {
        this.fecha = fecha;
        this.hora = hora;
        this.modalidad = modalidad;
        this.status = status;
        this.paciente = paciete;
        this.doctor = doctor;
    }

    public getFecha(): Fecha {
        return this.fecha;
    }

    private setFecha(fecha: Fecha) {
        this.fecha = fecha;
    }

    public getHora(): Hora {
        return this.hora;
    }

    private setHora(hora: Hora) {
        this.hora = hora;
    }

    public getModalidad(): Modalidad {
        return this.modalidad;
    }

    private setModalidad(modalidad: Modalidad) {
        this.modalidad = modalidad;
    }

    public getStatus(): StatusConsulta {
        return this.status;
    }

    private setStatus(status: StatusConsulta) {
        this.status = status;
    }

    public getDoctor(): Doctor {
        return this.doctor;
    }

    private setDoctor(doctor: Doctor) {
        this.doctor = doctor;
    }

    public getPaciente(): Paciente {
        return this.paciente;
    }

    private setPaciente(paciente: Paciente) {
        this.paciente = paciente;
    }
}
