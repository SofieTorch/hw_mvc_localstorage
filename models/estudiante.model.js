
class Estudiante extends Persona {
    
    constructor(nombre, apellido, ciudad, fechaNacimiento, carrera, semestre) {
        super(nombre, apellido, ciudad, fechaNacimiento);
        this.carrera = carrera;
        this.semestre = semestre;
    }
}

