import { Component, OnInit } from '@angular/core';
import { CrudProfesorService } from "src/app/servicio/crud-profesor.service"; 
import { ProfesorI } from "../model/general.interface";
@Component({
  selector: 'app-docente',
  templateUrl: './docente.page.html',
  styleUrls: ['./docente.page.scss'],
})
export class DocentePage implements OnInit {

  constructor(
    private crudProfesor: CrudProfesorService
  ) { }
  nombreProfesor: ProfesorI[];

  ngOnInit() {this.listar2();
  }
 
  listar2() {
    var datos=JSON.parse(localStorage.getItem("usuario"));

    this.crudProfesor.listarProfesor2(datos.correo).subscribe((res) => {      
      this.nombreProfesor = res;      
    });
  }

}
