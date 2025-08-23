import { Component } from '@angular/core';
import { ProductService } from '../../service/productservice';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-deleteproduct',
  standalone: true,   // ✅ standalone component
  imports: [FormsModule],
  templateUrl: './deleteproduct.html',
  styleUrl: './deleteproduct.css'
})
export class DeleteproductComponent {
  id: number | null = null;

  constructor(private productService: ProductService) {}

  deleteProduct() {
    if (this.id === null || isNaN(this.id)) {
      alert("❌ Please enter a valid Product ID.");
      return;
    }

    this.productService.deleteProduct(Number(this.id)).subscribe({
      next: () => alert("✅ Product Deleted Successfully!"),
      error: (err) => alert("❌ Delete failed: " + err.message)
    });
  }
}
