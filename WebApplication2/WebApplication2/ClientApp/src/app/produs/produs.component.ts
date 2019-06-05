import { Component, OnInit } from '@angular/core';
import { Productmodel } from '../productmodel';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-produs',
  templateUrl: './produs.component.html',
  styleUrls: ['./produs.component.css']
})
export class ProdusComponent implements OnInit {

  product = new Productmodel();
  productID: string;
  router: Router;
  constructor(private productService: ProductService,
    private route: ActivatedRoute) {

    this.productID = this.route.snapshot.params['id'];
    this.productService.listProducts().subscribe(res => {
      this.product = res.find(x => x.id == this.productID);
    });
  }

  delete(product: Productmodel) {
    this.productService.deleteProduct(this.productID).subscribe(x => {
      this.router.navigate(['/produse']);
    });
  }

  ngOnInit() {
  }

}
