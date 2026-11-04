
"use strict";

// Get the meal cost and tip percentage from the user
const mealCost = parseFloat(prompt("Enter the meal cost:"));
const tipPercent = parseFloat(prompt("Enter the tip percentage:"));

// Calculate the tip amount and total cost
const tipAmount = mealCost * tipPercent / 100;
const totalCost = mealCost + tipAmount;

// Display the results on the webpage
document.getElementById("mealCost").textContent =
    "Meal Cost: $" + mealCost.toFixed(2);

document.getElementById("tipPercent").textContent =
    "Tip Percent: " + tipPercent + "%";

document.getElementById("tipAmount").textContent =
    "Tip Amount: $" + tipAmount.toFixed(2);

document.getElementById("totalCost").textContent =
    "Total Cost: $" + totalCost.toFixed(2);
