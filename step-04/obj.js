"use strict";


function obj () {

    // the keyword new does 3 things_
    // 1. creates a new (implicit) object -> this
    // 2. bounds this __proto__ to obj.prototype

    this.a = 0;

    // 3. returns the just created object
}

obj.prototype.increment = function () {

    this.a ++;
};

module.exports = obj;