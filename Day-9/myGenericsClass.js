function anotherfunction(valOne, val2) {
    return {
        valOne: valOne,
        val2: val2,
    };
}
function anotherfunction1(valOne, val2, val3) {
    return {
        valOne: valOne,
        val2: val2,
        val3: val3,
    };
}
anotherfunction(2, 4);
anotherfunction1("1", "2", { connection: "1", username: "2", password: "3" });
var Sellable = /** @class */ (function () {
    function Sellable() {
        this.cart = [];
    }
    Sellable.prototype.addToCart = function (product) {
        this.cart.push(product);
    };
    return Sellable;
}());
