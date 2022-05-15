import { Doctor } from "./doctor";
import { Modalidad, StatusConsulta } from "../DS/cita";
import { Paciente } from "./paciente";

export class Cita {
    private fechaHora?: Date;
    private modalidad: Modalidad;
    private status: StatusConsulta;
    private doctor: Doctor;
    private paciente: Paciente;

    constructor(
        modalidad: Modalidad,
        status: StatusConsulta,
        doctor: Doctor,
        paciete: Paciente,
        fechaHora?: Date
    ) {
        this.fechaHora = fechaHora;
        this.modalidad = modalidad;
        this.status = status;
        this.paciente = paciete;
        this.doctor = doctor;
    }

    public getFechaHora(): Date | undefined {
        return this.fechaHora;
    }

    private setFecha(fechaHora: Date) {
        this.fechaHora = fechaHora;
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
