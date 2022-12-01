import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReprobadosprofePage } from './reprobadosprofe.page';

const routes: Routes = [
  {
    path: '',
    component: ReprobadosprofePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReprobadosprofePageRoutingModule {}
