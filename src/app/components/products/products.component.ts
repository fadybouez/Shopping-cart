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
orders:any
  ngOnInit(): void {
    this.serviceService.getProduct().subscribe((data:any)=>{
      this.products=data
      console.log(data)},(error:any)=>{console.log(error)})



  }

}
