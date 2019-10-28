 =======
Language
========

.. role:: js(code)
   :language: javascript


* Most popular programming language
* Client side
* Server side with NodeJs

* Interpreted language



## Context

### Context Creation



Variables are set to **undefinded** prior to value assignment. For example:
.. code:: javascript

  var a;
  a             // undefined


### Execution Context

When execution context is created it creates the following

* this
* Variable Environment
* Outer Environment


Within a function statement or a function expresion, 'this' points to the global object.

.. code:: javascript

  function aThis() {
    console.log(this);
  }

  let bThis = function() {
    console.log(this);
  }

  aThis()
  bThis()


When an object is created with a method that logs 'this', the value is the object.
.. code:: javascript

  let a = {
    name: '',
    log: function(){
      console.log(this)
    }
  }
  > a.log()
  { name: '', log: [Function: log] }


A strange behavior with using 'this'. The following snippet does not work as expected. The method
**setName()** is setting a value on the global object
.. code:: javascript

  var a = {
    person: '',
    log: function(){

      console.log(this)

      var setName = function(name){
        this.person = name
      }

      setName('James Smith');

      console.log(this)
    }
  }
  > a.log()
  { name: '', log: [Function: log] }
  { name: '', log: [Function: log] }


This fix the issue in the previous snippet. you can do the following

.. code:: javascript
  var a = {
    person: '',
    log: function(){
      self = this

      console.log(self)

      var setName = function(name){
        self.person = name
      }

      setName('James Smith');

      console.log(self)
    }
  }
  > a.log()
  { person: '', log: [Function: log] }
  { person: 'James Smith', log: [Function: log] }











Global environment and global object







Javascript runs code inside an execution context



The base execution context is the global execution context. Global execution context is accessible everywhere in
a given project.

The global execution object for `NodeJS` is `this`
.. code:: javascript

  > this
  Object [global] {... }


The global execution object for web browsers is the **window** object
.. code:: javascript

  > this
  Window {parent: Window, postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, …}

  > window
  Window {parent: Window, postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, …}


Variables are added at the global level are added to the global context


.. code:: javascript

  > a = 100
  100
  > b = 200
  200
  > this
  Object [global] {
   ...
    a: 100,
    b: 200 }










-----
Setup
-----

For mac download and install NodeJs_

.. _NodeJs: https://nodejs.org/en/download/



-------
Syntax
-------

Expressions: code that results in a value and can be used in places where a value is expected
Statements: Code that does not return a value but performs an action such **if** statements.





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














Pass by Reference or Value
-----------------------

In JavaScript objects are passed by reference

.. code:: javascript

  let person = {name: 'john'};
  let john = person;

  person.name = 'John Smith'        //--> 'John Smith'

  person.name                       //--> 'John Smith'
  john.name                         //--> 'John Smith'


Primitive types are pass by value. This includes variables passed as arguments to functoins.

.. code:: javascript

  > a = 3
  3
  > b = a
  3
  >
  > a = 9
  9
  > b
  3
  >







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




Destructuring Assignment
-------------------------

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment



.. code:: javascript

  > [a, b] = [1, 2]
  [ 1, 2 ]
  > a
  1
  > b
  2


.. code:: javascript

  > var x = [1, 2, 3, 4, 5];
  undefined
  > var [a, b] = x;
  undefined
  > x
  [ 1, 2, 3, 4, 5 ]
  > a
  1
  > b
  2
  > var [a, b, ...args] = x;
  undefined
  > args
  [ 3, 4, 5 ]
  > a
  1
  > b
  2
  >






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

An array is a collection of items of any type that can be references that starts with 0

.. code:: javascript

  var b = [
    0,
    1,
    2,
    3,
    'my string',
    {a: 'one'},
    function(n){console.log(n)},
  ];

  >
  > b[0]
  0
  > b[2]
  2
  > b[4]
  'my string'
  > b[5]
  { a: 'one' }
  > b[5]
  { a: 'one' }
  > b[5].a
  'one'
  > b[6]()
  undefined
  > b[6]('hello')     // Using *()* to call functions within an array.
  hello
  undefined
  >









