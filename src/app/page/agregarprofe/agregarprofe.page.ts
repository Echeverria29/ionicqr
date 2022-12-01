import { Component, OnInit } from "@angular/core";
import { CrudProfesorService } from "src/app/servicio/crud-profesor.service";
import { ProfesorI } from "../model/general.interface";
@Component({
  selector: "app-agregarprofe",
  templateUrl: "./agregarprofe.page.html",
  styleUrls: ["./agregarprofe.page.scss"],
})
export class AgregarprofePage implements OnInit {
  constructor(public crudProfesor: CrudProfesorService) {}

  ngOnInit() {}
  // aca van los datos exactos de como estan guardados en firebase
  // al lado con su interfaz creada en eviroment.ts
  profesor: ProfesorI = {
    nombres: "",
    apellidos: "",
    rut: "",
    correo: "",
    sede: "",
    pass: "",
  };

  grabar() {
    this.crudProfesor.agregarProfesor(this.profesor).then(() => {
      alert("grabo");
    });
  }
}
