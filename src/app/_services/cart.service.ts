import { Injectable } from '@angular/core';
import { IMenuReduced } from "../_interfaces/menu";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  // @ts-ignore
  private _mealsListReduced: IMenuReduced[] = JSON.parse(localStorage.getItem("cart_items")) || [];   // Use _mealsListReduced & IMenuReduced for PanierComponent

  constructor() {}

  public addToCart(data: IMenuReduced): void {
    this._mealsListReduced.push(data);
    setTimeout(() => {
      localStorage.setItem("cart_items", JSON.stringify(this._mealsListReduced));
    }, 500);
  }

  // Removing cart from local
  public removeLocalCartProduct(id: number): void {
    for (let i = 0; i < this._mealsListReduced.length; i++) {
      if (this._mealsListReduced[i]['id'] === id) {
        this._mealsListReduced.splice(i, 1);
        break;
      }
    }
    // ReAdding the mealsList after remove
    return localStorage.setItem("cart_items", JSON.stringify(this._mealsListReduced));
  }

  public removeLocalCart(): void {
    localStorage.removeItem("cart_items");
  }

  // Fetching Local CartsProducts
  public getLocalCartProducts(): IMenuReduced[] {
    return this._mealsListReduced;
  }

  public getCountCartProducts(): number {
    return this._mealsListReduced.length;
  }

  public getTotalBalanceCart(): number {
    let total: number = 0;
    this._mealsListReduced.map((meal) => {
      total = total + Number(meal.priceDF)
    })
    return total;
  }

}

