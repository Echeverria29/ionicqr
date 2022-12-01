import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaralumnosPageRoutingModule } from './listaralumnos-routing.module';

import { ListaralumnosPage } from './listaralumnos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaralumnosPageRoutingModule
  ],
  declarations: [ListaralumnosPage]
})
export class ListaralumnosPageModule {}
