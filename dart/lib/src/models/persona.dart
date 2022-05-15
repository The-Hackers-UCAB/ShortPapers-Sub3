class Persona {
  int id;
  String nombre;
  String apellido;
  Persona(this.id, this.nombre, this.apellido);

  int get getId {
    return id;
  }

  String get getNombre {
    return nombre;
  }

  String get getApellido {
    return apellido;
  }

  void set setId(int idn) {
    this.id = idn;
  }

  void set setNombre(String nombre) {
    this.nombre = nombre;
  }

  void set setApellido(String apellido) {
    this.apellido = apellido;
  }
}
