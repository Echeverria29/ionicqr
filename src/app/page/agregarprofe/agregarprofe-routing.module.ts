import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgregarprofePage } from './agregarprofe.page';

const routes: Routes = [
  {
    path: '',
    component: AgregarprofePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgregarprofePageRoutingModule {}
