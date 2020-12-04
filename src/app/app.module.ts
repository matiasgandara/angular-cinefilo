import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PeliculaListComponent } from './pelicula-list/pelicula-list.component';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routing.module'
import { PeliculaAboutComponent } from './pelicula-about/pelicula-about.component';
import { PeliculaPeliculasComponent } from './pelicula-peliculas/pelicula-peliculas.component';
import { CarritoComponent } from './carrito/carrito.component';
import { InputIntegerComponent } from './input-integer/input-integer.component';



@NgModule({
  declarations: [
    AppComponent,
    PeliculaListComponent,
    PeliculaAboutComponent,
    PeliculaPeliculasComponent,
    CarritoComponent,
    InputIntegerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
