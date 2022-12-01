import { Component } from "@angular/core";
import { AutheticationService } from "./authetication.service";
import { Platform } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
})
export class AppComponent {
  constructor(
    private AuthServ: AutheticationService,
    private router: Router,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
    this.inicializar();
  }
  /**guardian */
  inicializar() {
    this.platform.ready().then(() => {
      this.AuthServ.authState.subscribe((estado) => {
        if (estado) {
          this.router.navigate(["paginaalumno", "paginaprofesor"]);
        } else {
          this.router.navigate(["login"]);
        }
      });
    });
  }

  /**loginprincipal */
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
