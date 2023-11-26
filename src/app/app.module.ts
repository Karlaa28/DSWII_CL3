import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EstacionamientoComponent } from './estacionamiento/estacionamiento.component';
import { NotasComponent } from './notas/notas.component';
import { ListaepisodiosComponent } from './listaepisodios/listaepisodios.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: 'estacionamiento', component: EstacionamientoComponent },
  { path: 'notas', component: NotasComponent },
  { path: 'listaepisodios', component: ListaepisodiosComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    EstacionamientoComponent,
    NotasComponent,
    ListaepisodiosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,

    FormsModule,
    RouterModule.forRoot(routes),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

