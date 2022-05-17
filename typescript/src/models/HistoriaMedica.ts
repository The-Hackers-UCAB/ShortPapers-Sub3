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
        console.log(registro);
    }


    public actualizarHistoria(){
        
    }

    public actualizarRegistroMedico(id: number, registroNuevo: Registro){
        
        var registroViejo: Registro[] = [];

        this.registrosMedicos.forEach(function(value){
            if(Number(value.getId) == id){
                registroViejo.push(value);
            }
        })

        var posicion = this.registrosMedicos.indexOf(registroViejo[0]);
        this.registrosMedicos[posicion] = registroNuevo;
    }
}