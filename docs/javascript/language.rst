 =======
Language
========

.. role:: js(code)
   :language: javascript


* Most popular programming language
* Client side
* Server side with NodeJs

* Interpreted language



-----
Setup
-----

For mac download and install NodeJs_

.. _NodeJs: https://nodejs.org/en/download/



-------
Syntax
-------






Comments
========






Keywords
========

abstract else instanceof switch boolean enum int synchronized break export interface this byte extends long throw
case false native throws catch final new transient char finally null true class float package try cosnt for private typeof
continue function protected var debugger goto public void default if return volitile delete implemets short while do import
static with double in super




---------------------------
Types, Values and Variables
---------------------------

We can choose to define variables with **var**, **let**, and **const**. However, JavaScript is *untyped* so a variable can
hold any data type and you dont need to declare the type during declaration. If variables are not defined it defaults
to **var**.


:var: From the original spec
:let: Limits the scope to where it was defined
:const: Same as **let** but you can't reassign the value


LValues & RValues
=================


Literal Values
==============



.. table:: Literal Types and Constructors
   :align: left
   :widths: 5, 5, 10

   =========== =========== =============================
    Value      Type         Constructor
   =========== =========== =============================
    1           number      Number()
    1.23        number      Number()
    123n        bigint      BigInt()
    hello       string      String()
    []          object      Array()j
    {}          object      Object()
    true        boolean     Boolean()
    f f() {}    function    Function()
    null        null
    undefined   undefined
   =========== =========== =============================


Literal numeric and string values combined

.. code:: javascript

  "hello" + "one" + "two" + 1 +  7      //--> helloonetwo17
  "hello" + "one" + "two" + (1 +  7)    //--> helloonetwo8
  Number(1) + String("hello")           //--> 1hello



We can use the **typeof** function to return the type of value

.. code:: javascript

  f = function(x){return x + 1}

  typeof('hello')        //--> string
  typeof('1')            //--> number
  typeof(1)              //--> number
  typeof([])             //--> object
  typeof({})             //--> object
  typeof(f)              //--> function
  typeof f               //--> function



Constructors
------------

Constructors build and return objects of the given type

.. code:: javascript

  let str = new String('hello')

  typeof str                        // object
  typeof str.valueOf()              // string


.. code:: javascript

  let nm = new Number(1000)

  typeof nm                   // object
  typeof nm.valueOf()         // number


Custom constructor example

.. code:: javascript

  let Person = function() {
    this.steps = 0;
    this.walk = function(){
      this.steps++;
    };
  }

  let john = new Person()
  john.walk()
  john.walk()

  john.steps                  // 2














Pass by Reference
-----------------

In JavaScript values are passed by reference

.. code:: javascript

  let person = {name: 'john'};
  let john = person;

  person.name = 'John Smith'        //--> 'John Smith'

  person.name                       //--> 'John Smith'
  john.name                         //--> 'John Smith'



Variable Scope
--------------

Variables defined with **let** or **const** cannot be redefined inside the scope of a function.

.. code:: javascript

  let a = 1
  let b = 2

  function f(){
    let a = 5;
  }

  f()            // ReferenceError: a is not defined















----------
Data Types
----------

Numbers: There is no distiction between integers and floating point values
Strings: "hello people"
Boolean: true, false
null:
undefined:
objects:










Numbers
=======






Strings
=======

Strings are immutable


Template Strings
----------------

Back-tick is used to create template strings

.. code:: javascript

  let num = 300
  `${num} is the number of ...`  // '300 is the number of ...'


You can not used template strings to define object literal property names.

.. code:: javascript

  a = 'name'
  let obj = {`a`: "James"}            // SyntaxError: Unexpected template string



Arrays
------






Objects
-------






-----
Scope
-----









---------
Operators
---------


Operators tell the interpreter to perform a specific mathematical or logical manipulation


Arithmetic Operators
====================

**Assumes** :js:`A=10` and :js:`B=20`

.. table:: Arithmetic Operators
   :align: left
   :widths: 5, 10, 10

   ===========  ==================================== ==============================
     Operator    Description                          Example
   ===========  ==================================== ==============================
        \+       Addition
        \-       Subtraction
        \*       Multiplication
        /        Division
        %        Modulus
        \+\+     Increment
        \-\-     Decrement
   ===========  ==================================== ==============================
















Relational Operators
====================

**Assumes** :js:`A=10` and :js:`B=20`

.. table:: Relational Operators
   :align: left
   :widths: 5, 10, 10

   ===========  ==================================== ==============================
     Operator    Description                          Example
   ===========  ==================================== ==============================
        ==       Equals
        ===
        !=       Not Equals
        !==
        >        Greater than
        <        Less than
        >=       Greater than or equals to
        <=       Less than or equals to
   ===========  ==================================== ==============================















Logical Operators
=================

**Assumes** :js:`A=10` and :js:`B=20`

