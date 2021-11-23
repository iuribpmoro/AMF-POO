export class Order {
  constructor(code, tableNumber, foods, foodAmount, drinks, drinkAmount){
    this.code = code;
    this.tableNumber = tableNumber;
    this.foods = foods;
    this.foodAmount = foodAmount;
    this.drinks = drinks;
    this.drinkAmount = drinkAmount;
  }

  saveOrder(){
    let storedOrders = JSON.parse(localStorage.getItem("storedOrders"));

    if(storedOrders == null){
      storedOrders = [];
    }

    storedOrders.push({code: this.code, tableNumber: this.tableNumber, foods: this.foods, foodAmount: this.foodAmount, drinks: this.drinks, drinkAmount: this.drinkAmount});
    localStorage.setItem("storedOrders", JSON.stringify(storedOrders));
  }

  getOrder(){
    return JSON.parse(localStorage.getItem("storedOrders"));
  }

  getOrderIndex(code){
    const storedOrders = JSON.parse(localStorage.getItem("storedOrders"));
    
    const orderIndex = storedOrders.findIndex(order => order.code == code);
    
    return orderIndex;
  }

  removeOrder(code){
    let storedOrders = JSON.parse(localStorage.getItem("storedOrders"));
    
    const orderIndex = storedOrders.findIndex(order => order.code == code);
    
    if (orderIndex > -1) {
      storedOrders.splice(orderIndex, 1);
      localStorage.setItem("storedOrders", JSON.stringify(storedOrders));
      alert("Order successfully removed!");
    } else {
      alert("This order was not found!");
    }
  }

}