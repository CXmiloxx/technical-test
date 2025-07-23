import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../services/products.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-update',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterLink ],
  templateUrl: './update.component.html',
})
export class UpdateComponent implements OnInit {
  producForm: FormGroup;
  productId: number | null = null;

  constructor(
    private productServices: ProductsService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.producForm = this.fb.group({
      title: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.productId = Number(this.route.snapshot.paramMap.get('id'));
    if (this.productId) {
      this.productServices.getProductsById(this.productId).subscribe((data) => {
        this.producForm.patchValue({
          title: data.title,
        });
      });
    }
  }

  onSubmit() {
    if (this.producForm.valid && this.productId) {
      this.productServices.updateProduct(this.productId, this.producForm.value).subscribe(() =>{
        this.router.navigate(['/products'])
      })
    }
  }
}
