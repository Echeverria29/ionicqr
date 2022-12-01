import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from "angularfire2/firestore";

import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { alumnoCurI } from '../page/model/general.interface';

@Injectable({
  providedIn: 'root'
})
export class CrudCursoalumnoService {
  private todosColeccion: AngularFirestoreCollection<alumnoCurI>;
  private todosObs: Observable<alumnoCurI[]>;
  constructor(private base: AngularFirestore) { 
    this.todosColeccion = base.collection<alumnoCurI>("alumnoCur");
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

  agregarCursoalumno(cursoalumno: alumnoCurI) {
    return this.todosColeccion.add(cursoalumno);

  }
  listarCursosalumno() {
    return this.todosObs;
  }
  listarCursosalumno2(correo: string) {
    this.todosColeccion = this.base.collection<alumnoCurI>("alumnoCur", (ref) =>
      ref.where("correo", "==", correo)
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

