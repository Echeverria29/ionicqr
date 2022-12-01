import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from "@angular/forms";
import { AlertController } from "@ionic/angular";
import { NavController } from "@ionic/angular";
import { FormGroupDirective, NgForm } from "@angular/forms";
import { ErrorStateMatcher } from "@angular/material/core";
import { CrudProfesorService } from "../servicio/crud-profesor.service";
import { ProfesorI } from "../page/model/general.interface";
import { CrudAlumnoService } from "../servicio/crud-alumno.service";
import { AlumnoI } from "../page/model/general.interface";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  formularioLogin: FormGroup;

  emailFormControl = new FormControl("", [
    Validators.required,
    Validators.email,
  ]);

  matcher = new ErrorStateMatcher();
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }

  arregloProfes: ProfesorI[];
  arregloAlumnos: AlumnoI[];

  constructor(
    public fb: FormBuilder,
    public alertController: AlertController,
    private navCtrl: NavController,
    private crudP: CrudProfesorService,
    private crudA: CrudAlumnoService
  ) {
    this.formularioLogin = this.fb.group({
      nombre: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required),
    });
  }

  ngOnInit() {}

  async ingresar() {
    // recuperar datos del usuario en HTML
    var f = this.formularioLogin.value;
    var A = this.formularioLogin.value;
    // comparar ese usuario con firebase

    this.crudP.buscarProfesor(f.nombre, f.password).subscribe((resp) => {
      this.arregloProfes = resp;
      var cantidad = this.arregloProfes.length;
      console.log("cantidad:" + cantidad);
      console.log(this.arregloProfes[0].id);
      if (cantidad > 0) {
        console.log("Ingresado, Bienvenido ", f.nombre);
        var datos = { correo: f.nombre, id: this.arregloProfes[0].id };
        localStorage.setItem("usuario", JSON.stringify(datos));
        this.navCtrl.navigateForward(["/paginaprofe"]);
      } else {
        this.ok();
      }
    });

    this.crudA.buscarAlumnos(A.nombre, A.password).subscribe((resp) => {
      this.arregloAlumnos = resp;
      var cantidad2 = this.arregloAlumnos.length;
      console.log("cantidad2:" + cantidad2);
      console.log(this.arregloAlumnos[0].id);
      if (cantidad2 > 0) {
        console.log("Ingresado, Bienvenido ", A.nombre);
        var datos = { correo: A.nombre, id: this.arregloAlumnos[0].id };
        localStorage.setItem("usuario", JSON.stringify(datos));
        this.navCtrl.navigateForward(["/paginaalumno"]);
      } else {
        this.ok();
      }
    });
  }

  async ok() {
    const alert = await this.alertController.create({
      header: "Datos incorrectos",
      message: "Los datos que ingresaste son incorrectos.",
      buttons: ["Aceptar"],
    });

    await alert.present();
  }
}
