import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService, Product } from '../../services/product';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [CommonModule, FormsModule], 
  templateUrl: './add-product.html',
  styleUrls: ['./add-product.css']
})
export class AddProductComponent {
  newProduct: Product = {
    sku: '',
    name: '',
    description: '',
    quantity: 0,
    price: 0,
    lowStockThreshold: 10
  };

  constructor(private readonly productService: ProductService) {}

  saveProduct(): void {
    if (this.newProduct.sku && this.newProduct.name) {
      this.productService.addProduct(this.newProduct).subscribe({
        next: (res) => {
          alert('Product saved successfully!');
          this.newProduct = { sku: '', name: '', description: '', quantity: 0, price: 0, lowStockThreshold: 10 };
        },
        error: (err) => console.error('Error saving product', err)
      });
    }
  }
}
