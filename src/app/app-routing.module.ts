import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full",
  },
  {
    path: "login",
    loadChildren: () =>
      import("./login/login.module").then((m) => m.LoginPageModule),
  },
  {
    path: "registro",
    loadChildren: () =>
      import("./registro/registro.module").then((m) => m.RegistroPageModule),
  },
  {
    path: "administrador",
    loadChildren: () =>
      import("./page/administrador/administrador.module").then(
        (m) => m.AdministradorPageModule
      ),
  },

  {
    path: "agregaralumno",
    loadChildren: () =>
      import("./page/agregaralumno/agregaralumno.module").then(
        (m) => m.AgregaralumnoPageModule
      ),
  },
  {
    path: "agregarcurso",
    loadChildren: () =>
      import("./page/agregarcurso/agregarcurso.module").then(
        (m) => m.AgregarcursoPageModule
      ),
  },
  {
    path: "agregarprofe",
    loadChildren: () =>
      import("./page/agregarprofe/agregarprofe.module").then(
        (m) => m.AgregarprofePageModule
      ),
  },
  {
    path: "alumno",
    loadChildren: () =>
      import("./page/alumno/alumno.module").then((m) => m.AlumnoPageModule),
  },
  {
    path: "paginaalumno",
    loadChildren: () =>
      import("./page/paginaalumno/paginaalumno.module").then(
        (m) => m.PaginaalumnoPageModule
      ),
  },
  {
    path: "docente",
    loadChildren: () =>
      import("./page/docente/docente.module").then((m) => m.DocentePageModule),
  },
  {
    path: "restablecontra",
    loadChildren: () =>
      import("./page/restablecontra/restablecontra.module").then(
        (m) => m.RestablecontraPageModule
      ),
  },
  {
    path: "paginaprofe",
    loadChildren: () =>
      import("./page/paginaprofe/paginaprofe.module").then(
        (m) => m.PaginaprofePageModule
      ),
  },
  {
    path: "qralumno",
    loadChildren: () =>
      import("./page/qralumno/qralumno.module").then(
        (m) => m.QralumnoPageModule
      ),
  },
  {
    path: "qralumno2",
    loadChildren: () =>
      import("./page/qralumno2/qralumno2.module").then(
        (m) => m.Qralumno2PageModule
      ),
  },
  {
    path: "asistenciaalumno",
    loadChildren: () =>
      import("./page/asistenciaalumno/asistenciaalumno.module").then(
        (m) => m.AsistenciaalumnoPageModule
      ),
  },
  
  {
    path: "qrprofesor",
    loadChildren: () =>
      import("./page/qrprofesor/qrprofesor.module").then(
        (m) => m.QrprofesorPageModule
      ),
  },
  {
    path: "listaprofeactualizada",
    loadChildren: () =>
      import("./page/listaprofeactualizada/listaprofeactualizada.module").then(
        (m) => m.ListaprofeactualizadaPageModule
      ),
  },
  {
    path: "reprobadosprofe",
    loadChildren: () =>
      import("./page/reprobadosprofe/reprobadosprofe.module").then(
        (m) => m.ReprobadosprofePageModule
      ),
  },

  {
    path: "listarprofesores",
    loadChildren: () =>
      import("./page/listarprofesores/listarprofesores.module").then(
        (m) => m.ListarprofesoresPageModule
      ),
  },

  {
    path: "listarfirecursos",
    loadChildren: () =>
      import("./page/listarfirecursos/listarfirecursos.module").then(
        (m) => m.ListarfirecursosPageModule
      ),
  },
  {
    path: 'listaralumnos',
    loadChildren: () => import('./page/listaralumnos/listaralumnos.module').then( m => m.ListaralumnosPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
