
class DataController {

    static estudiantes = new Array();
    static docentes = new Array();

    constructor() {}

    static registrarEstudiante( newEstudiante ) {

        this.validarEstudiantes();

        this.estudiantes.push(newEstudiante);
        localStorage.setItem( 'estudiantes', JSON.stringify(this.estudiantes) );
        console.log(localStorage.getItem('estudiantes'));
    }

    static registrarDocentes( newDocente ) {

        this.validarDocentes();

        this.docentes.push(newDocente);
        localStorage.setItem( 'docentes', JSON.stringify(this.docentes) );
        console.log(localStorage.getItem('docentes'));
    }

    static validarEstudiantes() {
        if(localStorage.getItem('estudiantes')) {
            this.estudiantes = JSON.parse(localStorage.getItem('estudiantes'));
         } else if (this.estudiantes.length > 0) {
             localStorage.setItem('estudiantes', JSON.stringify(this.estudiantes));
         } else {
             localStorage.setItem('estudiantes', '[]');
             this.estudiantes = JSON.parse(localStorage.getItem('estudiantes'));
         }
    }

    static validarDocentes() {
        if(localStorage.getItem('docentes')) {
            this.docentes = JSON.parse(localStorage.getItem('docentes'));
         } else if (this.docentes.length > 0) {
             localStorage.setItem('docentes', JSON.stringify(this.docentes));
         } else {
             localStorage.setItem('docentes', '[]');
             this.docentes = JSON.parse(localStorage.getItem('docentes'));
         }
    }

    static eliminarEstudiante(i) {

        this.validarEstudiantes();

        this.estudiantes.splice(i, 1);
        localStorage.setItem( 'estudiantes', JSON.stringify(this.estudiantes) );
    }
    
    static eliminarDocente(i) {

        this.validarDocentes();

        this.docentes.splice(i, 1);
        localStorage.setItem( 'docentes', JSON.stringify(this.docentes) );
    }

    static obtenerDatos( dato ) {
        if(dato === 'docentes'){
            this.validarDocentes()
            return this.docentes;
        }

        this.validarEstudiantes()
        return this.estudiantes;
    }

}
