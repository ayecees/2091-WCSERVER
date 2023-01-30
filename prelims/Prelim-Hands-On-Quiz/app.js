//Allen Carlo S. Serrano
//WD - 201

var { add, subtract, multiply, divide } = require('./calculation.js');

var RPH = 300;
var HRS = 4;
var days = 6;
var pagibig = 300;
var philhealth = 400;

var HRSdays = multiply(HRS, days);
var GIncome = multiply(RPH, HRSdays);
var SSS = multiply(RPH, HRS);
var Tax = divide(GIncome, 10);
var deduction1 = add(Tax, SSS);
var deduction2 = add(pagibig, philhealth);
var Tdeduction = add(deduction1, deduction2);
var nsalary = subtract(GIncome, Tdeduction);

console.log('The gross income is ' + GIncome);
console.log('Tax: ' + Tax);
console.log('SSS: ' + SSS);
console.log('Pag-Ibig fund: ' + pagibig);
console.log('PhiilHealth: ' + philhealth);
console.log('Total deductions: ' + Tdeduction);
console.log('The net salary is: ' + nsalary);
