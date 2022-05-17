import 'package:proyectodart/proyectodart.dart';
import 'package:proyectodart/src/models/localizacion.dart';
import 'dart:core';

void main() {
  //Intacio los telefonos de los pacientes
  List<Telefono> telefonos1 = [Telefono('+58', 04264561398)];
  List<Telefono> telefonos2 = [
    Telefono('+58', 04268902315),
    Telefono('+58', 04148904565)
  ];
  List<Telefono> telefonos3 = [Telefono('+58', 04124391825)];
  List<Telefono> telefonos4 = [Telefono('+58', 04144563098)];
  List<Telefono> telefonos5 = [
    Telefono('+58', 02124538689),
    Telefono('+58', 04264509763)
  ];
  //Instancio un objeto de tipo ManejadorBuscadorPaciente para poder realizar
  //las busquedas que debe hacer paciente
  ManejadorBuscadorPaciente manejador = new ManejadorBuscadorPaciente();

  //Instancio una lista de pacientes que pertenecera a doctor
  List<Paciente> pacientes = [
    Paciente(1, 'Juan', 'Gabriel', 30, 'Profesor de Desarrollo de software', 80,
        'juan@gmail.com', telefonos1, manejador),
    Paciente(2, 'Brayan', 'Centeno', 21, 'Estudiante', 90, 'brayan@gmail.com',
        telefonos2, manejador),
    Paciente(3, 'Antonio', 'Badillo', 22, 'Estudiante Postgrado', 80,
        'antonio@gmail.com', telefonos3, manejador),
    Paciente(4, 'Gabriel', 'Ojeda', 23, 'Ingeniero informatico', 80,
        'gabriel@gmail.com', telefonos4, manejador),
    Paciente(5, 'Pedro', 'Villegas', 24, 'Disañador Grafico', 80,
        'pedro@gmail.com', telefonos5, manejador)
  ];

  //Instancio las especialidades que tienen los Doctores
  Especialidad especialidad1 = new Especialidad('Cardiologo');
  Especialidad especialidad2 = new Especialidad('Pediatria');
  Especialidad especialidad3 = new Especialidad('Oftalmologo');
  Especialidad especialidad4 = new Especialidad('Dermatologo');
  Especialidad especialidad5 = new Especialidad('Neurologo');
  Especialidad especialidad6 = new Especialidad('Patologo');
  Especialidad especialidad7 = new Especialidad('Urologo');

  //Instancio las ubicaciones donde estaran los doctores
  Localizacion localizacion1 = new Localizacion('Caracas', 'Miranda');
  Localizacion localizacion2 = new Localizacion('Barcelona', 'Anzoategui');
  Localizacion localizacion3 = new Localizacion('Valencia', 'Carabobo');

  //Instancio una lista de doctores que sera utilizada para hacer las busquedas
  //del paciente
  List<Doctor> doctor = [
    Doctor(
        1, 'Peter', 'Villanueva', especialidad1, pacientes, 1, localizacion1),
    Doctor(2, 'Giovanni', 'Palomo', especialidad2, pacientes, 3, localizacion2),
    Doctor(3, 'Maria', 'Teran', especialidad2, pacientes, 4, localizacion3),
    Doctor(
        4, 'Katherine', 'Flores', especialidad3, pacientes, 9, localizacion2),
    Doctor(5, 'Ignacio', 'Mejias', especialidad6, pacientes, 8, localizacion1),
    Doctor(6, 'Manuel', 'Guevara', especialidad4, pacientes, 2, localizacion2),
    Doctor(
        7, 'Alejandro', 'Guzman', especialidad5, pacientes, 10, localizacion3),
    Doctor(8, 'Yennefer', 'Rosa', especialidad2, pacientes, 5, localizacion1),
    Doctor(9, 'Yiokling', 'Chu', especialidad4, pacientes, 6, localizacion3),
    Doctor(10, 'Ana', 'Maria', especialidad7, pacientes, 7, localizacion2)
  ];

  //Empieza la simulacion
  print(
      'Los siguientes Pacientes realizaron busquedas respecto a la localidad y especialidad de los doctores registrados:');

  print('Pacientes');
  print('Nombre: ${pacientes[0].nombre}');
  print('Apellido: ${pacientes[0].apellido}');
  print('Edad: ${pacientes[0].edad}');
  print('Profesion: ${pacientes[0].profesion}');
  print('Peso: ${pacientes[0].peso}');
  print('Correo: ${pacientes[0].correo}');
  print('Telefonos: ${pacientes[0].telefonos[0]}');
  print('------------------------');
  print('Especialidad: ${especialidad2.nombre}');
  print('Localizacion: ${localizacion2.ciudad} ${localizacion2.estado}');
  print('Doctores que coincidieron con la busqueda');
  print('------------------------');
  List<Doctor> doctores = pacientes[0]
      .manejador
      .buscarDoctore(localizacion2, especialidad2, doctor);
  var aa = doctores.iterator;
  while (aa.moveNext()) {
    print('Nombre: ${aa.current.nombre} ${aa.current.apellido}');
    print('Especialidad: ${aa.current.especialidad.nombre}');
  }
  print('------------------------');
  print('------------------------');
  print('Pacientes');
  print('Nombre: ${pacientes[2].nombre}');
  print('Apellido: ${pacientes[2].apellido}');
  print('Edad: ${pacientes[2].edad}');
  print('Profesion: ${pacientes[2].profesion}');
  print('Peso: ${pacientes[2].peso}');
  print('Correo: ${pacientes[2].correo}');
  print('Telefonos: ${pacientes[2].telefonos[0]}');
  print('------------------------');
  print('Especialidad: ${especialidad4.nombre}');
  print('Localizacion: ${localizacion2.ciudad} ${localizacion2.estado}');
  print('Doctores que coincidieron con la busqueda');
  print('------------------------');
  List<Doctor> doctores1 = pacientes[2]
      .manejador
      .buscarDoctore(localizacion2, especialidad4, doctor);
  var aa1 = doctores1.iterator;
  while (aa1.moveNext()) {
    print('Nombre: ${aa1.current.nombre} ${aa1.current.apellido}');
    print('Especialidad: ${aa1.current.especialidad.nombre}');
  }
  print('------------------------');
  print('------------------------');
  print('Paciente busca el top 10 de doctores:');
  print('Pacientes');
  print('Nombre: ${pacientes[4].nombre}');
  print('Apellido: ${pacientes[4].apellido}');
  print('Edad: ${pacientes[4].edad}');
  print('Profesion: ${pacientes[4].profesion}');
  print('Peso: ${pacientes[4].peso}');
  print('Correo: ${pacientes[4].correo}');
  print('Telefonos: ${pacientes[4].telefonos[0]}');
  print('------------------------');
  print('---------Top 10 Doctores:---------');
  print('------------------------');
  List<Doctor> doctores2 = pacientes[4].manejador.buscarDoctoresTop10(doctor);
  var aa2 = doctores2.iterator;
  int i = 1;
  while (aa2.moveNext()) {
    print(
        'TOP ${i} -- Nombre: ${aa2.current.nombre} ${aa2.current.apellido} Especialidad:${aa2.current.especialidad.nombre}');

    i++;
  }
}
