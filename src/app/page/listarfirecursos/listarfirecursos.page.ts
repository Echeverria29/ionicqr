import { Component, OnInit } from "@angular/core";
import { CrudCursoprofesorService } from "src/app/servicio/crud-cursoprofesor.service";
import { CursoI } from "../model/general.interface";

@Component({
  selector: "app-listarfirecursos",
  templateUrl: "./listarfirecursos.page.html",
  styleUrls: ["./listarfirecursos.page.scss"],
})
export class ListarfirecursosPage implements OnInit {
  constructor(private crudCursoprofe: CrudCursoprofesorService) {}
  cursosProfesor: CursoI[];

  ngOnInit() {
    this.listar2();
  }
  listar2() {
    var datos=JSON.parse(localStorage.getItem("usuario"));

    this.crudCursoprofe.listarCursosprofe2(datos.id).subscribe((res) => {      
      this.cursosProfesor = res;      
    });
  }
}
