import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReprobadosprofePageRoutingModule } from './reprobadosprofe-routing.module';

import { ReprobadosprofePage } from './reprobadosprofe.page';

import { LibreriasModule } from 'src/app/librerias/librerias.module';
@NgModule({
  imports: [
    LibreriasModule,
    CommonModule,
    FormsModule,
    IonicModule,
    ReprobadosprofePageRoutingModule
  ],
  declarations: [ReprobadosprofePage]
})
export class ReprobadosprofePageModule {}
