
class EstudianteController {

    constructor() {}

    agregarEstudiante() {
        let nombre = document.getElementById('txtNombre').value;
        let apellido = document.getElementById('txtApellido').value;
        let ciudad = document.getElementById('slcCiudad').value;
        let fechaNacimento = document.getElementById('txtBirth').value;
        let carrera = document.getElementById('txtCarrera').value;
        let semestre = parseInt(document.getElementById('txtSemestre').value);

        let nuevoEstudiante = new Estudiante(nombre, apellido, ciudad, fechaNacimento, carrera, semestre);
        DataController.registrarEstudiante(nuevoEstudiante);
    }

    mostrarEstudiantes() {
        let estudiantes = DataController.obtenerDatos('estudiantes');

        if(estudiantes.length === 0) {
            let table = document.getElementsByClassName('table')[0];
            table.style.display = 'none';

            let noDataImg = document.getElementsByClassName('no-data')[0];
            noDataImg.style.display = 'block';
            noDataImg.style.width = '80%';

            return;
        }

        let tbEstudiantes = document.getElementById('tbEstudiantes');
        tbEstudiantes.innerHTML = '';

        for(let i in estudiantes) {
            let estudiante = estudiantes[i]
            let tr = document.createElement('tr');

            let tdNombre = this.createComponent('td', estudiante.nombre);
            let tdApellido = this.createComponent('td', estudiante.apellido);
            let tdCiudad = this.createComponent('td', estudiante.ciudad);
            let tdBirth = this.createComponent('td', estudiante.fechaNacimiento);
            let tdCarrera = this.createComponent('td', estudiante.carrera);
            let tdSemestre = this.createComponent('td', estudiante.semestre);

            let tdDelete = document.createElement('td');
             
            let deleteButton = document.createElement('button');
            deleteButton.type = 'button';
            deleteButton.innerHTML = 'Eliminar';
            deleteButton.className = 'btn btn-danger'
            deleteButton.onclick = function() {
               DataController.eliminarEstudiante(i);
            //    this.mostrarEstudiantes();
                estudianteController.mostrarEstudiantes();
            }

            tdDelete.appendChild(deleteButton);

            tr.appendChild(tdNombre);
            tr.appendChild(tdApellido);
            tr.appendChild(tdCiudad);
            tr.appendChild(tdBirth);
            tr.appendChild(tdCarrera);
            tr.appendChild(tdSemestre);
            tr.appendChild(tdDelete);


            tbEstudiantes.appendChild(tr);
         }

    }

    createComponent(tag, innerHtml) {
        let temp = document.createElement(tag);
        temp.innerHTML = innerHtml;
        return temp;
    } 

}

var estudianteController = new EstudianteController();
window.onload = function() {
    this.estudianteController.mostrarEstudiantes();
}