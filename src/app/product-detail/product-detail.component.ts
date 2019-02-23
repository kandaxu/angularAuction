import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Product, ProductService, Comment} from '../shared/product.service';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  // productTitle: string;
   product: Product;
   private comments: Comment[];
  // private product: Product;

  constructor(private routeInfo: ActivatedRoute, private productService: ProductService) { }

  ngOnInit() {
    // this.productDesc = this.router.;
    const productId: number = this.routeInfo.snapshot.params['productId'];
    this.product = this.productService.getProduct(productId);
    this.comments = this.productService.getCommentsForProductId(productId);
    // this.productTitle = this.routeInfo.snapshot.params['prodTitle'];
    // this.routeInfo.params.subscribe((params: Params) => this.productDesc = params['desc']);
  }

}
