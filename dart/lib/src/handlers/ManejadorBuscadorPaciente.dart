import 'package:proyectodart/proyectodart.dart';

//import '/src/models/Doctor.dart';
//import '/src/models/Especialidad.dart';
//import '/src/models/Paciente.dart';
import 'package:proyectodart/proyectodart.dart';
import 'package:proyectodart/src/models/localizacion.dart';
//import 'dart:svg';

class ManejadorBuscadorPaciente {
  List<Doctor> buscarDoctoresTop10(List<Doctor> doctor) {
    List<Doctor> b = [];
    var aa = doctor.iterator;
    while (aa.moveNext()) {
      if ((aa.current.rating >= 1) || (aa.current.rating <= 10)) {
        b.add(aa.current);
      }
    }
    b.sort((c, d) => c.rating.compareTo(d.rating));
    return b;
  }

  List<Doctor> buscarDoctore(Localizacion localizacion,
      Especialidad especialidad, List<Doctor> doctor) {
    List<Doctor> d = [];
    var aa = doctor.iterator;
    while (aa.moveNext()) {
      if ((aa.current.especialidad == especialidad) &&
          (aa.current.localizacion == localizacion)) {
        d.add(aa.current);
      }
    }
    return d;
  }
}
