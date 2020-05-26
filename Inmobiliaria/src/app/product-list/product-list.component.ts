import { Component, OnInit } from '@angular/core';

import {products} from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {

  products = products;


  share (){
        window.alert('The product has been shared!!');
        console.log('The product has been shared!!');
  }

 
  onNotify(){
    window.alert('you will be notifued when the product goes on sale');
    console.log('you will  be notifued when the product goes on sale');
  }

}
