import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Qralumno2PageRoutingModule } from './qralumno2-routing.module';

import { Qralumno2Page } from './qralumno2.page';
import { LibreriasModule } from 'src/app/librerias/librerias.module';

@NgModule({
  imports: [
    LibreriasModule,
    CommonModule,
    FormsModule,
    IonicModule,
    Qralumno2PageRoutingModule
  ],
  declarations: [Qralumno2Page]
})
export class Qralumno2PageModule {}
