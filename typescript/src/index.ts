import { Doctor } from './models/doctor';
import { Especialidad } from './models/especialidad';
import { Paciente } from './models/paciente';
import { CampoUnidadRef, SubRegistro } from './models/subRegistro';
import { Telefono } from './models/telefono';
import { ModalidadCita } from './DS/modalidadCita';
import { PreferenciaNotificacion } from './models/preferencias';
import { TriggerEvento } from './DS/triggerEvento';
import { MetodoNotificacion } from './DS/metodoNotificacion';

// DECLARACION de listas para guardar pacientes y doctores
var pacientes: Array<Paciente> = [];
var doctores: Array<Doctor> = [];

// INSTANCIA de un CampocUnidadRef
let refPesoKg = new CampoUnidadRef<number>('Peso', 'kg', 20, 200);

// INSTANCIA de algunos pacientes
let Jose = new Paciente(
    1,
    'Jose',
    'Blanco',
    30,
    'Estudiante',
    'jose@gmail.com',
    [new Telefono('+52', '212-5122132')],
    new SubRegistro<number>(refPesoKg, 80),
    [new PreferenciaNotificacion(TriggerEvento.CambioHistoria, MetodoNotificacion.Email)]
);

let Alex = new Paciente(
    2,
    'Alex',
    'Mil',
    25,
    'Estudiante',
    'alex@gmail.com',
    [new Telefono('+52', '212-5432123'), new Telefono('+1', '214-12341325')],
    new SubRegistro<number>(refPesoKg, 56),
    [
        new PreferenciaNotificacion(TriggerEvento.CancelacionCita, MetodoNotificacion.SMS),
        new PreferenciaNotificacion(TriggerEvento.CancelacionCita, MetodoNotificacion.Llamada)
    ]
);

pacientes.push(Jose, Alex);

// INSTANCIA de algunas la especialidades
let Cardiologia = new Especialidad('Cardiología');
let Oftalmologia = new Especialidad('Oftalmología');

// INSTANCIA de algunos doctores
let DraBetty = new Doctor(1, 'Betty', 'Pérez', Cardiologia, [Jose]);
let DrMark = new Doctor(7, 'Mark', 'Drown', Oftalmologia);

doctores.push(DraBetty, DrMark);

//

// 1. Paciente solicita cita
let cita1 = Alex.getCitasHandler().solicitarCita(DraBetty, ModalidadCita.Teleconsulta);

// 2. Doctor le asigna fecha a la cita
cita1 = DraBetty.getCitasHandler().asignarFecha(new Date('12-08-22'), cita1);

// 3. Paciente confirma la cita
cita1 = Alex.getCitasHandler().confirmarCita(cita1);

// 4. Doctor cancela la cita y se le notifica al paciente el cambio
cita1 = DraBetty.getCitasHandler().cancelarCita(cita1);
