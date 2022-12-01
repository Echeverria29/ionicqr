import { Component, OnInit } from '@angular/core';
import { CrudCursoalumnoService } from 'src/app/servicio/crud-cursoalumno.service';
import { alumnoCurI } from '../model/general.interface';

@Component({
  selector: 'app-asistenciaalumno',
  templateUrl: './asistenciaalumno.page.html',
  styleUrls: ['./asistenciaalumno.page.scss'],
})
export class AsistenciaalumnoPage implements OnInit {
  constructor(private crudalumnoCur: CrudCursoalumnoService) { }
  cursosAlumno: alumnoCurI[];

  ngOnInit() {
    this.listar2();
  }
  listar2() {
    var datos=JSON.parse(localStorage.getItem("usuario"));

    this.crudalumnoCur.listarCursosalumno2(datos.correo).subscribe((res) => {      
      this.cursosAlumno = res;      
    });
  }

}
