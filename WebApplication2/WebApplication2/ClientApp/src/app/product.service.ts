import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Productmodel } from './productmodel';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }
  listProducts() {
    return this.http.get<Productmodel[]>(this.baseUrl + 'api/Products/GetProducts');
  }

  loadProduct(productID: string) {
    return this.http.get<Productmodel>(this.baseUrl + `api/Products/GetProduct?productID=${productID}`);
  }

  putProduct(product: Productmodel) {
    return this.http.post<any>(this.baseUrl + `api/Products/PutProduct`, product);
  }

  postProduct(product: Productmodel) {
    return this.http.post<any>(this.baseUrl + `api/Products/PostProduct`, product);
  }

  deleteProduct(productID: string) {
    return this.http.delete<any>(this.baseUrl + `api/Products/DeleteProduct/${productID}`);
  }
}
