import { Component, OnInit } from '@angular/core';
import { UpdateproductsService } from '../updateproducts.service'
import { Subscription } from 'rxjs/Subscription'
import { OnDestroy } from '@angular/core'
import { Product } from '../product'
import { CurrencyPipe } from '@angular/common'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {
  productsList: Array<Product>;
  subscription: Subscription;

  constructor(private _updateproductservice: UpdateproductsService) {
    this.subscription = _updateproductservice.observedProducts.subscribe(
      (updatedProducts) => {this.productsList = updatedProducts;},
      (err) => {},
      () => {}
    )
   }

  ngOnInit() {
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  removeProduct(product: Product){
    console.log(`Received request to delete ${product}`);
    this.productsList.splice(this.productsList.indexOf(product), 1);
    this._updateproductservice.updateProducts(this.productsList);
  }
}