.. table:: Logical Operators
   :align: left
   :widths: 5, 10, 10

   ===========  ==================================== ==============================
     Operator    Description                          Example
   ===========  ==================================== ==============================
        &&       Logical AND                          :js:`(A & B)`     //
        ||       Logical OR                           :js:`(A & B)`     //-->
        !        Logical NOT                          :js:`(A & B)`     //-->
   ===========  ==================================== ==============================














Bitwise Operators
=================



**Assumes** :js:`A=10` and :js:`B=20`



.. table:: Bitwise Operators
   :align: left
   :widths: 5, 10, 10

   ===========  ==================================== ==============================
     Operator    Description                          Example
   ===========  ==================================== ==============================
        &        Bitwise AND                         :js:`(A & B)`     //-->
        \|       Bitwise OR                          :js:`(A | B)`     //-->
        ^        Bitwise XOR                         :js:`(A ^ B)`     //-->
        ~        Bitwise Not is the unary operator   :js:`(~A)`        //-->
       <<        Left shift                          :js:`(A << 1)`        //-->
       >>        Right shift                         :js:`(A >> 1)`        //-->
       \>>>      Right shift with Zero               :js:`(A >>> 1)`        //-->
   ===========  ==================================== ==============================








Assignment Operators
====================



**Assumes** :js:`A=10` and :js:`B=20`




.. table:: Assignment Operators
   :align: left
   :widths: 5, 10, 10

   ===========  ==================================== ==============================
     Operator    Description                          Example
   ===========  ==================================== ==============================
      c            c                                    c
   ===========  ==================================== ==============================





















Misc Operators
==============


**Assumes** :js:`A=10` and :js:`B=20`

.. table:: Misc Operators
   :align: left
   :widths: 5, 10, 10

   ===========  ==================================== ========================================
     Operator    Description                          Example
   ===========  ==================================== ========================================
        ? :       Ternary operator (if,else)          :js:`n = (1 == 2) ? 10: 20`   // 20
        ,         Comma operator                      :js:`x = 0; x = (x++, x)`     // 1
   ===========  ==================================== ========================================


Comma Operators
________________

Comma operators evaluates operands left to right and returns the last operand


.. code:: javascript

  let x = 0
  x = (x++, x)            // 1

  x = (x++, x++, x++, x)  // 4


Using comma operators to supply multiple values to a for loop.

.. code:: javascript

  > for (a=0, b=1; a<= 10; a++, b--)
  ... console.log(a,b)
  0 1
  1 0
  2 -1
  3 -2
  4 -3
  5 -4
  6 -5
  7 -6
  8 -7
  9 -8
  10 -9



.. code:: javascript

  function myFunc() {
    var x = 0;

    return (x += 1, x); // the same as return ++x;
  }




Operator Precedence
===================


.. table:: Operator Precedence
   :align: left
   :widths: 5, 10, 10

   ===========  ==================================== ==============================
     Operator    Description                          Example
   ===========  ==================================== ==============================
   ===========  ==================================== ==============================


Symbol
------




Rest & Spread
-------------

Rest & Spread allows use to pack and unpack N number of values of an array.



.. code:: javascript

  let a = [1,2]
  let b = [3,4]
  c = [...a, ...b]    // [ 1, 2, 3, 4 ]



.. code:: javascript

  function sum(...args) {
    console.log(args);
  }

 sum(1,2)                  // [ 1, 2 ]
 sum(1,2, 3, 4, 5, 6)      // [ 1, 2, 3, 4, 5, 6 ]



.. code:: javascript

  function sum(a, b, ...args) {
    console.log(args);
    return a + b;
  }

 sum(1, 2, 3, 4, 5, 6)      // [ 3, 4, 5, 6 ]



Closures
--------

















Control Structures
------------------

If Condition
____________



While Loop
__________


Continuously executes a statement if the condition is true


.. code:: javascript

  while (x < 10) {
    x++                 // 9
  }








For Loop
________


# :js:`for (initialize; condition; increment);`
# :js:`for (initialize; condition; increment) statement;`
# :js:`for (initialize; condition; increment) { multiple statements; }`




.. code:: javascript

  nums = [5, 3, 1, 5, 9, 3]
  let a = 0
  for (let i = 0; i < nums.length; i++)     //  26
    a += nums[i];



The same can be done with a reducer
.. coder:: javascript

  const b = (counter, value) => counter + value;
  nums = [5, 3, 1, 5, 9, 3]
  nums.reduce(b)                                        //  26


Infinite loop example
.. code:: javascript

 for(;;)
  console.log("hello world")





Repeat Until Loop
_________________


Nested Loops
____________




Functions
---------

> function myfunc(a, b, c, d, e="EE") {
... console.log(arguments);
... console.log("THIS: " +  this);
... }

> myfunc(a, b, c, [])
[Arguments] { '0': 1, '1': 2, '2': 3, '3': [] }




> function myfunc(a, b, c, d, e="EE") {
... console.log(this);
... }
undefined
> myfunc()
Object [global] {
  global: [Circular],
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] { [Symbol(util.promisify.custom)]: [Function] },
  queueMicrotask: [Function: queueMicrotask],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(util.promisify.custom)]: [Function]
  },
  myfunc: [Function: myfunc]
}

