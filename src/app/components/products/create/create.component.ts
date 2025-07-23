import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../services/products.service';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './create.component.html',
})
export class CreateComponent implements OnInit {
  producForm: FormGroup;

  constructor(
    private productsServices: ProductsService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.producForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      category: ['', Validators.required],
      price: [0, [Validators.required, Validators.min(0)]],
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.producForm.valid) {
      this.productsServices
        .createProduct(this.producForm.value)
        .subscribe(() => {
          this.router.navigate(['/products']);
        });
      Swal.fire({
        title: 'Producto creado',
        text: 'El producto se creo exitosamente',
        icon: 'success',
      });
    }
  }
}
