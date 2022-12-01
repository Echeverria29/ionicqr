import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaginaprofePage } from './paginaprofe.page';

const routes: Routes = [
  {
    path: '',
    component: PaginaprofePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaginaprofePageRoutingModule {}
