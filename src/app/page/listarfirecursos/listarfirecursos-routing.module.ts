import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarfirecursosPage } from './listarfirecursos.page';

const routes: Routes = [
  {
    path: '',
    component: ListarfirecursosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListarfirecursosPageRoutingModule {}
