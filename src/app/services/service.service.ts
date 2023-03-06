import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }
  getProduct() {
    return this.http.get("assets/order-master-dp/products.json").pipe(
      catchError((error) => {
        return throwError(() => error.message || 'some error from server ');
      })
    );
  }


}
