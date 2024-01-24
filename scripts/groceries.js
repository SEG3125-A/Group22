	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "Sliced Bread",
		vegetarian: true,
		glutenFree: false,
		price: 3.99,
		organic: false
	},
	{
		name: "0.5kg Ground Beef",
		vegetarian: false,
		glutenFree: true,
		price: 9.35,
		organic: true
	},
	{
		name: "Lemon",
		vegetarian: true,
		glutenFree: true,
		price: 1.00,
		organic: true
	},
	{
		name: "0.5kg Chicken Thighs",
		vegetarian: false,
		glutenFree: true,
		price: 9.35,
		organic: true
	},
	{
		name: "Frozen Strawberry",
		vegetarian: true,
		glutenFree: true,
		price: 5.99,
		organic: false
	},
	{
		name: "Hummus",
		vegetarian: true,
		glutenFree: true,
		price: 3.99,
		organic: true
	},
	{
		name: "Coffee Beans",
		vegetarian: true,
		glutenFree: true,
		price: 11.99,
		organic: false
	},
	{
		name: "Vanilla Cake Mix",
		vegetarian: true,
		glutenFree: false,
		price: 9.35,
		organic: false
	},
	{
		name: "Chocolate muffins",
		vegetarian: true,
		glutenFree: false,
		price: 3.99,
		organic: false
	},
	{
		name: "Tomato",
		vegetarian: true,
		glutenFree: true,
		price: 1.35,
		organic: true
	},
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction, organic) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if (prods[i].organic == organic){
			if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)){
				product_names.push([prods[i].name, prods[i].price]);
			}
			else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)){
				product_names.push([prods[i].name, prods[i].price]);
			}
			else if (restriction == "None"){
				product_names.push([prods[i].name, prods[i].price]);
			}
		}
	}
	return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}