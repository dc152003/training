// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-deleteproduct',
//   imports: [],
//   templateUrl: './deleteproduct.html',
//   styleUrl: './deleteproduct.css'
// })
// export class Deleteproduct {

// }


import { Component } from '@angular/core';
import { ProductService } from '../../services/product-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-deleteproduct',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './deleteproduct.html',
  styleUrls: ['./deleteproduct.css']
})
export class DeleteProductComponent {
  productId: number = 0;

  constructor(private productService: ProductService) {}

  deleteProduct() {
    this.productService.deleteProduct(this.productId.toString()).subscribe(() => {
      alert('Product deleted!');
      this.productId = 0;
    });
  }
}