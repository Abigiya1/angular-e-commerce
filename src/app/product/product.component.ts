import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product, PRODUCTS } from './product.object';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  
  productList = PRODUCTS
  
  constructor(private router: Router,  private productService: ProductService) { }

  ngOnInit(): void {
    // this.productService.getProducts().subscribe(
    //   data => {this.productList = data}
    // );

  }
  
  onViewDetail(id: number){
    this.router.navigateByUrl('/product/edit/' + id);
}

  addProduct(){
    this.router.navigateByUrl('addProduct');
  }

 
    




}
