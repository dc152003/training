import { Component } from '@angular/core';
import { ProductService } from '../../service/productservice';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-updateproduct',
  standalone: true,   // ✅ standalone component
  imports: [FormsModule],
  templateUrl: './updateproduct.html',
  styleUrl: './updateproduct.css'
})
export class UpdateproductComponent {
  id: number = 0;
  updatedProduct: any = {
    _id: 0,
    pName: '',
    pPrice: 0,
    pBrand: '',
    pIsInStock: false
  };

  constructor(private productService: ProductService) {}

  updateProduct() {
    // ✅ ensure id and price are numbers
    this.updatedProduct._id = Number(this.id);
    this.updatedProduct.pPrice = Number(this.updatedProduct.pPrice);

    this.productService.updateProduct(this.id, this.updatedProduct).subscribe({
      next: () => alert("✅ Product Updated Successfully!"),
      error: (err) => alert("❌ Update failed: " + err.message)
    });
  }
}
