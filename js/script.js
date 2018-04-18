function prepareFood(tableNum, items, callAfterFoodPrepared) {
	
	//write logic for Food Preparation
	
	
	console.log('preparing food for items - ', items);
	
	//using callback function call the function to be called after Food Preparation
	callAfterFoodPrepared(tableNum, items);
}

function serveFood(tableNum, items) {
	//write logic for serve Food
	console.log('serving food for items - ', items);

}

var tableNum = 100;
var items = ["Burger", "pasta", "coke"];
prepareFood(tableNum, items, serveFood);
