import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product, PRODUCTS } from '../product/product.object';
import { ProductService } from '../product/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  productList = PRODUCTS
  newProduct = new Product();
  selectedProduct = new Product();
  constructor(private router : Router, private product: ProductService) { }

  ngOnInit(): void {
    
    
  }
 
  addProduct(){
    
    this.selectedProduct.name = this.newProduct.name;
    this.selectedProduct.price = this.newProduct.price;
    this.selectedProduct.description = this.newProduct.description;
    this.selectedProduct.imageUrl = this.newProduct.imageUrl;
    this.selectedProduct.id = this.productList.length+1;
    this.newProduct = new Product();
    this.productList.push(this.selectedProduct);
    
    this.router.navigateByUrl('product');
  }

}
