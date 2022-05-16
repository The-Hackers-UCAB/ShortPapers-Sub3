import { Persona } from '../../models/persona';
import { TriggerEvento } from '../../DS/triggerEvento';
import { Notificacion } from './Inotificacion';

export class NotificacionEmail implements Notificacion {
    //
    notificar(persona: Persona, evento: TriggerEvento, mensaje: String): void {
        //
        console.log('NotificionEmail: ' + persona.getNombre() + ' ' + evento + ' ' + mensaje);
    }
}
