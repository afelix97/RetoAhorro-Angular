import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';

import { FormPrincipalComponent } from './form-principal/form-principal.component';
import { NoEncontradoComponent } from './no-encontrado/no-encontrado.component';

const prefix: String = "retoahorro";

const routes: Routes = [// definicion de rutas
  { path: prefix + '/indexretoahorro', component: FormPrincipalComponent },
  { path: '' + prefix, redirectTo: prefix + '/indexretoahorro', pathMatch: 'full' },
  { path: '**', component: NoEncontradoComponent }//cuando una ruta no este definida envia pagina 404
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
