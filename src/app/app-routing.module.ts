import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { ProductsComponent } from './products/products.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path: ' ', component: AppComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'products', component: ProductsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
