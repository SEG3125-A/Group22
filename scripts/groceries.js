	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "Sliced Bread",
		vegetarian: true,
		glutenFree: false,
		price: 3.99,
		organic: false,
		image: 'images/sliced-bread.webp',
		category: 'Baked Goods'
	},
	{
		name: "0.5kg Ground Beef",
		vegetarian: false,
		glutenFree: true,
		price: 9.35,
		organic: true,
		image: 'images/ground-beef.jpg',
		category: 'Meat'
	},
	{
		name: "Lemon",
		vegetarian: true,
		glutenFree: true,
		price: 1.00,
		organic: true,
		image: 'images/lemon.png',
		category: 'Produce'
	},
	{
		name: "0.5kg Chicken Thighs",
		vegetarian: false,
		glutenFree: true,
		price: 9.35,
		organic: true,
		image: 'images/chicken-thighs.png',
		category: "Meat"
	},
	{
		name: "Frozen Strawberry",
		vegetarian: true,
		glutenFree: true,
		price: 5.99,
		organic: false,
		image: 'images/strawberries.webp',
		category: "Produce"
	},
	{
		name: "Hummus",
		vegetarian: true,
		glutenFree: true,
		price: 3.99,
		organic: true,
		image: 'images/hummus.webp',
		category: "Other"
	},
	{
		name: "Coffee Beans",
		vegetarian: true,
		glutenFree: true,
		price: 11.99,
		organic: false,
		image: 'images/coffee.webp',
		category: "Other"
	},
	{
		name: "Vanilla Cake Mix",
		vegetarian: true,
		glutenFree: false,
		price: 9.35,
		organic: false,
		image: 'images/cake.webp',
		category: "Baked Goods"
	},
	{
		name: "Chocolate muffins",
		vegetarian: true,
		glutenFree: false,
		price: 3.99,
		organic: false,
		image: 'images/muffins.png',
		category: "Baked Goods"
	},
	{
		name: "Tomato",
		vegetarian: true,
		glutenFree: true,
		price: 1.35,
		organic: true,
		image: 'images/tomato.jpg',
		category: 'Produce'
	},
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction, organic, categories) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		
		if ((prods[i].category==="Produce" && categories[0]) || (prods[i].category==="Baked Goods" && categories[1]) || (prods[i].category==="Meat" && categories[2]) ||(prods[i].category==="Other" && categories[3])){			
			if (prods[i].organic == organic || organic == false){
				if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)){
					product_names.push([prods[i].name, prods[i].price, prods[i].image, prods[i].category]);
				}
				else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)){
					product_names.push([prods[i].name, prods[i].price, prods[i].image, prods[i].category]);
				}
				else if (restriction == "None"){
					product_names.push([prods[i].name, prods[i].price, prods[i].image, prods[i].category]);
				}
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