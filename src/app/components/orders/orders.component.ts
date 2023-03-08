import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {
  constructor(private serviceService: ServiceService) {}
  orders: any=[];
  products: any=[];


  //get orders from service

  ngOnInit(): void {

    this.serviceService.getOrders().subscribe(
      (data: any) => {
        this.orders = data;

      },
      (error: any) => {
        console.log(error);
      }
    );




  }




}
