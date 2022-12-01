import { Component, OnInit } from "@angular/core";
/** al escribir alert.... en el constructor se instancia esta importacion */
import { NavController } from "@ionic/angular";
/**importar alert controller */
import { AlertController } from "@ionic/angular";

import { AutheticationService } from "src/app/authetication.service";

import { CrudAlumnoService } from "src/app/servicio/crud-alumno.service";
import { AlumnoI } from "../model/general.interface";


@Component({
  selector: "app-paginaalumno",
  templateUrl: "./paginaalumno.page.html",
  styleUrls: ["./paginaalumno.page.scss"],
})
export class PaginaalumnoPage implements OnInit {
  handlerMessage = "";
  roleMessage = "";
  /** se agrega al consrtructor despues de navcontroler
   *  public alerta: alertcontroler
   */
  constructor(
    private navCtrl: NavController,
    public alertController: AlertController,
    private authS: AutheticationService,
    private crudAlumno: CrudAlumnoService
  ) {}
 
  nombreAlumno: AlumnoI[];
  async presentAlert() {
    const alert = await this.alertController.create({
      header: "Cerrar sesion de Alumno?",
      buttons: [
        {
          text: "No",
          role: "cancel",
          handler: () => {
            this.handlerMessage = "Alert canceled";
            console.log;
          },
        },
        {
          text: "Si",
          role: "confirm",
          handler: () => {
            this.handlerMessage = "Alert confirmed";
            this.authS.logout();
          },
        },
      ],
    });
    await alert.present();
    const { role } = await alert.onDidDismiss();
    this.roleMessage = `Dismissed with role: ${role}`;
  }
  ngOnInit() {this.listar2();}

  listar2() {
    var datos=JSON.parse(localStorage.getItem("usuario"));

    this.crudAlumno.listarAlumnos2(datos.correo).subscribe((res) => {      
      this.nombreAlumno = res;      
    });
  }
}
