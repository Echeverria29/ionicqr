import { Component, OnInit } from "@angular/core";
import { CrudAlumnoService } from "src/app/servicio/crud-alumno.service";
import { AlumnoI } from "../model/general.interface";

@Component({
  selector: "app-agregaralumno",
  templateUrl: "./agregaralumno.page.html",
  styleUrls: ["./agregaralumno.page.scss"],
})
export class AgregaralumnoPage implements OnInit {
  constructor(private crudAlumno: CrudAlumnoService) {}

  ngOnInit() {}
  // aca van los datos exactos de como estan guardados en firebase
  // al lado con su interfaz creada en eviroment.ts
  alumno: AlumnoI = {
    nombres: "",
    apellidos: "",
    rut: "",
    correo: "",
    carrera: "",
    sede: "",
    pass: "",
  };

  grabar() {
    this.crudAlumno.agregarAlumno(this.alumno).then(() => {
      alert("grabo");
    });
  }
}
