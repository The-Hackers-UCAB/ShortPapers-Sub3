import { Persona } from '../../models/persona';
import { TriggerEvento } from '../../DS/triggerEvento';
import { NotificacionEmail } from './notificacionEmail';
import { MetodoNotificacion } from '../../DS/metodoNotificacion';
import { NotificacionSMS } from './notificacionSMS';
import { NotificacionLlamada } from './notificacionLlamada';

export class Notificador {
    //
    notificarAll(persona: Persona, evento: TriggerEvento, mensaje: String) {
        let preferencias = persona.getPreferenciasNotificacion();
        // console.log(preferencias);

        if (preferencias != undefined) {
            preferencias.forEach((preferencia) => {
                if (preferencia.getEvento() == evento) {
                    //
                    let metodo = preferencia.getMetodo();

                    if (metodo == MetodoNotificacion.Email) {
                        new NotificacionEmail().notificar(persona, evento, mensaje);
                        //
                    }
                    if (metodo == MetodoNotificacion.Llamada) {
                        new NotificacionLlamada().notificar(persona, evento, mensaje);
                        //
                    }
                    if (metodo == MetodoNotificacion.SMS) {
                        new NotificacionSMS().notificar(persona, evento, mensaje);
                        //
                    }
                } else {
                    // persona no tiene ningun metodo de notificacion asociado al evento
                }
            });
        }
    }
}
