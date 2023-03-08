import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss'],
})
export class OrderDetailsComponent implements OnInit {
  //variables
  id: any;
  orders: any;
  SingleOrder: any = [];
  users: any = [];
  SingleUser: any = [];

  constructor(
    private route: ActivatedRoute,
    private serviceService: ServiceService
  ) {}

  ngOnInit(): void {
    //get id order from url
    this.route.paramMap.subscribe((param: any) => {
      this.id = param.params.id;
    });

    //get order from json
    this.serviceService.getOrders().subscribe(
      (data: any) => {
        this.orders = data;
        this.getSingleOrder();
        console.log(this.SingleOrder);
      },
      (error: any) => {
        console.log(error);
      }
    );

    //get users from json
    this.serviceService.getUsers().subscribe(
      (data: any) => {
        this.users = data;
        this.getSingleUser();
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  //get single order (filter)
  getSingleOrder() {
    this.SingleOrder = this.orders.filter(
      (order: any) => order.OrderId == this.id
    );
  }

  //get single user (filter)
  getSingleUser() {
    this.SingleUser = this.users.filter(
      (user: any) => user.Id == this.SingleOrder[0].UserId
    );
  }
}
