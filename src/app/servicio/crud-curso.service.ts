import { Injectable } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from "angularfire2/firestore";

import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { CursoI } from "../page/model/general.interface";

@Injectable({
  providedIn: "root",
})
export class CrudCursoService {
  private todosColeccion: AngularFirestoreCollection<CursoI>;
  private todosObs: Observable<CursoI[]>;
  constructor(base: AngularFirestore) {
    // donde dice profesores: es el mismo nombre de la coleccion
    // en la base de datos de firebase
    this.todosColeccion = base.collection<CursoI>("cursos");
    this.todosObs = this.todosColeccion.snapshotChanges().pipe(
      map((actions) => {
        return actions.map((a) => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }
  //crear metodo crud profesor
  // profesor es lo que vas a ocupar en la pagina donde se agregan
  //los datos ejemplo profesor.nombre,profesor.apellido
  agregarCurso(curso: CursoI) {
    return this.todosColeccion.add(curso);
  }
}
