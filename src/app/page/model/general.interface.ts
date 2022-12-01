export interface ProfesorI {
  id?: string;
  nombres: string;
  apellidos: string;
  pass: string;
  rut: string;
  correo: string;
  sede: string;
}
export interface AlumnoI {
  id?: string;
  nombres: string;
  apellidos: string;
  rut: string;
  pass: string;
  correo: string;
  sede: string;
  carrera: string;
}

export interface CursoI {
  id?: string;
  idprofe: string;
  nombre: string;
}

export interface alumnoCurI {
  id? : string;
  correo: string;
  nombreC: string;
  porcentaje: number;
}
