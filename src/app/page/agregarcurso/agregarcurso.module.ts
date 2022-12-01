import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarcursoPageRoutingModule } from './agregarcurso-routing.module';

import { AgregarcursoPage } from './agregarcurso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregarcursoPageRoutingModule
  ],
  declarations: [AgregarcursoPage]
})
export class AgregarcursoPageModule {}
