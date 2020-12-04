import { Injectable } from '@angular/core';
import { Pelicula } from './pelicula-list/Pelicula';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  constructor() { }

  getPeliculas() :Pelicula[]{
    return  [{
      img: "assets/img/batman_mini.jpeg",
      name: "Batman",
      genero: "Accion",
      estreno: "24/11/2020",
      disponible: 100,
      reserva: 0,
    },
    {
      img: "assets/img/spiderman2.jpg",
      name: "Spiderman",
      genero: "Aventura",
      estreno: "08/08/2020",
      disponible: 50,
      reserva: 0,
    },
    {
      img: "assets/img/titanic2.jpg",
      name: "Titanic",
      genero: "Romantica",
      estreno: "",
      disponible: 0,
      reserva: 0,
    }
    ];
  }
}
