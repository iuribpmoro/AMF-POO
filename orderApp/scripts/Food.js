import { Product } from './Product.js';

export class Food extends Product {
  constructor(code, name, description, price, expiration, weight, foodType){
    super(code, name, description, price, expiration);

    this.weight = weight;
    this.foodType = foodType;
  }

  saveFood(){
    let storedFoods = JSON.parse(localStorage.getItem("storedFoods"));
    
    if(storedFoods == null){
      storedFoods = [];
    }
    
    storedFoods.push({code: this.code, name: this.name, description: this.description, price: this.price, expiration: this.expiration, weight: this.weight, foodType: this.foodType});
    
    localStorage.setItem("storedFoods", JSON.stringify(storedFoods));
  }

  getFood(){
    return JSON.parse(localStorage.getItem("storedFoods"));
  }

  removeFood(code){
    let storedFoods = JSON.parse(localStorage.getItem("storedFoods"));
    
    const foodIndex = storedFoods.findIndex(food => food.code == code);
    
    if (foodIndex > -1) {
      storedFoods.splice(foodIndex, 1);
      localStorage.setItem("storedFoods", JSON.stringify(storedFoods));
      alert("Food successfully removed!");
    } else {
      alert("This food was not found!");
    }
  }

}
