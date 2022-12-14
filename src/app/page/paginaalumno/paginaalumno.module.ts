import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaginaalumnoPageRoutingModule } from './paginaalumno-routing.module';

import { PaginaalumnoPage } from './paginaalumno.page';
import { LibreriasModule } from 'src/app/librerias/librerias.module';

@NgModule({
  imports: [
    LibreriasModule,
    CommonModule,
    FormsModule,
    IonicModule,
    PaginaalumnoPageRoutingModule
  ],
  declarations: [PaginaalumnoPage]
})
export class PaginaalumnoPageModule {}
