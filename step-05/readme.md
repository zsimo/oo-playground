#### step-05 separated instances with common prototype using class
```js
// obj.js file

class obj {

    constructor () {
        this.a = 0;
    }

    increment () {
        this.a ++;
    }
}

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