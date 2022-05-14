// telefono tambien se puede implementar como: type Telefono = { codigo:String; numero;String;}

import { Persona } from "./persona";
import { SubRegistro } from "./subRegistro";
import { Telefono } from "./telefono";

export class Paciente extends Persona {
    private edad: number;
    private profesion: String;

    private peso?: SubRegistro<number>;

    private correo: String;
    private telefonos: Telefono[];

    constructor(
        id: number,
        nombre: String,
        apellido: String,
        edad: number,
        profesion: String,
        correo: String,
        telefonos: Telefono[],
        peso?: SubRegistro<number>
    ) {
        super(id, nombre, apellido);
        this.edad = edad;
        this.profesion = profesion;
        this.peso = peso;
        this.correo = correo;
        this.telefonos = telefonos;
    }

    private setEdad(edad: number) {
        this.edad = edad;
    }

    public getEdad(): number {
        return this.edad;
    }

    private setProfesion(profesion: String) {
        this.profesion = profesion;
    }

    public getProfesion(): String {
        return this.profesion;
    }

    private setPeso(peso: SubRegistro<number>) {
        this.peso = peso;
    }

    // buscar la forma de que esto
    public getPeso(): SubRegistro<number> | undefined {
        return this.peso;
    }

    private setCorreo(correo: String) {
        this.correo = correo;
    }

    public getCorreo() {
        return this.correo;
    }

    public getTelefonos(): Telefono[] {
        return this.telefonos;
    }

    private setTelefonos(telefonos: Telefono[]) {
        this.telefonos = telefonos;
    }
}
