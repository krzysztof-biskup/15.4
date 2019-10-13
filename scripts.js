function Phone(brand, price, color, camera){
    this.brand = brand;
    this.price = price;
    this.color = color;
    this.camera = camera;
};

Phone.prototype.printInfo = function() {
    console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + ".");
}

Phone.prototype.cameraInfo = function() {
    console.log("The phone camera is " + this.camera + ".");
};

var SamsungGalaxyS6 = new Phone('Samsung', 2500, 'blue', '7 mpx');
var iPhone6S = new Phone('Apple', 3000, 'space gray', '10 mpx');
var OnePlusOne = new Phone ('One', 1500, 'silver', '20 mpx');

OnePlusOne.printInfo();
iPhone6S.cameraInfo();

