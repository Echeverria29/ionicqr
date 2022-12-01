import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaprofeactualizadaPageRoutingModule } from './listaprofeactualizada-routing.module';

import { ListaprofeactualizadaPage } from './listaprofeactualizada.page';

import { LibreriasModule } from 'src/app/librerias/librerias.module';
@NgModule({
  imports: [
    LibreriasModule,
    CommonModule,
    FormsModule,
    IonicModule,
    ListaprofeactualizadaPageRoutingModule
  ],
  declarations: [ListaprofeactualizadaPage]
})
export class ListaprofeactualizadaPageModule {}
