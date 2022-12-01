import { Component, OnInit } from "@angular/core";
import { CrudProfesorService } from "src/app/servicio/crud-profesor.service";
import { ProfesorI } from "../model/general.interface";
@Component({
  selector: "app-listarprofesores",
  templateUrl: "./listarprofesores.page.html",
  styleUrls: ["./listarprofesores.page.scss"],
})
export class ListarprofesoresPage implements OnInit {
  constructor(private crudProfe: CrudProfesorService) {}
  nombre: string;
  profesores: ProfesorI[];
  ngOnInit() {
    this.listar();
  }
  listar() {
    this.crudProfe.listarProfesor().subscribe((res) => {
      this.profesores = res;
    });
  }
}
