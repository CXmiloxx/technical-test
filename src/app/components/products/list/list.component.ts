import { Component, OnInit, signal } from '@angular/core';
import { Product } from '../../../models/products.model';
import { ProductsService } from '../../../services/products.service';
import { NgFor, NgIf } from '@angular/common';
import { ProductResponse } from '../../../models/productsResponse.model';
import { RouterLink } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [NgIf, NgFor, RouterLink],
  templateUrl: './list.component.html',
})
export class ListComponent implements OnInit {
  products = signal<Product[]>([]);

  constructor(private productServices: ProductsService) {}

  ngOnInit(): void {
    this.productServices.getProducts().subscribe((data: ProductResponse) => {
      this.products.set(data.products);
    });
  }

  eliminarProducto(id: number) {
    Swal.fire({
      title: '¿Estás seguro?',
      text: '¡No podrás revertir esto!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.productServices.deleteProduct(id).subscribe(() => {
          this.productServices
            .getProducts()
            .subscribe((data: ProductResponse) => {
              this.products.set(data.products);
              Swal.fire(
                '¡Eliminado!',
                'El producto ha sido eliminado.',
                'success'
              );
            });
        });
      }
    });
  }
}
