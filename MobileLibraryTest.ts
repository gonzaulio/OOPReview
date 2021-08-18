import { mobile } from "./mobile";
import { MobileLibrary } from "./MobileLibrary";

let Iphone12Pro:mobile = new mobile("Iphone 12 Pro", "12 Pro", "Apple", 256, "Blue", true, 3, 1200);
let SamsungFlip10:mobile = new mobile("Samsung Flip 10", "Flip 10", "Samsung", 64, "Negro", true, 2, 1500);
let HuaweiMateview:mobile = new mobile("Huawei Mateview", "Mateview", "Huawei", 120, "Blanco", true, 2, 900);
let XiaomiRedmi10:mobile = new mobile("Xiaomi Redmi 10", "Redmi 10", "Xiaomi", 128, "Blanco", true, 3, 700);

let arraydemoviles:mobile[] = []
arraydemoviles.push(Iphone12Pro);
arraydemoviles.push(SamsungFlip10);
arraydemoviles.push(HuaweiMateview);
arraydemoviles.push(XiaomiRedmi10);

let LibraryofMobiles:MobileLibrary = new MobileLibrary("Primera Libreria", "Local", arraydemoviles)

console.log(LibraryofMobiles.totalPriceCalculation());
console.log(Iphone12Pro.getPrice())
console.log(LibraryofMobiles.getLocation());
