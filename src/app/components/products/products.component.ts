import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(private serviceService:ServiceService) { }
products:any

   //get products data from service

  ngOnInit(): void {
    this.serviceService.getProduct().subscribe((data:any)=>{
      this.products=data
      },(error:any)=>{console.log(error)})



  }

}
