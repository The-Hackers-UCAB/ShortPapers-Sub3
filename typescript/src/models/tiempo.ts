export class Fecha {

   private dia:number
   private mes:number
   private año:number

   constructor(dia:number, mes:number, año:number){
      this.dia = dia
      this.mes = mes
      this.año = año
   }
}

export class Hora{

   private hora: number
   private minuto: number

   constructor(hora: number, minuto: number){
      this.hora = hora 
      this.minuto = minuto
   }
}