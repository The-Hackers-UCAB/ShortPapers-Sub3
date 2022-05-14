import { Cita } from "./models/cita";
import { Modalidad, StatusConsulta } from "./enums/cita";
import { Doctor } from "./models/doctor";
import { Especialidad } from "./models/especialidad";
import { Paciente } from "./models/paciente";
import { CampoUnidadRef, SubRegistro } from "./models/subRegistro";
import { Telefono } from "./models/telefono";
import { Fecha, Hora } from "./models/tiempo";

var pacientes: Array<Paciente> = [];
var doctores: Array<Doctor> = [];

let Jose = new Paciente(
    1,
    "Jose",
    "Blanco",
    30,
    "Estudiante",
    "jose@gmail.com",
    [new Telefono("+52", "212-5122132")]
);
let Alex = new Paciente(2, "Alex", "Mil", 25, "Estudiante", "alex@gmail.com", [
    new Telefono("+52", "212-5432123"),
    new Telefono("+1", "214-12341325"),
]);

pacientes.push(Jose, Alex);

// let refVistaSnellen = new  CampoUnidadRef<string>('Vista','Snellen','6/60','6/6','Oftalmológica')
// let valorVista = new SubRegistro<string>(refVistaSnellen,'6/30')
// Si se trata de asignar refPesoKg, da error porque no es de tipo CampoUnidad<string>

let refPesoKg = new CampoUnidadRef<number>("Peso", "kg", 12, 20);

// Alex.setPeso(new SubRegistro<number>(refPesoKg,80))
// Jose.setPeso(new SubRegistro<number>(refPesoKg,56))

/// ---

let Cardiologia = new Especialidad("Cardiología");
let Oftalmologia = new Especialidad("Oftalmología");

let DraBetty = new Doctor(1, "Betty", "Pérez", Cardiologia, [Jose]);
let DrMark = new Doctor(7, "Mark", "Drown", Oftalmologia);

doctores.push(DraBetty, DrMark);

// DrMark.addPacientes([Alex, Jose])

let citaP = new Cita(
    new Fecha(12, 5, 22),
    new Hora(5, 30),
    Modalidad.EnConsultorio,
    StatusConsulta.Programada,
    DraBetty,
    Alex
);

console.log(citaP);
