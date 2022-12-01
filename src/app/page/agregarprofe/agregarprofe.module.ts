import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarprofePageRoutingModule } from './agregarprofe-routing.module';

import { AgregarprofePage } from './agregarprofe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregarprofePageRoutingModule
  ],
  declarations: [AgregarprofePage]
})
export class AgregarprofePageModule {}
