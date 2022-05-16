import { StatusConsulta } from '../DS/statusConsulta';
import { TriggerEvento } from '../DS/triggerEvento';
import { Notificador } from '../libraries/notificacion/notificador';
import { Cita } from '../models/cita';
import { Doctor } from '../models/doctor';

export class ManejadorCitasDoctor {
    //
    private doctor: Doctor;
    private notificador: Notificador;

    constructor(doctor: Doctor) {
        this.doctor = doctor;
        this.notificador = new Notificador();
    }

    public asignarFecha(fechaHora: Date, cita: Cita): Cita {
        // notificar paciente // no aplica para este paper
        // this.notificador.notificarAll(cita.getPaciente(), EventoNotificacion.ModificacionCita, 'Se ha asignado fecha a la consulta que solicitó');

        return new Cita(cita.getModalidad(), StatusConsulta.conFechaHoraSinConfirmar, cita.getDoctor(), cita.getPaciente(), fechaHora);
    }

    public cancelarCita(cita: Cita): Cita {
        // notificar paciente
        this.notificador.notificarAll(cita.getPaciente(), TriggerEvento.CancelacionCita, 'Su cita fue cancelada');

        return new Cita(cita.getModalidad(), StatusConsulta.cancelada, cita.getDoctor(), cita.getPaciente(), cita.getFechaHora());
    }
}
