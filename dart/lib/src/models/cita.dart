import 'doctor.dart';
import 'paciente.dart';
import 'fecha.dart';
import '/src/enum/cita.dart';

class Cita {
  Fecha fecha;
  Hora hora;
  Modalidad modalidad;
  StatusConsulta status;
  Doctor doctor;
  Paciente paciente;
  Cita(this.fecha, this.hora, this.modalidad, this.status, this.doctor,
      this.paciente);

  Fecha get getFecha {
    return this.fecha;
  }

  void set setFecha(Fecha fec) {
    this.fecha = fec;
  }

  Hora get getHora {
    return this.hora;
  }

  void set setHora(Hora hor) {
    this.hora = hor;
  }

  Doctor get getDoctor {
    return this.doctor;
  }

  void set setDoctor(Doctor doc) {
    this.doctor = doc;
  }

  Modalidad get getModalidad {
    return this.modalidad;
  }

  void set setModalidad(Modalidad mod) {
    this.modalidad = mod;
  }

  StatusConsulta get getStatus {
    return this.status;
  }

  void set setStatus(StatusConsulta sta) {
    this.status = sta;
  }

  Paciente get getPaciente {
    return this.paciente;
  }
}
