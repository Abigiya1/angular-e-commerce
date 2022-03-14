import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer, CUSTOMERS } from '../customer/customer.object';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  customerList = CUSTOMERS
  newCustomer = new Customer();
  selectedCustomer = new Customer();
  constructor(private router : Router) { }

  ngOnInit(): void {
  }
  addCustomer(){
    this.selectedCustomer.name = this.newCustomer.name;
    this.selectedCustomer.id = this.newCustomer.id;
    this.selectedCustomer.email = this.newCustomer.email;
    this.selectedCustomer.image = this.newCustomer.image;
    this.selectedCustomer.memberYear = this.newCustomer.memberYear;
    this.newCustomer = new Customer();
    this.customerList.push(this.selectedCustomer);
    this.router.navigateByUrl('Customer');
  }
  
}
