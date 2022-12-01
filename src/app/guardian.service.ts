import { Injectable } from "@angular/core";
import { AutheticationService } from "./authetication.service";
@Injectable({
  providedIn: "root",
})
export class GuardianService {
  constructor(private authServ: AutheticationService) {}
  canActivate(): boolean {
    return this.authServ.isAuthenticated();
  }
}
