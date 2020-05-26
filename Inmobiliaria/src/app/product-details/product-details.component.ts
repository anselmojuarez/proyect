import { Component, OnInit } from '@angular/core';
import {products} from '../products';
//importamos el componente
import {ActivatedRoute} from '@angular/router';
//importamos el servicio de CartService
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
     product;
  constructor(private router: ActivatedRoute,private cartService:CartService) { 

  }
  /**
   * este metodo permite agregar un producto seleccionado
   * desde la interfaz grafica
   * @param product
   */
  addToCart(product){
    this.cartService.addProduct(product);
     window.alert("tu producto ha sido agregado al carrito de compra");
  }

  ngOnInit(): void {
    this.router.paramMap.subscribe(params =>{
      this.product = products[+params.get('productId')];
    });
  }

}
