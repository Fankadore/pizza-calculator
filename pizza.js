"use strict";

const inputSize1 = document.querySelector('#input-size1');
const inputSize2 = document.querySelector('#input-size2');
const inputQuantity1 = document.querySelector('#input-quantity1');
const inputQuantity2 = document.querySelector('#input-quantity2');
const inputCost1 = document.querySelector('#input-cost1');
const inputCost2 = document.querySelector('#input-cost2');
const textboxOutput = document.querySelector('#textbox-output');
const buttonCalc = document.querySelector('#button-calc');
buttonCalc.addEventListener('click', calculatePizza);

function calculatePizza() {
  const size1 = inputSize1.value || 18;
  const size2 = inputSize2.value || 9;
  const quantity1 = inputQuantity1.value || 1;
  const quantity2 = inputQuantity2.value || 2;
  const cost1 = inputCost1.value || 15.00;
  const cost2 = inputCost2.value || 5.00;

  const area1 = Math.PI * ((size1 / 2) ** 2);
  const area2 = Math.PI * ((size2 / 2) ** 2);

  const areaTotal1 = area1 * quantity1;
	const areaTotal2 = area2 * quantity2;
	
	const ratio1 = (area1 / area2) * quantity1;
	const ratio2 = (area2 / area1) * quantity2;

  const costPerSquareInch1 = cost1 / area1;
  const costPerSquareInch2 = cost2 / area2;

  textboxOutput.innerHTML = `${quantity1} x ${size1}" pizza = ${+areaTotal1.toFixed(2)}in² or ${+ratio1.toFixed(2)} x ${size2}" pizzas at £${+costPerSquareInch1.toFixed(2)} per square inch<br>`;
  textboxOutput.innerHTML += `${quantity2} x ${size2}" pizza = ${+areaTotal2.toFixed(2)}in² or ${+ratio2.toFixed(2)} x ${size1}" pizzas at £${+costPerSquareInch2.toFixed(2)} per square inch`;
}

calculatePizza();