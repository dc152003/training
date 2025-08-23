import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/productservice';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-products',
  templateUrl: './products.html',
  imports:[NgFor],
  styleUrl: './products.css'
})
export class ProductsComponent implements OnInit {
  products: any[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    });
  }
}
