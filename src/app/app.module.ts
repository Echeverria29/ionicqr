import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";

import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { AngularFireModule } from "angularfire2";
import { AngularFirestoreModule } from "angularfire2/firestore";
import { environment } from "src/environments/environment";
import { GuardianService } from "./guardian.service";
import { AutheticationService } from "./authetication.service";
import { Storage } from "@ionic/storage";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxQRCodeModule } from "ngx-qrcode2";
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    NgxQRCodeModule,
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    BrowserAnimationsModule,
  ],
  providers: [
    Storage,
    StatusBar,
    AutheticationService,
    SplashScreen,
    GuardianService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
