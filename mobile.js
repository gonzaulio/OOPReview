"use strict";
exports.__esModule = true;
exports.mobile = void 0;
var mobile = /** @class */ (function () {
    function mobile(name, model, trademark, sdSize, color, is5G, cameranumber, price) {
        this.name = name;
        this.model = model;
        this.trademark = trademark;
        this.sdSize = sdSize;
        this.color = color;
        this.is5G = is5G;
        this.cameraNumber = cameranumber;
        this.price = price;
    }
    mobile.prototype.getName = function () { return this.name; };
    mobile.prototype.setName = function (name) { this.name = name; };
    mobile.prototype.getModel = function () { return this.model; };
    mobile.prototype.setModel = function (model) { this.model = model; };
    mobile.prototype.getTrademark = function () { return this.trademark; };
    mobile.prototype.setTrademark = function (trademark) { this.trademark = trademark; };
    mobile.prototype.getSDSize = function () { return this.sdSize; };
    mobile.prototype.setSDSize = function (SDSize) { this.sdSize = SDSize; };
    mobile.prototype.getColor = function () { return this.color; };
    mobile.prototype.setColor = function (color) { this.color = color; };
    mobile.prototype.getIs5g = function () { return this.is5G; };
    mobile.prototype.setIs5G = function (is5g) { this.is5G = is5g; };
    mobile.prototype.getCameraNumber = function () { return this.cameraNumber; };
    mobile.prototype.setCameraNumber = function (cameranumber) { this.cameraNumber = cameranumber; };
    mobile.prototype.getPrice = function () { return this.price; };
    mobile.prototype.setPrice = function (price) { this.price = price; };
    mobile.prototype.printAll = function () {
        console.log("The characteristics of the mobile " + this.name + " are:\n        Name : " + this.name + "\n        Model: " + this.model + "\n        Trademark : " + this.trademark + "\n        SD Size (GB) : " + this.sdSize + "\n        Color: " + this.color + "\n        Is 5G?: " + this.is5G + "\n        Number of Cameras: " + this.cameraNumber);
    };
    return mobile;
}());
exports.mobile = mobile;
