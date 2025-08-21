import { Component, NgModule } from '@angular/core';
import { ProductService } from '../../service/productservice';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-addproduct',
  imports: [FormsModule],
  templateUrl: './addproduct.html',
  styleUrl: './addproduct.css'
})
export class AddproductComponent {
  product = { _id: 0, pName: '', pPrice: 0, pBrand: '', pIsInStock: true };

  constructor(private productService: ProductService) {}

  addProduct() {
    this.productService.addProduct(this.product).subscribe(res => {
      alert("Product Added Successfully!");
      this.product = { _id: 0, pName: '', pPrice: 0, pBrand: '', pIsInStock: true };
    });
  }
}
