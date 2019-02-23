import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  private products: Product[] = [
    new Product(1, 'The First Product', 1.99, ['hardware', 'electronic device'], 3.5, 'This is the first product'),
    new Product(2, 'The Second Product', 2.99, ['software', 'electronic device'], 4.5, 'This is the second product'),
    new Product(3, 'The Third Product', 3.99, ['hardware', 'digital device'], 2.5, 'This is the third product'),
    new Product(4, 'The Forth Product', 4.99, ['camera'], 1.5, 'This is the forth product'),
    new Product(5, 'The Fifth Product', 5.99, ['projector', 'office device'], 0.5, 'This is the fifth product'),
    new Product(6, 'The Sixth Product', 6.99, ['game console'], 5, 'This is the sixth product')
  ];

  private comments: Comment[] = [
    new Comment(1, 1, '2017-02-02 22:22:22', 'Tom', 3, 'It is Okay'),
    new Comment(2, 1, '2018-03-03 12:12:12', 'Jerry', 1, 'Not worthy'),
    new Comment(3, 1, '2019-04-04 18:18:18', 'Micky', 5, 'It is good'),
    new Comment(4, 2, '2019-05-05 16:16:16', 'Minny', 5, 'It is great'),
  ];

  getProducts(): Product[] {
    return this.products;
  }

  getProduct(id: number): Product {
    return this.products.find((product) => product.id == id);
  }

  getCommentsForProductId(id: number): Comment [] {
    return this.comments.filter((comment: Comment) => comment.productId == id);
  }

}

export class Product {

  constructor(
    public id: number,
    public title: string,
    public price: number,
    public categories: Array<string>,
    public rating: number,
    public desc: string
  ) {

  }

}

export class Comment {

  constructor(
    public id: number,
    public productId: number,
    public timestamp: string,
    public user: string,
    public rating: number,
    public content: string
  ) {}
}
