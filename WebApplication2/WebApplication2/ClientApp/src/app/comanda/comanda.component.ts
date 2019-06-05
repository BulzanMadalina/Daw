import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Productmodel } from '../productmodel';

@Component({
  selector: 'app-comanda',
  templateUrl: './comanda.component.html',
  styleUrls: ['./comanda.component.css']
})
export class ComandaComponent implements OnInit {
  product = new Productmodel();
  constructor(private router: Router,
              private productService: ProductService) { }

  ngOnInit() {
  }

  submit() {
    this.productService.postProduct(this.product).subscribe(res => {
      this.router.navigate(['/produse']);
    });
  }

}
