# Modul 5 Function

### What you will learn

<ul>
    <li>How to define and invoke different kinds of functions.</li>
    <li>How to use the return value.</li>
    <li>What function scope is.</li>
</ul>

### Function Declaration

>`function showMessage() {` <br>
>  `alert( 'Hello everyone!' );` <br>
>`}`

### Function parameter

>`function name(parameter1, parameter2, ... parameterN) {` <br>
> `// body` <br>
>`}`

### How to invoke function

>`function showMessage() {` <br>
>  `alert( 'Hello everyone!' );` <br>
>`}` <br>
> <br>
>`showMessage(); // call function` <br>
>`showMessage();` <br>

### Block Scope

#### Local variables

A variable declared inside a function is only visible inside that function.

>`function showMessage() {` <br>
>  `let message = "Hello, I'm JavaScript!"; // local variable` <br>
> <br>
>  `alert( message );` <br>
> `}` <br>
> <br>
>`showMessage(); // Hello, I'm JavaScript!` <br>
> <br>
>`alert( message ); // <-- Error! The variable is local to the function`

#### Outer variables

A function can access an outer variable as well

>`let userName = 'John';` <br>
> <br>
>`function showMessage() {` <br>
>  `userName = "Bob"; // (1) changed the outer variable`
> <br>
>  `let message = 'Hello, ' + userName;` <br>
>  `alert(message);` <br>
> `}` <br>
> <br>
> `alert( userName ); // John before the function call`
> <br>
>`showMessage();`<br>
><br>
>`alert( userName ); // Bob, the value was modified by the function`

#### Global variables

<ul>
  <li>Variables declared outside of any function, such as the outer userName in the code above, are called global.</li>
  <li>Global variables are visible from any function (unless shadowed by locals).</li>
  <li>It’s a good practice to minimize the use of global variables. Modern code has few or no globals. Most variables reside in their functions. Sometimes though, they can be useful to store project-level data.</li>
</ul>

### Parameter

We can pass arbitrary data to functions using parameters

>`function showMessage(from, text) {` <br>
> <br>
>  `from = '*' + from + '*'; // make "from" look nicer` <br>
> <br>
>  `alert( from + ': ' + text );` <br>
>`}` <br>
><br>
>`let from = "Ann";` <br>
><br>
>`showMessage(from, "Hello"); // *Ann*: Hello` <br>
><br>
>`// the value of "from" is the same, the function modified a local copy` <br>
>`alert( from ); // Ann`

### Default value in parameter

We can add default value to parameter

>`function showMessage(from, text = "no text given") {` <br>
>  `alert( from + ": " + text );` <br>
>`}` <br>
><br>
>`showMessage("Ann"); // Ann: no text given`

### Returning value

>`function sum(a, b) {` <br>
>  `return a + b;` <br>
>`}` <br>
><br>
>`let result = sum(1, 2);` <br>
>`alert( result ); // 3`

## Anonymous function

<ul>
  <li>function that doesn't have a name</li>
  <li>often see anonymous functions when a function expects to receive another function as a parameter. In this case the function parameter is often passed as an anonymous function.</li>
</ul>

### Anonymous function example

let's say you want to run some code when the user types into a text box. To do this you can call the addEventListener() function of the text box. This function expects you to pass it (at least) two parameters:

the name of the event to listen for, which in this case is keydown
a function to run when the event happens.
When the user presses a key, the browser will call the function you provided, and will pass it a parameter containing information about this event, including the particular key that the user pressed:

>`function logKey(event) {` <br>
>  `console.log(`You pressed "${event.key}".`);` <br>
>`}` <br>
><br>
>`textBox.addEventListener("keydown", logKey);`

Instead of defining a separate logKey() function, you can pass an anonymous function into addEventListener()

>`textBox.addEventListener("keydown", function (event) {` <br>
>  `console.log(`You pressed "${event.key}".`);` <br>
>`});`

## Arrow function

There’s another very simple and concise syntax for creating functions, that’s often better than Function Expressions.

>`let func = (arg1, arg2, ..., argN) => expression;`

>`let func = function(arg1, arg2, ..., argN) {` <br>
>  `return expression;` <br>
>`};`


>`let sum = (a, b) => a + b;` <br>
> <br>
>`/* This arrow function is a shorter form of:` <br>
><br>
>`let sum = function(a, b) {` <br>
>  `return a + b;` <br>
>`};` <br>
>`*/` <br>
><br>
>`alert( sum(1, 2) ); // 3` <br>