Anonymous Functions
-------------------

An anonymous function used as an argument to the setTimeout function.

.. code:: javascript

  > setTimeout(function() {console.log(arguments)},  1000);
  Timeout {
    _idleTimeout: 1000,
    _idlePrev: [TimersList],
    _idleNext: [TimersList],
    _idleStart: 667838,
    _onTimeout: [Function],
    _timerArgs: undefined,
    _repeat: null,
    _destroyed: false,
    [Symbol(refed)]: true,
    [Symbol(asyncId)]: 1647,
    [Symbol(triggerId)]: 5
  }
  > [Arguments] {}


Assigning functions to variables



.. code:: javascript

  > let myFunc = function(a, b, c="Hi"){
  ...   console.log(arguments);
  ...   console.log(a, b, c)
  ... }
  undefined
  >
  > myFunc()
  [Arguments] {}
  undefined undefined Hi
  undefined










Arrow Functions
_______________




Promises
--------


A promise is an object that represents the results of asynchronous execution.

.. code:: javascript

  >



Chaining
________




















Prototypes
----------


Async / Await
_____________

Cleaner code with **async** and **await**


examinining the following code:

.. code:: javascript

  function a(){}
  funciton b() {}
  a()
  b()


b() is executed after a() as expected


// The following acync function returns a **promise**.

.. code:: javascript

  async function a() { return 'Hello' }



// First method of a .then() is a *resolve*, second is the *reject*

.. code:: javascript

a().then(console.log)

  > a().then(console.log)
  Promise {
    <pending>,
    domain:
     Domain {
       domain: null,
       _events:
        [Object: null prototype] {
          removeListener: [Function: updateExceptionCapture],
          newListener: [Function: updateExceptionCapture],
          error: [Function: debugDomainError] },
       _eventsCount: 3,
       _maxListeners: undefined,
       members: [] } }
  > hello



Both of these functions are the same

.. code:: javascript

  > async function a(){return 'one'}
  undefined
  > async function b(){return Promise.resolve('two')}
  undefined
  >
  >
  > a().then(console.log)
  > one
  > b().then(console.log)
  > two



await
_____

The *await* keyword is prepended to statements within the *async* function.
It cannot be used outside of an async function.

.. code:: javascript

  async function a() {
    await Math.sqrt(); return "one";
  }
  async function b(){
    return "two"
  }

  a().then(console.log)
  b().then(console.log)

  a().then(console.log)
  b().then(console.log)

Outputs `two` followed by `one`

.. code:: javascript

  two
  one

**await** pauses execution until the statement completes.

.. code:: javascript

  const collect = async function(one, two, three) {
    try {
      const first = await source(one)
      const scound = await source(two)
      const third = await source(three)
    } catch (error) {
      // Error handling
      console.log(error);
    }
  }

  const data = collect()



Generator
_________

Generator have a next() method to step through the *yield*ed values. Within a generator function
you can yield values for the generator. The gnerator also does not have a previous method for returning previous objects

.. code:: javascript

  > let gens = function*() {yield 1; yield 2; yield 3; yield 4; yield 5; yield "hello"}
  >
  > g = gens()
  > g.next()
  { value: 1, done: false }
  > g.next()
  { value: 2, done: false }
  > g.next()
  { value: 3, done: false }
  > g.next()
  { value: 4, done: false }
  > g.next()
  { value: 5, done: false }
  > g.next()
  { value: 'hello', done: false }
  > g.next()
  { value: undefined, done: true }
  > g.next()
  { value: undefined, done: true }
  >


Trowing errors

.. code:: javascript


  function* generator() {
    try {
      yield 'a'
      yield 'b'
      yield 'c'
      yield 'd'
    } catch(e) {
      console.log('This error:', e)
    }
  }
  let gen = generator()
  > gen.next()
  { value: 'a', done: false }
  > gen.next()
  { value: 'b', done: false }
  > gen.next()
  { value: 'c', done: false }
  > gen.next()
  { value: 'd', done: false }
  > gen.next()
  { value: undefined, done: true }
  > gen.next()

  > gen.throw(new Error('Error....'))
  Thrown:
  Error: Error....
  >






Object Oriented
---------------





Modules
-------

Importing modules

.. code::javascript
  import {Mouse, Keyboard} from "./input.js"
  // ...
  let keyboard = new Keyboard()

Exporting functions

.. code::javascript
  //...
  export = { FirstFunction, SecondFunction }






// ------------------

## Networking

## Standard Library


## Math Library

## Operating System Facilities



Build-In Functions

Type





-------------------------------------------------------- NodeJs --------------------------------------------------------

NodeJs is a server side programming language based on chromes's V8 engine.




Features
--------

* Event Driven, non-blocking, and asynchronous


* Fast execution compared to Python

* Single threaded.

* Open Source under MIT



Server Applications
-------------------

Major componets are
* Modules
* Server
* Requests/Response























