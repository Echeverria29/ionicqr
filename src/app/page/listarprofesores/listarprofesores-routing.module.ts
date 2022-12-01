import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarprofesoresPage } from './listarprofesores.page';

const routes: Routes = [
  {
    path: '',
    component: ListarprofesoresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListarprofesoresPageRoutingModule {}
