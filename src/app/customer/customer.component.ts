import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CUSTOMERS } from './customer.object';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customerList = CUSTOMERS

  constructor(private route: Router) { }

  ngOnInit(): void {
    
  }
  onViewDetail(id: number){
    this.route.navigateByUrl('/customer/edit/' + id);
}

  addCustomer(){
    this.route.navigateByUrl('addCustomer');
  }

}
