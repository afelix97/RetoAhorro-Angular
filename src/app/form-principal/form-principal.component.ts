import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form-principal',
  templateUrl: './form-principal.component.html',
  styleUrls: ['./form-principal.component.css']
})
export class FormPrincipalComponent implements OnInit {

  datosForm: any = {
    nombre: "",
    edad: "",
    retoDeMiPreferencia: 1,
    montoAhorrarAlAnio: "",
    ahorroFijoSemanal: "",
    ahorroFijoMensual: "",
    ahorroIncrementalSemanal: ""
  }
  /* @Input("propiedadForm") datosForm:any; */
  constructor() {

  }
  
  ngOnInit() {
  }

  nuevoCalculo(){
    console.log("clic nuevo calculo");
    
  }
}
