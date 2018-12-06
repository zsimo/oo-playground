"use strict";

// shared obj


module.exports = function () {
    var obj = {
        a: 0,
        increment: function () {
            this.a ++;
        }
    };
    return obj;
};