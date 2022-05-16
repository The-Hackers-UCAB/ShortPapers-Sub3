import { Paciente } from '../models/paciente';
import { Persona } from '../models/persona';

var pacientes: Array<Paciente> = [];

function verNombres(_array: Array<Persona>) {
    console.log('Lista de pacientes: ');

    _array.forEach((element) => {
        console.log(element.getNombre() + ', ');
    });
}

let Jose = new Persona(1, 'Jose', 'Blanco');

//-/
let MrJones = Jose;

//-/
let Alex = new Paciente({ id: 2, nombre: 'Alex', apellido: 'León' });

pacientes.push(Jose, MrJones, Alex);

console.log(pacientes);

// Ya que el objeto MrJones es igual al objeto Jose,
// entonces al cambiar el nombre de MrJones es como
// si se cambiara el nombre de Jose ya que son el mismo objeto
MrJones.setNombre('John');
console.log(pacientes);
console.log(Jose === MrJones);
console.log(Alex === MrJones);