Objects
-------

Objects are collections of name value pairs. This is an example of an object literal with various value types.

.. code:: javascript

  > obj = {
  ...   Person: {
  .....     firstName: "James",
  .....     lastName: "Smith",
  .....     fullName: function(){return this.firstName + " " + this.lastName},
  .....     age: 25,
  .....   }
  ... }
  { Person:
     { firstName: 'James',
       lastName: 'Smith',
       fullName: [Function: fullName],
       age: 25 } }
  >



Member Access Operator
++++++++++++++++++++++

You can get and set values of an object with dot(.) notation.

.. code:: javascript

  > obj = {Person: {
  ...   Name: "James",
  ...   Addess: {
  .....     Street: "",
  .....     City: "",
  .....     Zip: ""
  .....   }
  ... }
  ... }
  { Person: { Name: 'James', Addess: { Street: '', City: '', Zip: '' } } }
  >
  > obj.Person
  { Name: 'James', Addess: { Street: '', City: '', Zip: '' } }
  > obj.Person.Addess
  { Street: '', City: '', Zip: '' }
  >



Computed Member Access
++++++++++++++++++++++

.. code:: javascript

  > obj = { Person: { Name: 'James', Address: { Street: '', City: '', Zip: '' } } }
  { Person:
     { Name: 'James', Address: { Street: '', City: '', Zip: '' } } }
  > obj['Person']['Address']
  { Street: '', City: '', Zip: '' }
  > obj['Person']['Address']['City'] = 'Boston'
  'Boston'
  > obj
  { Person:
     { Name: 'James',
       Address: { Street: '', City: 'Boston', Zip: '' } } }
  >















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

   ===========  ==================================== ============= ==========
     Operator    Description                          Example        Results
   ===========  ==================================== ============= ==========
        &        Bitwise AND                         :js:`A & B`     0
        \|       Bitwise OR                          :js:`A | B`     30
        ^        Bitwise XOR                         :js:`A ^ B`     30
        ~        Bitwise Not is the unary operator   :js:`~A`        -11
       <<        Left shift                          :js:`A << 1`    20
       >>        Right shift                         :js:`A >> 1`    5
       \>>>      Right shift with Zero               :js:`A >>> 1`   5
   ===========  ==================================== ============= ==========






Assignment Operators
====================


These operators assign value to the variable.

.. table:: Assignment Operators
   :align: left
   :widths: 5, 10, 10

   ===========  ==================================== =============== ========
     Operator    Description                          Example         Value
   ===========  ==================================== =============== ========
    =            Assignment                           A = 1           1
    +=           Addition & Assignment                A += 3          4
    -=           Subtraction & Assignment             A -= 1          3
    *=           Multiplication & Assignment          A *= 3          9
    /=           Division & Assignment                A /= 4          2.25
    %=           Modulus & Assignment                 A %= 1          0.25
   ===========  ==================================== =============== ========





















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


.. table:: Highest to lowest operator precedence
   :align: left
   :widths: 5, 10, 10

   ===========  ============ ==================================== ======================= ==============================
     #           Operator     Associativity                         Individual operators   Example
   ===========  ============ ==================================== ======================= ==============================
   ===========  ============ ==================================== ======================= ==============================


