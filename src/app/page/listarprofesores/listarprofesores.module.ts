import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarprofesoresPageRoutingModule } from './listarprofesores-routing.module';

import { ListarprofesoresPage } from './listarprofesores.page';
import { LibreriasModule } from 'src/app/librerias/librerias.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListarprofesoresPageRoutingModule,
    LibreriasModule
  ],
  declarations: [ListarprofesoresPage]
})
export class ListarprofesoresPageModule {}
