import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];//item =variable [] =array
  constructor() { }
  addProduct(product){//creacion de metodo con parametros
      this.items.push(product);//de esta forma agragamos un producto al carrito
  }

  //Este metodo permite obtener todos los elementos del carrito
getItems(){
  return this.items;
}

//Limpiar el contenidoo del carrito y regresa el arreglo al vacio
  clearcart(){
    this.items=[];//limpia el carrito
    return this.items;//regresa el carrito vacio
  }
}

