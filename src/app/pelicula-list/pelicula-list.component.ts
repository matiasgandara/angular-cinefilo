import { Component, OnInit } from '@angular/core';
import { PeliculaCartService } from '../pelicula-cart.service';
import { PeliculasService } from '../peliculas.service';
import { Pelicula } from './Pelicula';

@Component({
  selector: 'app-pelicula-list',
  templateUrl: './pelicula-list.component.html',
  styleUrls: ['./pelicula-list.component.css']
})
export class PeliculaListComponent implements OnInit {

  peliculas: Pelicula[] 

  reserva: number = 0

  constructor(private cart: PeliculaCartService,private peliculasService:PeliculasService) {
  }

  ngOnInit(): void {
    this.peliculas=this.peliculasService.getPeliculas();
  }

  addToCart(pelicula): void {
    pelicula.disponible -= this.reserva;
    this.cart.addToCart(pelicula, this.reserva);
    this.reserva = 0;
    pelicula.reserva = 0;
  }

  reservar(e) {
    this.reserva = e;
  }

}
