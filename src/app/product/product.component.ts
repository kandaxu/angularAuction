import { Component, OnInit } from '@angular/core';
import {Product, ProductService} from '../shared/product.service';
import {debounceTime} from 'rxjs/operators';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private products: Product [];
  private searchInput: FormControl = new FormControl();
  private keyWord: string;

  constructor(private productService: ProductService) {
    this.searchInput.valueChanges
      .pipe(debounceTime(500))
      .subscribe(value => this.keyWord = value);
  }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

}
