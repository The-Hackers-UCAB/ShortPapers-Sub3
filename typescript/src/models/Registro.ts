import { Cita } from "./cita";
import { Especialidad } from "./especialidad";
import { SubRegistro } from "./subRegistro";

export class Registro{ 
    
    private id: number;
    private cita: Cita;
    private antecedentesPersonales: String;
    private presionArterial: SubRegistro<number>;
    private frecuenciaCardiaca: SubRegistro<number>;
    private saturacion: SubRegistro<number>;
    private peso: SubRegistro<number>;
    private altura: SubRegistro<number>;
    private especialidad: Especialidad;
    private registroEspecializado: SubRegistro<any>[];

    constructor(
        id: number,
        cita: Cita,
        antecedentesPersonales: String,
        presionArterial: SubRegistro<number>,
        frecuenciaCardiaca: SubRegistro<number>,
        saturacion: SubRegistro<number>,
        peso: SubRegistro<number>,
        altura: SubRegistro<number>,
        especialidad: Especialidad,
    ){
        this.id = id;
        this.cita = cita;
        this.antecedentesPersonales = antecedentesPersonales;
        this.presionArterial = presionArterial;
        this.frecuenciaCardiaca = frecuenciaCardiaca;
        this.saturacion = saturacion;
        this.peso = peso;
        this.altura = altura;
        this.especialidad = especialidad;
        this.registroEspecializado = [];
    }

    //Metodos

    public setCita(cita: Cita){
        this.cita = cita;
    }

    public setAntecedentesPersonales(antecedentesPersonales: String){
        this.antecedentesPersonales = antecedentesPersonales;
    }

    public setPresionArterial(presionArterial: SubRegistro<number>){
        this.presionArterial = presionArterial;
    }

    public setFrecuenciaCardiaca(frecuenciaCardiaca: SubRegistro<number>){
        this.frecuenciaCardiaca = frecuenciaCardiaca;
    }

    public setSaturacion(saturacion: SubRegistro<number>){
        this.saturacion = saturacion;
    }

    public setPeso(peso: SubRegistro<number>){
        this.peso = peso;
    }

    public setAltura(altura: SubRegistro<number>){
        this.altura = altura;
    }

    public setEspecialidad(especialidad: Especialidad){
        this.especialidad = especialidad;
    }

    public getId(): number{
        return this.id;
    }

    public getRegistrosEspecializados(): SubRegistro<any>[]{
        return this.registroEspecializado;
    }

    public setRegistrosEspecializados(registroEspecializado: SubRegistro<any>[]){
        this.registroEspecializado = registroEspecializado;
    }
    
}