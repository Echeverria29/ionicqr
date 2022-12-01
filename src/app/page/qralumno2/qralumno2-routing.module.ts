import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Qralumno2Page } from './qralumno2.page';

const routes: Routes = [
  {
    path: '',
    component: Qralumno2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Qralumno2PageRoutingModule {}
