import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarfirecursosPageRoutingModule } from './listarfirecursos-routing.module';

import { ListarfirecursosPage } from './listarfirecursos.page';
import { LibreriasModule } from 'src/app/librerias/librerias.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListarfirecursosPageRoutingModule,
    LibreriasModule
  ],
  declarations: [ListarfirecursosPage]
})
export class ListarfirecursosPageModule {}
