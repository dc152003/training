// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-addproduct',
//   imports: [],
//   templateUrl: './addproduct.html',
//   styleUrl: './addproduct.css'
// })
// export class Addproduct {

// }


import { Component } from '@angular/core';
import { ProductService, Product } from '../../services/product-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-addproduct',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './addproduct.html',
  styleUrls: ['./addproduct.css']
})
export class AddProductComponent {
  product: Product = {
    pName: '',
    pPrice: 0,
    pBrand: '',
    pIsInStock: true
  };

  constructor(private productService: ProductService) {}

  addProduct() {
    this.productService.addProduct(this.product).subscribe(() => {
      alert('Product added!');
      this.product = {
        pName: '',
        pPrice: 0,
        pBrand: '',
        pIsInStock: true
      };
    });
  }
}