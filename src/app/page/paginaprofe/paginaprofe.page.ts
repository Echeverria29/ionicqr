import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";
import { AlertController } from "@ionic/angular";
import { AutheticationService } from "src/app/authetication.service";
import { CrudProfesorService } from "src/app/servicio/crud-profesor.service"; 
import { ProfesorI } from "../model/general.interface";
@Component({
  selector: "app-paginaprofe",
  templateUrl: "./paginaprofe.page.html",
  styleUrls: ["./paginaprofe.page.scss"],
})
export class PaginaprofePage implements OnInit {
  handlerMessage = "";
  roleMessage = "";
  constructor(
    private navCtrl: NavController,
    public alertController: AlertController,
    private authS: AutheticationService,
    private crudProfesor: CrudProfesorService
  ) {}
  nombreProfesor: ProfesorI[];


  async presentAlert() {
    const alert = await this.alertController.create({
      header: "Cerrar sesión de Docente?",
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
            this.navCtrl.navigateBack("login");
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

    this.crudProfesor.listarProfesor2(datos.correo).subscribe((res) => {      
      this.nombreProfesor = res; 
      console.log (res)     
    });
  }
}
