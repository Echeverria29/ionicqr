import { Component, OnInit } from '@angular/core';

import { CrudAlumnoService } from "src/app/servicio/crud-alumno.service";
import { AlumnoI } from "../model/general.interface";
@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.page.html',
  styleUrls: ['./alumno.page.scss'],
})
export class AlumnoPage implements OnInit {

  constructor(
    private crudAlumno: CrudAlumnoService
  ) { }
 
  nombreAlumno: AlumnoI[];


  ngOnInit() { this.listar2();}
 
  listar2() {
    var datos=JSON.parse(localStorage.getItem("usuario"));

    this.crudAlumno.listarAlumnos2(datos.correo).subscribe((res) => {      
      this.nombreAlumno = res;      
    });
  }

}
