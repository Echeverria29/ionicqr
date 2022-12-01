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
export class CrudCursoprofesorService {
  private todosColeccion: AngularFirestoreCollection<CursoI>;
  private todosObs: Observable<CursoI[]>;
  constructor(private base: AngularFirestore) {
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
  agregarCursoprofesor(crusoprofesor: CursoI) {
    return this.todosColeccion.add(crusoprofesor);
  }
  listarCursosprofe() {
    return this.todosObs;
  }
  listarCursosprofe2(id: string) {
    this.todosColeccion = this.base.collection<CursoI>("cursos", (ref) =>
      ref.where("idprofe", "==", id)
    );
    this.todosObs = this.todosColeccion.snapshotChanges().pipe(
      map((actions) => {
        return actions.map((a) => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
    return this.todosObs;
  }
}
