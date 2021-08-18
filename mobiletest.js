"use strict";
exports.__esModule = true;
var mobile_1 = require("./mobile");
var Nokia3210 = new mobile_1.mobile("Nokia 3210", "3210", "Nokia", 60, "Azul", false, 2, 500);
var iPhone3G = new mobile_1.mobile("Iphone 3G", "3G", "Apple", 64, "blanco", false, 1, 800);
var SamsungGalaxy10 = new mobile_1.mobile("Samsung Galaxy 10", "Galaxy 10", "Samsung", 60, "verde", false, 2, 600);
console.log(Nokia3210);
// console.log(iPhone3G);
// console.log(SamsungGalaxy10);
Nokia3210.is5G = true;
Nokia3210.cameraNumber = 4;
console.log(Nokia3210);
