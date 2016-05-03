// sets up diner object
var Diner = function(dinerName){
	this.dinerName = dinerName;
};

// sets up meal object
var Meal = function(name){
	this.name = name;
	this.dishes = [];
	this.totalAmount = 0;
  // adds dishes to dishes array in meal
  	this.addDishToMeal = function(dish){
  		this.dishes.push(dish);
  	};

// calculates cost of dishes in a meal and adds to total
	this.calculateTotalAmount = function (){
		var total = 0;

		this.dishes.forEach(function(item){
			total += item.price;
		});

		this.totalAmount = total;
	};
};

// sets up dish object
var Dish = function(dishName, price){
	this.dishName = dishName;
	this.price = price;
};




// function calls
var dish1 = new Dish("French Fries", 4);
var dish2 = new Dish("Salad", 10);
var dish3 = new Dish("Pizza", 13);

var diner1 = new Diner("Ricky Bobby");
var diner2 = new Diner("John Doe");

var meal1 = new Meal(diner1);
var meal2 = new Meal(diner2);
console.log(meal1);
console.log(meal2);

meal1.addDishToMeal(dish1);
meal1.addDishToMeal(dish2);
meal1.addDishToMeal(dish3);

meal2.addDishtoMeal(dish1);
meal2.addDishtoMeal(dish2);
meal2.addDishtoMeal(dish3);

var totalCost1 = meal1.calculateTotalAmount();
var totalCost2 = meal2.calculateTotalAmount();

console.log(meal1.totalAmount);
console.log(meal2.totalAmount);


// Split the bill fairly among the diners

// Each diner should pay the tax on their own food

// Each diner should pay an equal share of the tip

// Print out a total bill

// Print a breakdown for what each diner owes