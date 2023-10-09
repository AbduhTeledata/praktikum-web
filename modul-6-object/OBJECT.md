# Modul 6 Objects

### What you will learn

<ul>
    <li>Creating objects.</li>
    <li>Accessing object properties.</li>
    <li>Being able to use multiple object operators.</li>
    <li>How to write an object constructor and instantiate the object.</li>
    <li>Describe what a prototype is, and how it can be used</li>
    <li>Explain prototypal inheritance</li>
</ul>

### Object
<ul>
    <li>Object are Data types,</li>
    <li>objects are used to store keyed collections of various data and more complex entities
    </li>
    <li>An object can be created with figure brackets {…} with an optional list of properties
    </li>
    <li>A property is a “key: value” pair, where key is a string (also called a “property name”), and value can be anything.</li>
    <li>JavaScript is a prototype-based language, meaning object properties and methods can be shared through generalized objects that have the ability to be cloned and extended.</li>
    <li>Every object in JavaScript has an internal property called [[Prototype]]</li>
</ul>


### How to define object / object constructor

> `let user = new Object();`

> `let user = {};  // "object literal"`

> `function Player(name, marker) {` <br>
>   `this.name = name` <br>
>   `this.marker = marker` <br>
> `}`


and which you use by calling the function with the keyword `new`.

> `const player = new Player('steve', 'X')` <br>
> `console.log(player.name)` <br>

Gentle Explanation of "this" in JavaScript `https://dmitripavlutin.com/gentle-explanation-of-this-in-javascript/` <br>

`https://www.w3schools.com/js/js_function_call.asp`

### How add data to object

> `user.id = 1;`

> `user.name = "John";`

> `user.age = 30;`


> `let user = { ` <br>
>   `id: 1,` <br>
>   `name: "John",` <br>
>   `age: 30` <br>
>`};`

### How to access data from object

> `alert(user["id"]);`

> `alert(user.name);`

> `alert( user[key] );`

### The Prototype

<ul>
    <li>All objects in JavaScript have a property of prototype</li>
    <li>Stated simply, the prototype is another object</li>
    <li>that the original object inherits from, and has access to all of its prototype’s methods and properties</li>
</ul>

### Adding and Accessing object's property of prototype

> `function Bird() {` <br>
>  `this.fly = true;` <br>
> `}` <br>
> `Bird.prototype.color = 'brown';`<br>
> `var eagle = new Bird();`<br>
> `console.log('eagle.fly: ' + eagle.fly);`<br>
> `console.log('eagle.color: ' + eagle.color);`<br>

<ul>
    <li>Prototype properties and methods are not automatically linked when you use call() to chain constructors.</li>
    <li>use Object.setPropertyOf() to link the properties</li>
    <li>Example Code `object-prototype-3`</li>
</ul>


