import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { ProductsComponent } from './products/products.component';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HooksComponent } from './hooks/hooks.component';

const routes: Routes = [
  {path: ' ', component: AppComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'products', component: ProductsComponent},
  {path:'about',component:AboutComponent},
  {path:'hooks',component:HooksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
