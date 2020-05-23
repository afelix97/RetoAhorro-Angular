import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-principal',
  templateUrl: './form-principal.component.html',
  styleUrls: ['./form-principal.component.css']
})
export class FormPrincipalComponent implements OnInit {

  formRetoAhorro: FormGroup;

  datosForm: any = {
    nombre: "",
    edad: "",
    retoDeMiPreferencia: 1,
    montoAhorrarAlAnio: "",
    ahorroFijoSemanal: "",
    ahorroFijoMensual: "",
    ahorroIncrementalSemanal: ""
  }

  constructor(private constructorForm: FormBuilder) {

    this.formRetoAhorro = this.constructorForm.group({
      txtNombre:
        [
          '',//Valor por defecto 
          [
            Validators.required,
            Validators.pattern("[a-zA-Z ]*"),//solo contenga letras o espacios
            Validators.maxLength(120)
          ]
        ],
      txtEdad: ['', Validators.required],
      cboFormaCalcular: ['', Validators.required],
      txtMontoAhorrarAnio: ['', Validators.required],
      txtMontoFijoSemanal: ['', Validators.required],
      txtMontoFijoMensual: ['', Validators.required],
      txtMontoIncremental: ['', Validators.required]
    });

  }

  unirseReto(formRetoAhorro) {
    console.log(formRetoAhorro);

  }
  calcularAhorro() {
    console.log("Calculando ahorros");

  }
  nuevoCalculo() {
    console.log("Nuevo Calculo");

  }

  ngOnInit() {
  }
}
