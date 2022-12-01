import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgregarcursoPage } from './agregarcurso.page';

const routes: Routes = [
  {
    path: '',
    component: AgregarcursoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgregarcursoPageRoutingModule {}
