export abstract class Persona {
    protected readonly id: number;
    protected nombre: String;
    protected apellido: String;

    constructor(id: number, nombre: String, apellido: String) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
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
}
