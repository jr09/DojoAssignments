import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject'
import { Product } from './product'

@Injectable()
export class UpdateproductsService {

  observedProducts = new BehaviorSubject(null);
  constructor() { }
  
  updateProducts(productsList: Array<Product>){
    this.observedProducts.next(productsList);
  }
}
