import { Injectable } from '@angular/core';
import { Product } from '../models/product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products :Product[] = [
    new Product(2, "IphoneX", "This is IphoneX description. Internationalized and accessible components for everyone. Well tested to ensure performance and reliability. Internationalized and accessible components for everyone. Well tested to ensure performance and reliability.Internationalized and accessible components for everyone. Well tested to ensure performance and reliability.Check it out!",100,"assets/images/iphoneX.jpg"),
    new Product(3, "Boxer Shorts", "This is Boxer Shorts description. Internationalized and accessible components for everyone. Well tested to ensure performance and reliability.Internationalized and accessible components for everyone. Well tested to ensure performance and reliability.Internationalized and accessible components for everyone. Well tested to ensure performance and reliability.Check it out!",50,"assets/images/boxer-shorts.jpg"),
    new Product(4, "Iphone 11", "This is Iphone 11 description. Internationalized and accessible components for everyone. Well tested to ensure performance and reliability.Internationalized and accessible components for everyone. Well tested to ensure performance and reliability.Internationalized and accessible components for everyone. Well tested to ensure performance and reliability.Check it out!",190,"assets/images/iphone11.jpg"),
    new Product(5, "Men Shirt", "This is Men Shirt description. Internationalized and accessible components for everyone. Well tested to ensure performance and reliability.Internationalized and accessible components for everyone. Well tested to ensure performance and reliability.Internationalized and accessible components for everyone. Well tested to ensure performance and reliability.Check it out!",20,"assets/images/shirt.jpg"),
    new Product(6, "Women Shirt", "This is Women Shirt description. Internationalized and accessible components for everyone. Well tested to ensure performance and reliability.Internationalized and accessible components for everyone. Well tested to ensure performance and reliability.Internationalized and accessible components for everyone. Well tested to ensure performance and reliability.Check it out!",70,"assets/images/women-shirt.jpg"),
    new Product(7, "Product7", "This is product 7 description. Internationalized and accessible components for everyone. Well tested to ensure performance and reliability.Internationalized and accessible components for everyone. Well tested to ensure performance and reliability.Internationalized and accessible components for everyone. Well tested to ensure performance and reliability.Check it out!",150,"assets/images/sneaker.jpg"),
    new Product(7, "Sneaker", "This is Sneaker description. Internationalized and accessible components for everyone. Well tested to ensure performance and reliability.Internationalized and accessible components for everyone. Well tested to ensure performance and reliability.Internationalized and accessible components for everyone. Well tested to ensure performance and reliability.Check it out!",150,"assets/images/sneaker.jpg"),
    new Product(1, "Watch", "This is Watch description. Internationalized and accessible components for everyone. Well tested to ensure performance and reliability.Internationalized and accessible components for everyone. Well tested to ensure performance and reliability.Internationalized and accessible components for everyone. Well tested to ensure performance and reliability.Check it out!",90,"assets/images/watch.jpg"),

  ] 
  constructor() { }
    getProducts(): Product[] {
      return this.products

    }
  
}
