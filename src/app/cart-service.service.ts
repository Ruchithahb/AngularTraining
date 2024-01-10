import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private selectedProductsSubject = new BehaviorSubject<any[]>([]);
  selectedProducts$: Observable<any[]> = this.selectedProductsSubject.asObservable();

  addToCart(product: any): void {
    const currentProducts = this.selectedProductsSubject.value;
    this.selectedProductsSubject.next([...currentProducts, product]);
  }

  getSelectedProducts(): any[] {
    return this.selectedProductsSubject.value;
  }
}
