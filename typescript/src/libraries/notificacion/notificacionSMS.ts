import { Persona } from '../../models/persona';
import { TriggerEvento } from '../../DS/triggerEvento';
import { Notificacion } from './Inotificacion';

export class NotificacionSMS implements Notificacion {
    //
    notificar(persona: Persona, evento: TriggerEvento, mensaje: String): void {
        //
        console.log('NotificionSMS: ' + persona.getNombre() + ' ' + evento + ' ' + mensaje);
    }
}
