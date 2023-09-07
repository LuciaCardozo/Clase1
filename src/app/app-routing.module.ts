import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidoComponent } from './pages/bienvenido/bienvenido.component';
import { LoginComponent } from './pages/login/login.component';
import { ErrorComponent } from './pages/error/error.component';
import { Clase1Component } from './ejercicios/clase1/clase1.component';

const routes: Routes = [
  {path:'', redirectTo: 'ejercicioUno', pathMatch:'full'},
  {path:'bienvenido', component: BienvenidoComponent},
  {path:'login', component: LoginComponent},
  {path:'ejercicioUno', component: Clase1Component},
  {path:'**', component: ErrorComponent}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
