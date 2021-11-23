import { Food } from './Food.js';
import { Drink } from './Drink.js';
import { Order } from './Order.js';

/* --------------------------------- Button --------------------------------- */

let addFoodButton = document.getElementById('addFoodButton');
let addDrinkButton = document.getElementById('addDrinkButton');
let addOrderButton = document.getElementById('addOrderButton');
let listDrinksButton = document.getElementById('listDrinksButton');
let listFoodsButton = document.getElementById('listFoodsButton');
let listOrdersButton = document.getElementById('listOrdersButton');
let removeFoodButton = document.getElementById('removeFoodButton');
let removeDrinkButton = document.getElementById('removeDrinkButton');
let removeOrderButton = document.getElementById('removeOrderButton');

/* ---------------------------------- Divs ---------------------------------- */

let drinkDiv = document.getElementById('drinkListDiv');
let orderDiv = document.getElementById('orderListDiv');
let foodDiv = document.getElementById('foodListDiv');


/* ------------------------------ Button Events ----------------------------- */

addFoodButton.addEventListener("click", function () {
  addFood();
});
addDrinkButton.addEventListener("click", function () {
  addDrink();
});
addOrderButton.addEventListener("click", function () {
  addOrder();
});
listDrinksButton.addEventListener("click", function (){
  listDrinks();
});
listFoodsButton.addEventListener("click", function (){
  listFoods();
});
listOrdersButton.addEventListener("click", function (){
  listOrders();
});
removeFoodButton.addEventListener("click", function (){
  removeFood();
});
removeDrinkButton.addEventListener("click", function (){
  removeDrink();
});
removeOrderButton.addEventListener("click", function (){
  removeOrder();
});

/* ---------------------------------- Food ---------------------------------- */

function addFood(){
  const foodCode = document.getElementById('foodCode').value;
  const foodName = document.getElementById('foodName').value;
  const foodDescription = document.getElementById('foodDescription').value;
  const foodPrice = document.getElementById('foodPrice').value;
  const foodExpiration = document.getElementById('foodExpiration').value;
  const foodWeight = document.getElementById('foodWeight').value;
  const foodType = document.getElementById('foodType').value;

  const food = new Food(foodCode, foodName, foodDescription, foodPrice, foodExpiration, foodWeight, foodType);
  food.saveFood();
}

function listFoods(){
  const header = ['Código', 'Nome', 'Descrição', 'Valor', 'Validade', 'Peso', 'Tipo'];
  const food = new Food();
  createList(header,food.getFood(), foodDiv);
}

function removeFood(){
  const code = document.getElementById('foodToRemove').value;
  
  const food = new Food();
  
  food.removeFood(code);
}

/* ---------------------------------- Drink --------------------------------- */

function addDrink(){
  const drinkCode = document.getElementById('drinkCode').value;
  const drinkName = document.getElementById('drinkName').value;
  const drinkDescription = document.getElementById('drinkDescription').value;
  const drinkPrice = document.getElementById('drinkPrice').value;
  const drinkExpiration = document.getElementById('drinkExpiration').value;
  const drinkLiters = document.getElementById('drinkLiters').value;
  const drinkType = document.getElementById('drinkType').value;

  const drink = new Drink(drinkCode, drinkName, drinkDescription, drinkPrice, drinkExpiration, drinkLiters, drinkType);
  drink.saveDrink();
}

function listDrinks(){
  const header = ['Código', 'Nome', 'Descrição', 'Valor', 'Validade', 'Litros', 'Tipo'];
  const drink = new Drink(); 
  createList(header, drink.getDrink(), drinkDiv);
}

function removeDrink(){
  const code = document.getElementById('drinkToRemove').value;
  const drink = new Drink(); 
  drink.removeDrink(code);
}

/* --------------------------------- Orders --------------------------------- */

function addOrder(){
  const orderNumber = document.getElementById('orderNumber').value;
  const orderTableNumber = document.getElementById('orderTableNumber').value;
  const orderFoods = document.getElementById('orderFoods').value;
  const orderFoodAmount = document.getElementById('orderFoodAmount').value;
  const orderDrinks = document.getElementById('orderDrinks').value;
  const orderDrinkAmount = document.getElementById('orderDrinkAmount').value;

  const order = new Order(orderNumber, orderTableNumber, orderFoods, orderFoodAmount, orderDrinks, orderDrinkAmount);
  order.saveOrder();
}

function listOrders(){
  const header = ['Número', 'Mesa', 'Comida', 'Quantidade', 'Bebida', 'Quantidade', 'Total'];
  
  const order = new Order();
  const drink = new Drink();
  const food = new Food();
  
  const storedOrders = order.getOrder()
  
  for(let storedOrder of storedOrders){
    let total = 0;

    const drinkIndex = drink.getDrinkIndex(storedOrder.drinks);

    if(drinkIndex >= 0){
      const storedDrinks = drink.getDrink();

      storedOrder.drinks = storedDrinks[drinkIndex].name;

      total += storedOrder.drinkAmount * storedDrinks[drinkIndex].price;
    }

    const foodIndex = food.getFoodIndex(storedOrder.foods);
    
    if(foodIndex >= 0){
      const storedFoods = food.getFood(); 
      
      storedOrder.foods = storedFoods[foodIndex].name;
      
      total += storedOrder.foodAmount * storedFoods[foodIndex].price;
    }
    Object.assign(storedOrder, { totalPrice: total });
  }
  
  createList(header, storedOrders, orderDiv);
}

function removeOrder(){
  const code = document.getElementById('orderToRemove').value;
  const order = new Order();
  order.removeOrder(code);
}

/* ------------------------------- Components ------------------------------- */

function createList(header, data, elem){
  let html = "<table>";
  html += '<tr>';
  for(let i of header){
    html += `<th>${i}</th>`;
  }
  html += '</tr>';
  for(let i of data){
    html += '<tr>';
    for(let j of Object.values(i))
      html += `<td>${j}</td>`;
    html += '</tr>';
  }
  html += '</table>';
  elem.innerHTML = html;
}


