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


Literal Values
==============

Liternal values such as 'one', 'two', and 3' can be combined with opperators
For example:

.. code::javascript
  "hello" + "one" + "two" + 1, 7    //-->

'1  // numeric literal
2  // soem text





JavaScript is **untyped** so a variable can hold any data type and you dont' need to declare the type during declaration.

.. table:: Arithmetic Operators
   :align: left
   :widths: 2, 5, 10

   ========= =========== =============================
     value     Type       Constructor
   ========= =========== =============================
       1      'number'    Number()
 1.23 'number' Number()
hello text   'string'  String()
[]      object     Array()j

{}    'object' Object()

true   'boolean'   Boolean()

f f() {}      'function'  Function()


   ========= =========== =============================



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
   :widths: 2, 10

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
   :widths: 2, 10

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
   :widths: 2, 10

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

.. role:: js(code)
   :language: javascript


.. table:: Bitwise Operators
   :align: left
   :widths: 2, 20, 10

   ===========  ==================================== ==============================
     Operator    Description                          Example
   ===========  ==================================== ==============================
        &        Bitwise AND                         :js:`(A & B)`     //--> 10
        |        Bitwise OR                          :js:`(A | B)`     //--> 20
        ^        Bitwise XOR                         :js:`(A ^ B)`     //--> 1
        ~        Bitwise Not is the unary operator   :js:`(~A)`        //--> -10
       <<        Left shift                          :js:`(A << 1)`        //-->
       >>        Right shift                         :js:`(A >> 1)`        //-->
       \>>>      Right shift with Zero               :js:`(A >>> 1)`        //-->
   ===========  ==================================== ==============================








Assignment Operators
====================



**Assumes** :js:`A=10` and :js:`B=20`




.. table:: Assignment Operators
   :align: left
   :widths: 2, 20, 10

   ===========  ==================================== ==============================
     Operator    Description                          Example
   ===========  ==================================== ==============================
      c            c                                    c
   ===========  ==================================== ==============================





















Misc Operators
==============


.. table:: Misc Operators
   :align: left
   :widths: 2, 10

   ===========  ==================================== ==============================
     Operator    Description                          Example
   ===========  ==================================== ==============================
        ?:           c                                    c
   ===========  ==================================== ==============================












Operator Precedence
===================


.. table:: Operator Precedence
   :align: left
   :widths: 2, 10

   ===========  ==================================== ==============================
     Operator    Description                          Example
   ===========  ==================================== ==============================
   ===========  ==================================== ==============================





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























