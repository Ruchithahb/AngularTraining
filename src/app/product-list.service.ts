import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {
  foodProducts: any[] = 
  [
  {
  "title": "chocolates",
  "description": "Indulging in a symphony of chocolate flavors. 🍫✨",
  "price": "₹200",
  "rating": 4.2,
  "location": "Mumbai",
  "image":"/assets/chocolates.jpg",
  "Availability":"Available"
  },
  {
  "title": "Biscuits",
  "description": "Delicious biscuits with a variety of toppings.",
  "price": "₹250",
  "rating": 4.5,
  "location": "New York",
  "image":"/assets/biscuits.jpg",
  "Availability":"Not Available"
  },
  {
  "title": "Ice Cream",
  "description": "Satisfying sweet cravings with a chocolatey delight.",
  "price": "₹180",
  "rating": 4.0,
  "location": "Tokyo",
  "image":"/assets/ice.jpg",
  "Availability":"Available"
  },
  {
  "title": "Cookies",
  "description": "Life is better with a cookie (or two) in hand. 🍪😊",
  "price": "₹150",
  "rating": 4.3,
  "location": "Mexico City",
  "image":"/assets/cookies.jpg",
  "Availability":"Available"
  },
  {
  "title": "Fruits",
  "description": "Bite into the colors of health and happiness",
  "price": "₹120",
  "rating": 4.1,
  "location": "London",
  "image":"/assets/fruits.webp",
  "Availability":"Not Available"
  }
  ];

  constructor() { }

  getProducts(){
    return this.foodProducts
  }
}
