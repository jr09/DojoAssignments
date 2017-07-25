import { Component, OnInit } from '@angular/core';
import { Product } from '../product'
import { Subscription } from 'rxjs/Subscription'
import { UpdateproductsService } from '../updateproducts.service'
import { OnDestroy } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit, OnDestroy {
  subscription1: Subscription;
  subscription2: Subscription;
  product: Product;
  productList: Array<Product>;

  constructor(private _route: ActivatedRoute, private _router: Router, private _updateproductservice: UpdateproductsService) {
    this.subscription1 = this._updateproductservice.observedProducts.subscribe(
      (updatedproducts) => {this.productList = updatedproducts || [];},
      (err) => {},
      () => {}
    );
    this.subscription2 = this._route.params.subscribe(
      (param) => {
        console.log(`Received id as ${param.id}`);
        for(let idx=0; idx < this.productList.length; idx++){
          if(this.productList[idx].id == param.id){
            this.product = this.productList[idx];
            console.log(`Matched the product`);
            break;
          }
        }
      });
   }

  ngOnInit() {
  }
  ngOnDestroy(){
    this.subscription1.unsubscribe();
    this.subscription2.unsubscribe();
  }
  removeProduct(){
    this.productList.splice(this.productList.indexOf(this.product), 1);
    this._updateproductservice.updateProducts(this.productList);
    this._router.navigate(['productsList']);
  }
  updateProduct(event){
    event.preventDefault();
    this._updateproductservice.updateProducts(this.productList);
    this._router.navigate(['productsList']);
  }
}
