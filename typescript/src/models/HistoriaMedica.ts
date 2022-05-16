import { Paciente } from "./paciente";
import { Registro } from "./Registro";


export class HistoriaMedica{

    private paciente: Paciente;
    private registrosMedicos: Registro[];

    constructor(
        paciente: Paciente,
        registrosMedicos: Registro[]
    ){
        this.paciente = paciente;
        this.registrosMedicos = registrosMedicos;
    }

    //Metodos

    public getRegistroMedicos(): Registro[] {
        return this.registrosMedicos;
    }

    public getPaciente(): Paciente{
        return this.paciente;
    }

    public agregarRegistroMedico(registro: Registro){
        this.registrosMedicos.push(registro);
    }

    public actualizarHistoria(registroNuevo: Registro, registroViejo: Registro){

        var i = this.registrosMedicos.indexOf(registroViejo); 
        this.registrosMedicos[i] = registroNuevo;      
        
    }
}