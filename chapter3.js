console.log("Chapter 3");
console.log("Practice Exercise 3.1");
var shopping_list = ["milk", "bread", "apples"];
console.log("The length of list is : ", shopping_list.length);
shopping_list[1] = "Bananas";
console.log(shopping_list);
console.log("Practice Exercise 3.2");
var shopping_list2 = ["milk", "bread", "apples"];
shopping_list2.splice(1, 1, "bananas", "eggs");
console.log(shopping_list2);
shopping_list2.pop();
console.log(shopping_list2);
shopping_list2.sort();
console.log(shopping_list2);
console.log("Index of milk:", shopping_list2.indexOf("milk"));
shopping_list2.splice(shopping_list2.indexOf("bananas"), 0, "carrots", "lettuce");
console.log(shopping_list2);
var new_list = ["juice", "pop"];
shopping_list2 = shopping_list2.concat(new_list);
console.log(shopping_list2);
console.log("Index of milk:", shopping_list2.indexOf("pop"));
console.log("Final List : ", shopping_list2);
console.log("Practice Exercise 3.3");
let array = [1, 2, 3];
let array_Of_array = [array, array, array];
console.log(array_Of_array);
console.log("Value 2 from a nested array:", array_Of_array[0][1], array_Of_array[1][1], array_Of_array[2][1]);
console.log("Practice Exercise 3.4");
var myCar = {
    make: "Toyota",
    model: "Camry",
    year: 2022,
    color: "Red",
    Is_Automatic: true,
    mileage: 15000,
    owner: "Hafsa Imtiaz",
    features: ["Bluetooth", "Backup Camera", "Sunroof"],
    for_sale: "no"
};
var property_name = "color";
myCar[property_name] = "Purple"
console.log("The color of car is update to : ", myCar.color);
property_name = "for_sale";
myCar[property_name] = "yes"
console.log("Make and model of car : ", myCar.make, " ", myCar.model);
console.log("Is car for sale : ", myCar.for_sale);
console.log("Practice Exercise 3.5");
var people = {
    friends: []
};
var friend1 = {
    firstName: "hafsa",
    lastName: "imtiaz",
    id: 1
};

var friend2 = {
    firstName: "sheeza",
    lastName: "aslam",
    id: 2
};

var friend3 = {
    firstName: "asifa",
    lastName: "siraj",
    id: 3
};
people.friends.push(friend1);
people.friends.push(friend2);
people.friends.push(friend3);
console.log(people);
console.log("Chapter Project");
console.log("Manupilating an array");
const theList = ['Laurence', 'Svekis', true, 35, null, undefined,
    { test: 'one', score: 55 }, ['one', 'two']];
theList.shift();
theList.pop();
theList.unshift("FIRST");
theList.splice(2, 0, "MIDDLE");
theList.splice(3, 5, "hello world");
theList.push("LAST");
console.log(theList);
console.log("Company Product Catlog");
const productCatalog = [];
const item1 = {
    name: "Smartphone",
    model: "iPhone 13",
    cost: 999.99,
    quantity: 50
};
const item2 = {
    name: "Laptop",
    model: "MacBook Air",
    cost: 1299.99,
    quantity: 30
};
const item3 = {
    name: "Headphones",
    model: "Bose QuietComfort 35",
    cost: 299.99,
    quantity: 75
};
productCatalog.push(item1, item2, item3);
console.log("Quantity of the third item:", productCatalog[2].quantity);
const item4 = {
    name: "Tablet",
    model: "iPad Pro",
    cost: 799.99,
    quantity: 20
};
productCatalog.push(item4);
console.log("Inventory array after adding item4:", productCatalog);
console.log("Name:", productCatalog[0].name);
console.log("Model:", productCatalog[0].model);
console.log("Cost:", productCatalog[0].cost);
console.log("Quantity:", productCatalog[0].quantity);








