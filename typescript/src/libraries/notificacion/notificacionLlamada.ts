import { Persona } from '../../models/persona';
import { TriggerEvento } from '../../DS/triggerEvento';
import { Notificacion } from './Inotificacion';

export class NotificacionLlamada implements Notificacion {
    //
    notificar(persona: Persona, evento: TriggerEvento, mensaje: String): void {
        //
        console.log('NotificionLlamada: ' + persona.getNombre() + ' ' + evento + ' ' + mensaje);
    }
}
