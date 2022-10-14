
import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { IProduct} from "../_interfaces/product";
import {IMenu} from "../_interfaces/menu";

@Injectable({
    providedIn: 'root'
})
export class CartService {

    constructor() {}

    addToCart(data: IMenu): void {
        // @ts-ignore
        const a: IMenu[] = JSON.parse(localStorage.getItem("cart_items")) || [];
        a.push(data);
        setTimeout(() => {
            localStorage.setItem("cart_items", JSON.stringify(a));
        }, 500);
    }

    // Removing cart from local
    removeLocalCartProduct(id: any) {
        // @ts-ignore
        const products: IMenu[] = JSON.parse(localStorage.getItem("cart_items"));

        for (let i = 0; i < products.length; i++) {
            if (products[i]['id'] === id) {
                products.splice(i, 1);
                break;
            }
        }
        // ReAdding the products after remove
        localStorage.setItem("cart_items", JSON.stringify(products));
    }

    // Fetching Locat CartsProducts
    getLocalCartProducts(){
        // @ts-ignore
        const products: Any [] = JSON.parse(localStorage.getItem("cart_items")) || [];

        return products;
    }

    getCountCartProducts(){
        // @ts-ignore
        const products: Any [] = JSON.parse(localStorage.getItem("cart_items")) || [];
        return products.length;
    }

    getTotalBalanceCart(){
        let total = 0;
        // @ts-ignore
        const products: IMenu [] = JSON.parse(localStorage.getItem("cart_items")) || [];
        products.map((f) => {
            total = total + Number(f.priceDF)
        })
    return total;
    }
}

