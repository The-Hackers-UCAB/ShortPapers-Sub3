import 'dart:svg';

import 'telefono.dart';

import 'persona.dart';
import 'subRegistro.dart';

class Paciente extends Persona {
  Number edad;
  String profesion;
  subRegistro<Number> peso;
  String correo;
  List<Telefono> telefonos;
  Paciente(int id, String nombre, String apellido, this.edad, this.profesion,
      this.peso, this.correo, this.telefonos)
      : super(id, nombre, apellido);

  int get getId {
    return super.id;
  }

  String get getNombre {
    return super.nombre;
  }

  String get getApellido {
    return super.apellido;
  }

  Number get getEdad {
    return edad;
  }

  String get getProfesion {
    return profesion;
  }

  subRegistro<Number> get getPeso {
    return peso;
  }

  String get getCorreo {
    return correo;
  }

  List<Telefono> get getTelefonos {
    return telefonos;
  }

  void set setNombre(String nomb) {
    super.nombre = nomb;
  }

  void set setApellido(String ape) {
    super.apellido = ape;
  }

  void set setEdad(Number ed) {
    this.edad = ed;
  }

  void set setEProfesion(String pro) {
    this.profesion = pro;
  }

  void set setCorreo(String cor) {
    this.correo = cor;
  }

  void setTelefonos(Number numb, int posicion) {
    this.telefonos[posicion].numero = numb;
  }
}
