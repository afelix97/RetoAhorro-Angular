import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
/* '@angular/forms' : para poder usar ngModel en los formularios */
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormPrincipalComponent } from './form-principal/form-principal.component';
import { NoEncontradoComponent } from './no-encontrado/no-encontrado.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    FormPrincipalComponent,
    NoEncontradoComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
