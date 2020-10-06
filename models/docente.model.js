
class Docente extends Persona {
    
    constructor(nombre, apellido, ciudad, fechaNacimiento, departamento, antiguedad) {
        super(nombre, apellido, ciudad, fechaNacimiento);
        this.departamento = departamento;
        this.antiguedad = antiguedad;
    }
}
