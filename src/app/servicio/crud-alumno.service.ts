import { Injectable } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from "angularfire2/firestore";

import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { AlumnoI } from "../page/model/general.interface";
@Injectable({
  providedIn: "root",
})
export class CrudAlumnoService {
  private todosColeccion: AngularFirestoreCollection<AlumnoI>;
  private todosObs: Observable<AlumnoI[]>;
  constructor(private base: AngularFirestore) {
    // donde dice profesores: es el mismo nombre de la coleccion
    // en la base de datos de firebase
    this.todosColeccion = base.collection<AlumnoI>("alumnos");
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
  agregarAlumno(alumno: AlumnoI) {
    return this.todosColeccion.add(alumno);
  }
  listarAlumno() {
    return this.todosObs;
  }
  buscarAlumnos(correo: string, pass: string) {
    this.todosColeccion = this.base.collection<AlumnoI>("alumnos", (ref) =>
      ref.where("correo", "==", correo).where("pass", "==", pass)
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

  listarAlumnos2(correo: string) {
    this.todosColeccion = this.base.collection<AlumnoI>("alumnos", (ref) =>
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
