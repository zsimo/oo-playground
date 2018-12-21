#### step-04 separated instances with common prototype using the new keyword
```js
// obj.js file

function obj () {

    // the keyword new does 3 things:
    // 1. creates a new (implicit) object -> this
    // 2. bounds this __proto__ to obj.prototype

    this.a = 0;

    // 3. returns the just created object
}

obj.prototype.increment = function () {
    
    this.a ++;
};

module.exports = obj;

```
```js
// index.js file

var Obj = require("./obj");

var obj1 = new Obj();
var obj2 = new Obj();
obj1.increment();
console.log(obj1);
console.log(obj2);
```