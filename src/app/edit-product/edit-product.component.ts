import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product, PRODUCTS } from '../product/product.object';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  productList = PRODUCTS
  products = PRODUCTS
  selectedProduct = new Product()
  newProduct = new Product();
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      param => {
          console.log (param['id']);  
          for (let product of this.products){
            if (product.id == param['id'])
            { 
              this.selectedProduct = product; 
            }
          }
          
      }  		
    );

  }

  updateProduct(){
    this.selectedProduct.name = this.newProduct.name;
    this.selectedProduct.price = this.newProduct.price;
    // (!NaN? this.newProduct.price:this.selectedProduct)
    this.selectedProduct.description = this.newProduct.description;
    
    this.router.navigateByUrl('product');
  }

  deleteProduct(){
    
    this.route.params.subscribe(
      param => {
        this.productList.splice(this.productList.findIndex(function(val){
          return val.id==param['id']
        }),1)
        this.router.navigateByUrl('product')
      }
      )
    }

}
