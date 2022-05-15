import 'especialidad.dart';
import 'paciente.dart';
import 'persona.dart';

class Doctor extends Persona {
  Especialidad especialidad;
  List<Paciente> pacientes;
  Doctor(
      int id, String nombre, String apellido, this.especialidad, this.pacientes)
      : super(id, nombre, apellido);

  Especialidad get getEspecialidad {
    return this.especialidad;
  }

  List<Paciente> get getPacientes {
    return this.pacientes;
  }

  void set setEspecialidad(String nomb) {
    especialidad.nombre = nomb;
  }
}
