import { Doctor } from '../models/doctor';
import { Cita } from '../models/cita';
import { Registro } from '../models/Registro';
import { HistoriaMedica } from '../models/HistoriaMedica';

export class ManejadorCitasDoctor{

    private doctor: Doctor;

    constructor(doctor: Doctor) {
        this.doctor = doctor;
    }

    //Metodo que agrega un registro a una historia medica.
    public agregarCitaRegistro(cita : Cita, historiaMedica: HistoriaMedica, registro : Registro){

        registro.setCita(cita);
        historiaMedica.agregarRegistroMedico(registro);
        
    }

    //Metodo que modifica un registro de una historia medica.
    public modificarRegistro(registroNuevo : Registro, historiaMedica: HistoriaMedica, id: number, registroViejo : Registro){

        historiaMedica.actualizarHistoria(registroNuevo,registroViejo);
        
    }
}