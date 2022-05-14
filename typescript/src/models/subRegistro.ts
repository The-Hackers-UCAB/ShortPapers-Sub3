import { Especialidad } from "./especialidad";

export class CampoUnidadRef<T> {
    private campo: String;
    private unidad: String;
    private valorMin: T;
    private valorMax: T;
    private especialidad?: Especialidad;

    constructor(
        campo: String,
        unidad: String,
        valorMin: T,
        valorMax: T,
        especialidad?: Especialidad
    ) {
        this.campo = campo;
        this.unidad = unidad;
        this.valorMin = valorMin;
        this.valorMax = valorMax;
        this.especialidad = especialidad;
    }
}

export class SubRegistro<T> {
    private atributo: CampoUnidadRef<T>;
    private valor: T;

    constructor(atributo: CampoUnidadRef<T>, valor: T) {
        this.atributo = atributo;
        this.valor = valor;
    }
}
