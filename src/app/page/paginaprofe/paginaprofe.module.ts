import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaginaprofePageRoutingModule } from './paginaprofe-routing.module';

import { PaginaprofePage } from './paginaprofe.page';
import { LibreriasModule } from 'src/app/librerias/librerias.module';

@NgModule({
  imports: [
    LibreriasModule,
    CommonModule,
    FormsModule,
    IonicModule,
    PaginaprofePageRoutingModule
  ],
  declarations: [PaginaprofePage]
})
export class PaginaprofePageModule {}
