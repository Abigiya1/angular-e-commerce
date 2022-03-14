import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer, CUSTOMERS } from '../customer/customer.object';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {

  customers = CUSTOMERS
  selectedCustomer = new Customer()
  newCustomer = new Customer();
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      param => {
          console.log (param['id']);  
          for (let customer of this.customers){
            if (customer.id == param['id'])
            { 
              this.selectedCustomer = customer; 
            }
          }
          
      }  		
    );
  }

  updateCustomer(){
    this.selectedCustomer.name = this.newCustomer.name;
    this.selectedCustomer.gender = this.newCustomer.gender;
    this.selectedCustomer.memberYear = this.newCustomer.memberYear;
    this.selectedCustomer.email = this.newCustomer.email;
    
    this.router.navigateByUrl('customer');
  }

  deleteCustomer(){
    this.route.params.subscribe(
      param => {
        this.customers.splice(this.customers.findIndex(function(val){
          return val.id==param['id']
        }),1)
        this.router.navigateByUrl('customer')
      }
      )
    }
}
