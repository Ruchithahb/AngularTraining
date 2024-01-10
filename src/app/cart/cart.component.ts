import { Component } from '@angular/core';
// import { CartService } from '../cart-service.service';
import { ProductListService } from '../product-list.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
})
export class CartComponent {
  products = [
    {
      "title": "chocolates",
  "description": "Indulging in a symphony of chocolate flavors. 🍫✨",
  "price": "₹200",
  "rating": 4.2,
  "location": "Mumbai",
  "image":"/assets/chocolates.jpg",
  "Availability":"Available",
  "productQuantity":"1",
  "productStock":"4"
    }
  ]

  constructor(private route: ActivatedRoute, private cart: ProductListService) {}
  incrementQuantity(product: any): void {
    if (product.productQuantity < product.productStock) {
      product.productQuantity++;
    }
  }
 
  decrementQuantity(product: any): void {
    if (product.productQuantity = 0) {
      product.productQuantity--;
    }
  }
  onQuantityChange(product: any, newQuantity: number): void {
    if (newQuantity >= 0) {
      product.productQuantity = newQuantity;
    }
  }
}
