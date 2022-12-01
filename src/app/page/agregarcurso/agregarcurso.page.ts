import { Component, OnInit } from "@angular/core";
import { CrudCursoService } from "src/app/servicio/crud-curso.service";
import { CursoI } from "../model/general.interface";

@Component({
  selector: "app-agregarcurso",
  templateUrl: "./agregarcurso.page.html",
  styleUrls: ["./agregarcurso.page.scss"],
})
export class AgregarcursoPage implements OnInit {
  constructor(private crudCurso: CrudCursoService) {}

  ngOnInit() {}
  // aca van los datos exactos de como estan guardados en firebase
  // al lado con su interfaz creada en eviroment.ts
  curso: CursoI = {
    id: "",
    idprofe: "",
    nombre: "",
  };

  grabar() {
    this.crudCurso.agregarCurso(this.curso).then(() => {
      alert("grabo");
    });
  }
}
