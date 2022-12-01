import { Injectable } from "@angular/core";
import { Storage } from "@ionic/storage";
import { Router } from "@angular/router";
import { Platform } from "@ionic/angular";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AutheticationService {
  authState = new BehaviorSubject(false);
  constructor(
    private router: Router,
    private storage: Storage,
    private platform: Platform
  ) {
    platform.ready().then(() => {
      this.ifLoggedIn();
    });
  }
  login() {
    var usuario = {
      user_name: "orlando",
      user_level: "123",
    };
    this.storage.create();
    this.storage.set("USER_INFO", usuario).then((response) => {
      console.log(response);
      this.router.navigate(["login"]);
      this.authState.next(true);
    });
  }
  logout() {
    this.storage.create();
    this.storage.remove("USER_INFO").then((response) => {
      console.log("Salida");
      this.router.navigate(["login"]);
      this.authState.next(false);
    });
  }
  isAuthenticated() {
    return this.authState.value;
  }

  ifLoggedIn() {
    this.storage.create();
    this.storage.get("USER_INFO").then((response) => {
      if (response) {
        this.authState.next(true);
      }
    });
  }
}
