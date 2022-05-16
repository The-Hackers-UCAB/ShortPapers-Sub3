import { Persona } from '../../models/persona';
import { TriggerEvento } from '../../DS/triggerEvento';

export interface Notificacion {
    //
    notificar(persona: Persona, evento: TriggerEvento, mensaje: String): void;
}
