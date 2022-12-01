import { Component, OnInit } from "@angular/core";
import { AlertController } from "@ionic/angular";
@Component({
  selector: "app-qralumno",
  templateUrl: "./qralumno.page.html",
  styleUrls: ["./qralumno.page.scss"],
})
export class QralumnoPage implements OnInit {
  constructor(private alertController: AlertController) {}
  async presentAlert() {
    const alert = await this.alertController.create({
      header: "Qr Registrado",
      subHeader: "06/09/2022",
      message: "Seccion PGY4121",
      buttons: ["OK"],
    });

    await alert.present();
  }

  ngOnInit() {}
}
