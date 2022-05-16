// export class Evento {
//     private nombre: String;
//     public getNombre(): String {
//         return this.nombre;
//     }
//     public setNombre(value: String) {
//         this.nombre = value;
//     }

//     constructor(nombre: String) {
//         this.nombre = nombre;
//     }
// }

export enum TriggerEvento {
    ModificacionCita = 'ModificacionCita',
    CancelacionCita = 'CancelacionCita',
    CambioHistoria = 'CambioHistoria'
}
