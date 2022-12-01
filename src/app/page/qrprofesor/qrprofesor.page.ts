import { Component, OnInit } from '@angular/core';

import { NgxQrcodeElementTypes  } from 'ngx-qrcode2/lib/qrcode.types';
@Component({
  selector: 'app-qrprofesor',
  templateUrl: './qrprofesor.page.html',
  styleUrls: ['./qrprofesor.page.scss'],
})
export class QrprofesorPage implements OnInit {

  constructor() { }
  codigo={
    profesor:'Freddy Campos',
    seccion:'pgy4121',
    hora: '10:10',
    fecha: ''
  }
  qrData=JSON.stringify(this.codigo);
  elementType:NgxQrcodeElementTypes.CANVAS

  ngOnInit() {
    var fecha = new Date();
    this.codigo.fecha = fecha.getDate().toString()+'/'+(fecha.getMonth()+1)+'/'+fecha.getFullYear();
    this.codigo.hora = ''+fecha.getHours()+':'+fecha.getMinutes();
    console.log (this.codigo)
  }

}
