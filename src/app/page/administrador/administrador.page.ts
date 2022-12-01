import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";
import { AlertController } from "@ionic/angular";
import { AutheticationService } from "src/app/authetication.service";
@Component({
  selector: "app-administrador",
  templateUrl: "./administrador.page.html",
  styleUrls: ["./administrador.page.scss"],
})
export class AdministradorPage implements OnInit {
  handlerMessage = "";
  roleMessage = "";
  constructor(
    private navCtrl: NavController,
    public alertController: AlertController,
    private authS: AutheticationService
  ) {}

  async presentAlert() {
    const alert = await this.alertController.create({
      header: "Cerrar sesión de Administrador?",
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

  ngOnInit() {}
}
