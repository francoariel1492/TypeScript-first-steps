"use strict";
const score = [];
const names = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
function identityThree(val) {
    return val;
}
// identityThree(true)
//this one is shortcut way to write the code
// previously writed,
function identityFour(val) {
    return val;
}
// identityFour<Bootle>({})
function getSearchProducts(products) {
    //dom some database operations
    const myIndex = 3;
    return products[myIndex];
}
//The T is the indicator that you will start with a generic
const getMoreSearchProducts = (products) => {
    //do some database operations
    const myIndex = 4;
    return products[myIndex];
};
function anotherFunction(valOne, valTwo) {
    return {
        valOne,
        valTwo
    };
}
class Selleable {
    constructor() {
        this.cart = [];
    }
    addToCart(product) {
        this.cart.push(product);
    }
}
