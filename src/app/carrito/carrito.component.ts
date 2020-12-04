import { Component, OnInit } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { PeliculaCartService } from '../pelicula-cart.service';
import { Pelicula } from '../pelicula-list/Pelicula';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  cartList$: Observable<Pelicula[]>;

  constructor(private cart: PeliculaCartService) {
    this.cartList$ = cart.cartList.asObservable();
   }

  ngOnInit(): void {
  }

}
