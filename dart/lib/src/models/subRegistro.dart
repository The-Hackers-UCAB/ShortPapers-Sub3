import 'especialidad.dart';

class CampoUnidadRef<T> {
  String campo;
  String unidad;
  T valorMin;
  T valorMax;
  Especialidad especialidad;
  CampoUnidadRef(
      this.campo, this.unidad, this.valorMin, this.valorMax, this.especialidad);
}

class subRegistro<T> {
  CampoUnidadRef atributo;
  T valor;
  subRegistro(this.atributo, this.valor);
}
