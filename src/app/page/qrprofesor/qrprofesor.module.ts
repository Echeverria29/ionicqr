import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QrprofesorPageRoutingModule } from './qrprofesor-routing.module';

import { QrprofesorPage } from './qrprofesor.page';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { LibreriasModule } from 'src/app/librerias/librerias.module';

@NgModule({
  imports: [
    LibreriasModule,
    NgxQRCodeModule,
    CommonModule,
    FormsModule,
    IonicModule,
    QrprofesorPageRoutingModule
  ],
  declarations: [QrprofesorPage]
})
export class QrprofesorPageModule {}
