import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QralumnoPageRoutingModule } from './qralumno-routing.module';

import { QralumnoPage } from './qralumno.page';
import { LibreriasModule } from 'src/app/librerias/librerias.module';

@NgModule({
  imports: [
    LibreriasModule,
    CommonModule,
    FormsModule,
    IonicModule,
    QralumnoPageRoutingModule
  ],
  declarations: [QralumnoPage]
})
export class QralumnoPageModule {}
