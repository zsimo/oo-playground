#### step-03 separated instances with common prototype
```js
// obj.js file

module.exports = function () {

    var obj = Object.create({
        increment: function () {
            this.a ++;
        }
    });

    obj.a = 0;

    return obj;

};
```
```js
// index.js file

var obj1 = require("./obj")();
var obj2 = require("./obj")();

obj1.increment();

console.log(obj1); // count -> 1
console.log(obj2); // count -> 0
```