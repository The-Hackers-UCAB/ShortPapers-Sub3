import { PreferenciaNotificacion } from './preferencias';

export abstract class Persona {
    protected readonly id: number;
    protected nombre: String;
    protected apellido: String;
    protected preferenciasNotificacion?: PreferenciaNotificacion[] | undefined;

    constructor(id: number, nombre: String, apellido: String, preferenciasNotificacion?: PreferenciaNotificacion[]) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.preferenciasNotificacion = preferenciasNotificacion;
    }

    public getId(): number {
        return this.id;
    }

    public getNombre(): String {
        return this.nombre;
    }

    private setNombre(nombre: String) {
        this.nombre = nombre;
    }

    public getApellido(): String {
        return this.apellido;
    }

    private setApellido(apellido: String) {
        this.apellido = apellido;
    }
    public getPreferenciasNotificacion(): PreferenciaNotificacion[] | undefined {
        return this.preferenciasNotificacion;
    }
    public setPreferenciasNotificacion(value: PreferenciaNotificacion[] | undefined) {
        this.preferenciasNotificacion = value;
    }
}
