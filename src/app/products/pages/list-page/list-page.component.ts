import { Component, OnInit } from '@angular/core';
import { Product } from '../../interfaces/products.interface';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',

})
export class ListPageComponent implements OnInit {

  public products: Product[] = [];

  constructor(
    private productService: ProductsService
  ){}
  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      {
        next: (product: Product[]) => {
          this.products = product;
        },
        error: (error) => {
          console.log(error);
        }
      }
    );
  }



}
