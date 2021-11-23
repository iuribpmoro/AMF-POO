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

  getDrinkIndex(code){
    let storedDrinks = JSON.parse(localStorage.getItem("storedDrinks"));

    const drinkIndex = storedDrinks.findIndex(drink => drink.code == code);
    
    return drinkIndex;
  }

  removeDrink(code){
    let storedDrinks = JSON.parse(localStorage.getItem("storedDrinks"));

    const drinkIndex = storedDrinks.findIndex(drink => drink.code == code);

    if (drinkIndex > -1) {
      storedDrinks.splice(drinkIndex, 1);
      localStorage.setItem("storedDrinks", JSON.stringify(storedDrinks));
      alert("Drink successfully removed!");
    } else {
      alert("This drink was not found!");
    }
  }
}