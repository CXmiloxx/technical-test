import { Component, OnInit, signal, Signal } from '@angular/core';
import { Product } from '../../../models/products.model';
import { ProductsService } from '../../../services/products.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-view',
  standalone: true,
  imports: [NgFor, NgIf, RouterLink],
  templateUrl: './view.component.html',
})
export class ViewComponent implements OnInit {
  productId: number | null = null;

  product = signal<Product | null>(null);

  constructor(
    private productServices: ProductsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.productId = Number(this.route.snapshot.paramMap.get('id'));

    if (this.productId) {
      this.productServices.getProductsById(this.productId).subscribe((data) => {
        console.log('DATA PRODUCT:', data);
        this.product.set(data);
      });
    }
  }
}
