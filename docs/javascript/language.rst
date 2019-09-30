========
Language
========

.. role:: js(code)
   :language: javascript


* Most popular programming language
* Client side
* Server side with NodeJs


Interpreted language






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
hold any data type and you dont need to declare the type during declaration.

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

  >
  > let john = new Person()
  undefined
  > john.walk()
  undefined
  > john.walk()
  undefined
  >
  > john.steps
  2













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








------------------
Abstract Data Type
------------------


Tables
======

















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
        !=       Not Equals
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
        &&       Logical AND                          :js:`(A & B)`     //-->
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
        |        Bitwise OR                          :js:`(A | B)`     //-->
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
        ? :       Ternary operator (if,else)          :js:`n = (1 == 2) ? 10: 20;`  // 20
   ===========  ==================================== ========================================












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




Control Structures
------------------

If Statement
____________



While Loop
__________


Continuously executes a statement if the condition is true




For Loop
________






Repeat Until Loop
_________________


Nested Loops
____________








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




Loops

Decision Making

Functions

Strings

Arrays

Interators


Tables

Modules

Metatables

Coroutines

File I/O

Error Handling



// ------------------

Debugging

Garbage Collection

Object Oriented

Web Programming

Database Access

Game Programming


// ------------------

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























