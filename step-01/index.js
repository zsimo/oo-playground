"use strict";


var Obj = require("./obj");

var obj1 = Obj();
var obj2 = Obj();
obj1.increment();
console.log(obj1);
console.log(obj2);