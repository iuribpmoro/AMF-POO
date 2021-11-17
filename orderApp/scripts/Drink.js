import { Product } from './Product.js';

export class Drink extends Product {
  constructor(code, name, description, price, expiration, liters, drinkType) {
    super(code, name, description, price, expiration);
    
    this.liters = liters;
    this.drinkType = drinkType;
  }

  saveDrink(){
    let storedDrinks = JSON.parse(localStorage.getItem("storedDrinks"));

    if(storedDrinks == null){
      storedDrinks = [];
    }

    storedDrinks.push({code: this.code, name: this.name, description: this.description, price: this.price, expiration: this.expiration, liters: this.liters, drinkType: this.drinkType});
    localStorage.setItem("storedDrinks", JSON.stringify(storedDrinks));
  }

  getDrink(){
    return JSON.parse(localStorage.getItem("storedDrinks"));
  }

  removeDrink(code){
    let storedDrinks = JSON.parse(localStorage.getItem("storedDrinks"));

    const indexBebida = storedDrinks.findIndex(bebida => bebida.code == code);

    if (indexBebida > -1) {
      storedDrinks.splice(indexBebida, 1);
      localStorage.setItem("storedDrinks", JSON.stringify(storedDrinks));
      alert("Drink successfully removed!");
    } else {
      alert("This drink was not found!");
    }
  }
}