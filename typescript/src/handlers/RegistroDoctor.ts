import { Doctor } from '../models/doctor';
import { Cita } from '../models/cita';
import { Registro } from '../models/Registro';
import { HistoriaMedica } from '../models/HistoriaMedica';
import { SubRegistro } from '../models/subRegistro';

export class RegistroDoctor{

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
    public modificarRegistro(registro: Registro, historiaMedica: HistoriaMedica, id: number){
        historiaMedica.actualizarRegistroMedico(id,registro);
    }

    //Metodo que crea un registro especializado
    public crearRegistroEspecializado(registro: Registro, historia: HistoriaMedica, registroEspecializado: SubRegistro<any>[]){
        
        registro.setRegistrosEspecializados(registroEspecializado);
        historia.agregarRegistroMedico(registro);

    }

}