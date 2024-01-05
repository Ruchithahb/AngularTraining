import { Component, OnInit } from '@angular/core';
import { ProductListService } from '../product-list.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: any;
prod: any;


  constructor(private product: ProductListService) {
    this.foodItems = this.product.getProducts()
   }

  ngOnInit(): void {
  }
  foodItems: any[] = [];

  getTotalProducts(){
    return this.foodItems.length;
  }
  getTotalAvailable(){
    return this.foodItems.filter(prod => prod.Availability === 'Available').length;

  }
  getTotalNotAvailable(){
    return this.foodItems.filter(prod => prod.Availability === 'Not Available').length;

  }

  prodCountRadioButton : string = 'All';

  // searchText:string= '';

  onFilterRadioButtonChanged(data:string){
    this.prodCountRadioButton = data;
    // console.log(this.prodCountRadioButton);


  }

  // onSearchTextEntered(searchValue:string){
  //   this.searchText = searchValue;
  //   // console.log(this.searchText);

  // }
}
