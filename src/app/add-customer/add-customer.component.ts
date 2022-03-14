import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer, CUSTOMERS } from '../customer/customer.object';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  customerList = CUSTOMERS
  newCustomer = new Customer();
  selectedCustomer = new Customer();
  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  addCustomer(){
    this.selectedCustomer.name = this.newCustomer.name;
    this.selectedCustomer.id = this.customerList.length+1;
    this.selectedCustomer.email = this.newCustomer.email;
    this.selectedCustomer.image = this.newCustomer.image;
    this.selectedCustomer.memberYear = this.newCustomer.memberYear;
    this.newCustomer = new Customer();
    this.customerList.push(this.selectedCustomer);
    this.router.navigateByUrl('customer');
  }
}
