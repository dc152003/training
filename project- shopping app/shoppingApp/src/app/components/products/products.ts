


import { Component, OnInit } from '@angular/core';
import { ProductService, Product } from '../../services/product-service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  templateUrl: './products.html',
  imports: [NgFor],
  styleUrls: ['./products.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) { }

  // ngOnInit() {
  //   this.productService.getProducts().subscribe(data => this.products = data);
  // }
  ngOnInit() {
    this.productService.getProducts().subscribe(data => {
      console.log('Fetched products:', data);
      this.products = data;
    });
  }
}