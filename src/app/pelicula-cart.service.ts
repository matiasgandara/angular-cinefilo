import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Pelicula } from './pelicula-list/Pelicula';


/* 
*Maejo la  logica del carrito
*
 */

@Injectable({
  providedIn: 'root'
})
export class PeliculaCartService {


  private _cartList: Pelicula[] = [];

  cartList: BehaviorSubject <Pelicula[]> = new BehaviorSubject([]);


  constructor() { }

  addToCart(pelicula: Pelicula, reserva: number) {
    let item: Pelicula = this._cartList.find((v1) => v1.name == pelicula.name); 
    pelicula.reserva = reserva;
    if (!item){
      this._cartList.push({... pelicula});
    } else{
      item.reserva += pelicula.reserva;
    }
    this.cartList.next(this._cartList);// equivalente al emitt de eventos
  }

 
}
