
class DocenteController {

    constructor() {}

    agregarDocente() {
        let nombre = document.getElementById('txtNombre').value;
        let apellido = document.getElementById('txtApellido').value;
        let ciudad = document.getElementById('slcCiudad').value;
        let fechaNacimiento = document.getElementById('txtBirth').value;
        let departamento = document.getElementById('txtDepartamento').value;
        let antiguedad = parseInt(document.getElementById('txtAntiguedad').value);

        let docente = new Docente(nombre, apellido, ciudad, fechaNacimiento, departamento, antiguedad);

        DataController.registrarDocentes(docente);
    }

    mostrarDocentes() {
        let docentes = DataController.obtenerDatos('docentes');

        if(docentes.length === 0) {
            let table = document.getElementsByClassName('table')[0];
            table.style.display = 'none';

            let noDataImg = document.getElementsByClassName('no-data')[0];
            noDataImg.style.display = 'block';
            noDataImg.style.width = '80%';

            return;
        }

        let tbDocentes = document.getElementById('tbDocentes');
        tbDocentes.innerHTML = '';

        for(let i in docentes) {
            let docente = docentes[i];
            let tr = document.createElement('tr');

            let tdNombre = this.createComponent('td', docente.nombre);
            let tdApellido = this.createComponent('td', docente.apellido);
            let tdCiudad = this.createComponent('td', docente.ciudad);
            let tdBirth = this.createComponent('td', docente.fechaNacimiento);
            let tdDepartamento = this.createComponent('td', docente.departamento);
            let tdAntiguedad = this.createComponent('td', docente.antiguedad);

            let tdDelete = document.createElement('td');

            let deleteButton = document.createElement('button');
            deleteButton.type = 'button';
            deleteButton.innerHTML = 'Eliminar';
            deleteButton.className = 'btn btn-danger';
            deleteButton.onclick = function() {
                DataController.eliminarDocente(i);
                docenteController.mostrarDocentes();
            }

            tdDelete.appendChild(deleteButton);

            tr.appendChild(tdNombre);
            tr.appendChild(tdApellido);
            tr.appendChild(tdCiudad);
            tr.appendChild(tdBirth);
            tr.appendChild(tdDepartamento);
            tr.appendChild(tdAntiguedad);
            tr.appendChild(tdDelete);

            tbDocentes.appendChild(tr);

        }

    }
    
    createComponent(tag, innerHtml) {
        let temp = document.createElement(tag);
        temp.innerHTML = innerHtml;
        return temp;
    }

}

var docenteController = new DocenteController();
window.onload = function() {
    docenteController.mostrarDocentes();
}
