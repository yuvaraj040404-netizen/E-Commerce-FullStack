import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService , Product} from '../../services/product';


@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  providers: [ProductService],
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(@Inject(ProductService) private readonly productService: ProductService) {}

  ngOnInit(): void {
    this.loadInventory();
  }

  loadInventory(): void {
    this.productService.getProducts().subscribe({
      next: (data: Product[]) => this.products = data,
      error: (err: any) => console.error('Failed to read data logs', err)
    });
  }
}