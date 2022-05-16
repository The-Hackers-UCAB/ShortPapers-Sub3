import { Doctor } from './doctor';
import { ModalidadCita } from '../DS/modalidadCita';
import { StatusConsulta } from '../DS/statusConsulta';
import { Paciente } from './paciente';

export class Cita {
    private fechaHora?: Date;
    private modalidad: ModalidadCita;
    private status: StatusConsulta;
    private doctor: Doctor;
    private paciente: Paciente;

    constructor(modalidad: ModalidadCita, status: StatusConsulta, doctor: Doctor, paciete: Paciente, fechaHora?: Date) {
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

    public getModalidad(): ModalidadCita {
        return this.modalidad;
    }

    private setModalidad(modalidad: ModalidadCita) {
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
