"use strict";


module.exports = function () {

    var obj = Object.create({
        increment: function () {
            this.a ++;
        }
    });

    obj.a = 0;

    return obj;

};