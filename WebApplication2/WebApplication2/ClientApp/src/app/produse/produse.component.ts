import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-produse',
  templateUrl: './produse.component.html',
  styleUrls: ['./produse.component.css']
})
export class ProduseComponent implements OnInit {

  products;
  constructor(productService: ProductService) {
    productService.listProducts().subscribe(res => {
      this.products = res;
    });
  }

  ngOnInit() {
  }

}
