import { TriggerEvento } from '../DS/triggerEvento';
import { MetodoNotificacion } from '../DS/metodoNotificacion';

export class PreferenciaNotificacion {
    //
    private evento: TriggerEvento;
    private metodo: MetodoNotificacion;

    constructor(evento: TriggerEvento, metodo: MetodoNotificacion) {
        this.evento = evento;
        this.metodo = metodo;
    }

    public getEvento(): TriggerEvento {
        return this.evento;
    }
    private setEvento(value: TriggerEvento) {
        this.evento = value;
    }
    public getMetodo(): MetodoNotificacion {
        return this.metodo;
    }
    private setMetodo(value: MetodoNotificacion) {
        this.metodo = value;
    }
}
