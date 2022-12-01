import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaprofeactualizadaPage } from './listaprofeactualizada.page';

const routes: Routes = [
  {
    path: '',
    component: ListaprofeactualizadaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaprofeactualizadaPageRoutingModule {}
