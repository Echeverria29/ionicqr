import { Component, OnInit } from "@angular/core";
import { CrudAlumnoService } from "src/app/servicio/crud-alumno.service";
import { AlumnoI } from "../model/general.interface";

@Component({
  selector: "app-listaralumnos",
  templateUrl: "./listaralumnos.page.html",
  styleUrls: ["./listaralumnos.page.scss"],
})
export class ListaralumnosPage implements OnInit {
  constructor(private crudAlumno: CrudAlumnoService) {}
  nombre: string;
  alumnos: AlumnoI[];

  ngOnInit() {
    this.listar2();
  }

  listar2() {
    this.crudAlumno.listarAlumno().subscribe((res) => {
      this.alumnos = res;
    });
  }
}
