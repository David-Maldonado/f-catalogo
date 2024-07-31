import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Product } from "../interfaces/products.interface";
// import { environments } from "../../../environments/environments";



@Injectable({
  providedIn: 'root'
})
export class ProductsService {

     url = ``;

    constructor(private http: HttpClient) {}  


    getProducts(): Observable<Product[]>{

     

        return this.http.get<Product[]>(`http://localhost:3001/api/products`);

    }
  

}