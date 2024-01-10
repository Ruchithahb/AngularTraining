// products.component.ts

import { Component, OnInit } from '@angular/core';
import { ProductListService } from '../product-list.service';
import { CartService } from '../cart-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  foodItems: any[] = [];
  prodCountRadioButton: string = 'All';

  constructor(private productService: ProductListService, private cartService: CartService) {
    this.foodItems = this.productService.getProducts();
  }

  ngOnInit(): void {}

  getTotalProducts(): number {
    return this.foodItems.length;
  }

  getTotalAvailable(): number {
    return this.foodItems.filter(product => product.Availability === 'Available').length;
  }

  getTotalNotAvailable(): number {
    return this.foodItems.filter(product => product.Availability !== 'Available').length;
  }

  onFilterRadioButtonChanged(filterType: string): void {
    this.prodCountRadioButton = filterType;
  }

  
  addToCart(product: { id: number; name: string; price: number }): void {
    this.cartService.addToCart(product);
  }

  // addProduct(): void {
  //   const newProduct = {
  //     title: 'New Product',
  //     description: 'Description of the new product',
  //     price: '₹0',
  //     rating: 0,
  //     location: 'Unknown',
  //     image: '/assets/placeholder.jpg',
  //     Availability: 'Available' // Set the default availability
  //   };

  //   this.foodItems.push(newProduct);
  // }

  // deleteProduct(index: number): void {
  //   this.productService.deleteProduct(index);
  //   this.foodItems = this.productService.getProducts();
  // }
}
