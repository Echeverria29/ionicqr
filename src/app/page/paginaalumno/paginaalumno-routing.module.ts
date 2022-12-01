import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaginaalumnoPage } from './paginaalumno.page';

const routes: Routes = [
  {
    path: '',
    component: PaginaalumnoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaginaalumnoPageRoutingModule {}
