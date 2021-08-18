"use strict";
exports.__esModule = true;
exports.MobileLibrary = void 0;
var MobileLibrary = /** @class */ (function () {
    function MobileLibrary(name, location, mobiles) {
        this.name = name;
        this.location = location;
        this.mobiles = mobiles;
        this.totalprice = this.totalPriceCalculation();
    }
    MobileLibrary.prototype.getName = function () { return this.name; };
    MobileLibrary.prototype.setName = function (name) { this.name = name; };
    MobileLibrary.prototype.getLocation = function () { return this.location; };
    MobileLibrary.prototype.setLocation = function (location) { this.location = location; };
    MobileLibrary.prototype.getMobiles = function () { return this.mobiles; };
    MobileLibrary.prototype.setMobiles = function (mobiles) { this.mobiles = mobiles; };
    MobileLibrary.prototype.getTotalPrice = function () { return this.totalprice; };
    MobileLibrary.prototype.setTotalPrice = function (totalprice) { this.totalprice = totalprice; };
    MobileLibrary.prototype.totalPriceCalculation = function () {
        var sumatoria = 0;
        for (var index = 0; index < this.mobiles.length; index++) {
            sumatoria += this.mobiles[index].getPrice();
        }
        return sumatoria;
    };
    MobileLibrary.prototype.printLibrary = function () {
        console.log("This is all my mobiles:");
        for (var index = 0; index < this.mobiles.length; index++) {
            this.mobiles[index].printAll();
        }
    };
    return MobileLibrary;
}());
exports.MobileLibrary = MobileLibrary;
