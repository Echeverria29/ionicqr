import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestablecontraPageRoutingModule } from './restablecontra-routing.module';

import { RestablecontraPage } from './restablecontra.page';

import { LibreriasModule } from 'src/app/librerias/librerias.module';
@NgModule({
  imports: [
    LibreriasModule,
    CommonModule,
    FormsModule,
    IonicModule,
    RestablecontraPageRoutingModule
  ],
  declarations: [RestablecontraPage]
})
export class RestablecontraPageModule {}
