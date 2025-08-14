// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-updateproduct',
//   imports: [],
//   templateUrl: './updateproduct.html',
//   styleUrl: './updateproduct.css'
// })
// export class Updateproduct {

// }


import { Component } from '@angular/core';
import { ProductService, Product } from '../../services/product-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-updateproduct',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './updateproduct.html',
  styleUrls: ['./updateproduct.css']
})
export class UpdateProductComponent {
  productId: number = 0;
  updatedProduct: Product = {
    pName: '',
    pPrice: 0,
    pBrand: '',
    pIsInStock: true
  };

  constructor(private productService: ProductService) {}

  updateProduct() {
    this.productService.updateProduct(this.productId.toString(), this.updatedProduct).subscribe(() => {
      alert('Product updated!');
      this.productId = 0;
      this.updatedProduct = {
        pName: '',
        pPrice: 0,
        pBrand: '',
        pIsInStock: true
      };
    });
  }
}