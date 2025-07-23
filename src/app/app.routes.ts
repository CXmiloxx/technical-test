import { Routes } from '@angular/router';
import { ListComponent } from './components/products/list/list.component';
import { CreateComponent } from './components/products/create/create.component';
import { UpdateComponent } from './components/products/update/update.component';
import { ViewComponent } from './components/products/view/view.component';

export const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'products', component: ListComponent },
  { path: 'products/create', component: CreateComponent },
  { path: 'products/:id', component: ViewComponent },
  { path: 'products/update/:id', component: UpdateComponent },
];
