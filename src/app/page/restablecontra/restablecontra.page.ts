import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
/**importar alert controller */
import { AlertController } from "@ionic/angular";
@Component({
  selector: "app-restablecontra",
  templateUrl: "./restablecontra.page.html",
  styleUrls: ["./restablecontra.page.scss"],
})
export class RestablecontraPage implements OnInit {
  constructor(public alertController: AlertController) {}
  async presentAlert() {
    const alert = await this.alertController.create({
      header: "Contraseñada restablecida",
      subHeader: "17/10/2022",
      message: "Revise su correo para mas información",
      buttons: ["OK"],
    });

    await alert.present();
  }
  ngOnInit() {}
}
