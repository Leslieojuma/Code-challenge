function calculateChaiIngredients(cups) {
    console.log("To make" + cups + " cup(s) of chai, you will need:");
    console.log((cups * 100) + " ml of water");
    console.log((cups * 50) + " ml of milk");
    console.log((cups * 1) + " teaspoon of tea leaves");
    console.log((cups * 1) + " teaspoons of sugar");
}

let input = prompt("Karibu! How many cups of Chai Bora would you like to make?");
let cups = parseInt(input);
if (cups > 0) {
    calculateChaiIngredients(cups);
}
else {
    console.log("Please enter a valid number of cups.");
}
console.logcalculateChaiIngredients(5);
