// sets up diner object
var Diner = function(dinerName){
	this.dinerName = dinerName;
  var meal = new Meal();
  this.getMealTotal = function(){
    return meal.calculateTotalAmount();
  }
  this.addDishToMeal = function(dish){
    meal.addDish(dish);
  }
};

// sets up meal object
var Meal = function(){
	var dishes = [];
  // adds dishes to dishes array in meal
  	this.addDish = function(dish){
  		dishes.push(dish);
  	};

// calculates cost of dishes in a meal and adds to total
	this.calculateTotalAmount = function (){
		var total = 0;

		dishes.forEach(function(dish){
			total += dish.getPricePlusTax();
		});

    return total;
	};
};

// sets up dish object
var Dish = function(dishName, dishPrice){
	var name = dishName;
	var price = dishPrice;
  var tax = 0.07;
  this.getPrice = function(){
    return price;
  }
  this.getName = function(){
    return name;
  }
  this.getPricePlusTax = function(){
    return price + (price * tax);
  }
};

var Bill = function(){
  var diners = [];
  var tip = 0.15;
  this.addDiner = function(diner){
    diners.push(diner);
  }
  this.calculateTotalAmount = function(){
    var total = 0;
    diners.forEach(function(diner){
      total += diner.getMealTotal();
    });
	  return total;
  }
  this.calculateTotalAmountPlusTip = function(){
    return this.calculateTotalAmount() + (this.calculateTotalAmount() * tip);
  }
  this.printBillTotal = function(){
    console.log(this.calculateTotalAmountPlusTip());
  }
}


// function calls
var dish1 = new Dish("French Fries", 4);
var dish2 = new Dish("Salad", 10);
var dish3 = new Dish("Pizza", 13);

var diner1 = new Diner("Ricky Bobby");
var diner2 = new Diner("John Doe");

diner1.addDishToMeal(dish1);
diner1.addDishToMeal(dish2);
diner1.addDishToMeal(dish3);

diner2.addDishToMeal(dish1);
diner2.addDishToMeal(dish2);
diner2.addDishToMeal(dish3);

var bill = new Bill();

bill.addDiner(diner1);
bill.addDiner(diner2);

bill.printBillTotal();



