import { mobile } from "./mobile";

let Nokia3210:mobile = new mobile("Nokia 3210", "3210", "Nokia", 60, "Azul", false, 2, 500);
let iPhone3G:mobile = new mobile("Iphone 3G", "3G", "Apple", 64, "blanco", false, 1, 800);
let SamsungGalaxy10:mobile = new mobile("Samsung Galaxy 10", "Galaxy 10", "Samsung", 60, "verde", false, 2, 600);

console.log(Nokia3210);
console.log(iPhone3G);
console.log(SamsungGalaxy10);

Nokia3210.is5G = true;
Nokia3210.cameraNumber = 4;
console.log(Nokia3210);
console.log(iPhone3G);
console.log(SamsungGalaxy10);