Precedence	Operator type	Associativity	Individual operators
20	Grouping	n/a	( … )
19	Member Access	left-to-right	… . …
Computed Member Access	left-to-right	… [ … ]
new (with argument list)	n/a	new … ( … )
Function Call	left-to-right	… ( … )
Optional chaining	left-to-right	?.
18	new (without argument list)	right-to-left	new …
17	Postfix Increment	n/a	… ++
Postfix Decrement	… --
16	Logical NOT	right-to-left	! …
Bitwise NOT	~ …
Unary Plus	+ …
Unary Negation	- …
Prefix Increment	++ …
Prefix Decrement	-- …
typeof	typeof …
void	void …
delete	delete …
await	await …
15	Exponentiation	right-to-left	… ** …
14	Multiplication	left-to-right	… * …
Division	… / …
Remainder	… % …
13	Addition	left-to-right	… + …
Subtraction	… - …
12	Bitwise Left Shift	left-to-right	… << …
Bitwise Right Shift	… >> …
Bitwise Unsigned Right Shift	… >>> …
11	Less Than	left-to-right	… < …
Less Than Or Equal	… <= …
Greater Than	… > …
Greater Than Or Equal	… >= …
in	… in …
instanceof	… instanceof …
10	Equality	left-to-right	… == …
Inequality	… != …
Strict Equality	… === …
Strict Inequality	… !== …
9	Bitwise AND	left-to-right	… & …
8	Bitwise XOR	left-to-right	… ^ …
7	Bitwise OR	left-to-right	… | …
6	Logical AND	left-to-right	… && …
5	Logical OR	left-to-right	… || …
4	Conditional	right-to-left	… ? … : …
3	Assignment	right-to-left	… = …
… += …
… -= …
… **= …
… *= …
… /= …
… %= …
… <<= …
… >>= …
… >>>= …
… &= …
… ^= …
… |= …
2	yield	right-to-left	yield …
yield*	yield* …
1	Comma / Sequence	left-to-right	… , …









Associativity
-------------

Right and left associativity determine the way operators with the same precedence are parsed. Left associative
operators are processed from left to right. Right associative operators are processed right to left.


Assuming the following statement `a <operator> b <operator> c`. A left associativity operator would process
like `((a <operator> b) <operator> c)` and a right associativity would be processed like `(a <operator> (b <operator> c)`.

.. code:: javascript

  [a, b, c] = [1, 2, 3]

  a + b - c              //
  ((a + b) - c)          //


  (a + (b * c))          //
  (a + (b * c))          //


























Symbol
------




Rest & Spread Arrays
--------------------

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




Rest & Spread Object Literals
------------------------------



> obj1 = {foo: 'bar', x: 10}
{ foo: 'bar', x: 10 }
>
> obj2 = {foo:'baz', y: 20)
Thrown:
obj2 = {foo:'baz', y: 20)
                        ^

SyntaxError: Unexpected token )
> obj2 = {foo:'baz', y: 20}
{ foo: 'baz', y: 20 }
>
> cloneObj = {...obj1}
{ foo: 'bar', x: 10 }
>
> merged = {...obj1, ...obj2}
{ foo: 'baz', x: 10, y: 20 }
> obj2 = {foo:'ban', y: 20}
{ foo: 'ban', y: 20 }
>
>
>
> merged = {...obj1, ...obj2}
{ foo: 'ban', x: 10, y: 20 }
>


> let  obj = {
... obj1: {
..... obj2: {
....... one: 1,
....... two: 2,
....... three: 3
....... }
..... }
... }
undefined
> obj


> let { one, two, three } = obj.obj1.obj2



destructing and reaname at the same time

> let {person: boss} = {person: "Tom Lee"}
undefined
> person
'Tom Lee'
> boss
'Tom Lee'
> boss = 'James'
'James'
>
>
> person
'Tom Lee'
> boss
'James'
>

Merge two or more objects.

