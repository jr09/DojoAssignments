import { Component, OnInit } from '@angular/core';
import { Product } from '../product'
import { Router, RouterModule } from '@angular/router' 
import { UpdateproductsService } from '../updateproducts.service'
import { Subscription } from 'rxjs/subscription'
import { OnDestroy } from '@angular/core'

@Component({
  selector: 'app-product-new',
  templateUrl: './product-new.component.html',
  styleUrls: ['./product-new.component.css']
})

export class ProductNewComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  productsList: Array<Product>;
  newProduct: Product = new Product();

  constructor(private _router: Router, private _updateService: UpdateproductsService) {
    this.subscription = _updateService.observedProducts.subscribe(
      (updatedProducts) => {this.productsList = updatedProducts;},
      (err) => {},
      () => {}
    );
   }

  ngOnInit() {
    this.newProduct = new Product();
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  newProductSubmit(event){
    event.preventDefault();  
    this.productsList = this.productsList || [];
    this.newProduct.id = Math.floor(Math.random()*1000);
    this.productsList.push(this.newProduct);
    this._updateService.updateProducts(this.productsList);
    console.log(this.productsList);
    this.newProduct = new Product();
    this._router.navigate(['productsList']);
  }
}