>
> one = {a:1, b:2, c:3, d:(=>{} }
Thrown:
one = {a:1, b:2, c:3, d:(=>{} }
                         ^^

SyntaxError: Unexpected token =>
> one = {a:1, b:2, c:3, d:()=>{} }
{ a: 1, b: 2, c: 3, d: [Function: d] }
>
>
> two = {e:5, f:6, g:7}
{ e: 5, f: 6, g: 7 }
>
> three = {...one, ...two}
{ a: 1, b: 2, c: 3, d: [Function: d], e: 5, f: 6, g: 7 }
>

















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

Functions are special types of first class objects. They can have primitives, objects, functions, an optional name and code that
 is invoked with **()**. However, anonymous functions dont' have a names. Functions attrabutes:

* objects
* functions
* primatives
* optional name
* code invoked with **()**

.. coder:: javascript
  > function greet() { console.log('hi') }
  undefined
  >
  > greet.language = 'english';
  'english'
  >
  >
  > greet
  { [Function: greet] language: 'english' }
  >



Getting the function name

.. coder:: javascript

  > function greet() { console.log('hi') }
  undefined
  > greet.name
  'greet'
  >





Functions Expressions
_____________________
A function expression returns a value.

During context creation the variable *helloFunc* is created in memory and set as **undefined**.
During the context execution phase this function expression is a value assigned
to the variable *helloFunc* and adding **()** to the variable invokes the code.

.. coder:: javascript
  var helloFunc = function() {
    console.log("Hello!")
  }

  helloFunc()                         // Hello


During context creation the variable *helloFunc* is assigned the value **undefined**. Invoking it prior to value
assignment returns an error.

.. coder:: javascript

  helloFunc()                        // Uncaught TypeError: undefined is not a function

  var helloFunc = function() {
    console.log("Hello!")
  }


Functions expressions as arguments
.. coder:: javascript

  > function print(i) {
  ... console.log(i())
  ... }
  undefined
  > print(function() { return 'Hi' })
  Hi
  undefined
  >

Immediately Invoked Functions Expresion (IIFE)
++++++++++++++++++++++++++++++++++++++++++++++

Assign function return value to the variable
.. coder:: javascript
  var greet = function(s) {
    console.log(s)
    return s;
  }("Hello!")


Trick the syntax parser to not treat the function as function statement by wrapping it in () making it a function expresion.

.. coder:: javascript
  var person = "James"
  (function(s) {
    console.log("Hi " + s)
  }(person));

You can also invoke the function with by putting the () on the outside.
.. coder:: javascript
  var person = "James"
  (function(s) {
    console.log("Hi " + s)
  })(person);








Function Statement
__________________

An example of a function statement that does not return a value.

During the context creation phase this function statement is added to memory.

During the context execution phase the function statement is ignored and the function invocation executes the code.
.. coder:: javascript

  function helloFunc() {
    console.log("Hello!")
  }

  helloFunc()

Because the function statement is in memory, we can invoke the function object prior to the function statement.
.. coder:: javascript

  helloFunc()                   // Hello

  function helloFunc() {
    console.log("Hello!")
  }





Using **arguments** within a function

.. coder:: javascript

  function myfunc(a, b, c, d, e="EE") {
    console.log(arguments);
    console.log("THIS: " +  this);
  }

  > myfunc('a', 'b', 'c', [])
  [Arguments] { '0': 'a', '1': 'b', '2': 'c', '3': [] }
  THIS: [object global]


If you don't add arguments to a function the arguments default to **undefined**

.. coder:: javascript

  function myfunc(a, b, c, d, e="EE") {
    console.log(arguments);
    console.log("THIS: " +  this);
  }

  myfunc()
                // [Arguments] {}
                // THIS: [object global]



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

The normal way
.. code:: javascript
  
  let myFunc = function(a, b) {
    return a + b
  }

  myFunc(3, 3)                                 // 6

  
  
With arrow functions
.. code:: javascript

  let myArrowFunc = (a, b) = {return a + b}
  myArrowFunc(3, 3)                             // 6

  
With arrow function
.. code:: javascript

  let myArrowFunc2 = (a, b) => a + b
  myArrowFunc2(3, 3)                            // 6




Returning an object literal via arrow function

.. code:: javascript

  let user = (id, username) => ({id: id, username: username})

  user(1, 'myname1')                                 //  { id: 1, username: 'myname1' }



.. code:: javascript

  const osTypes = [
    { name:'mac', price:'free' },
    { name:'linux', price:'free' },
    { name:'windows', price:'$100' }
  ]
  prices = osTypes.map(os = os.price)              // [ 'free', 'free', '$100' ]




Array filters technique the

.. code:: javascript

  const numList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  let m  = numList.filter(
    function(i){
      return i % 3 === 0
    })

  console.log(m)                             // [ 3, 6, 9 ]








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























