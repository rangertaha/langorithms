========
Language
========

...


-----
Setup
-----

Installed on Mac with the following.

.. code:: bash

  brew install lua



-------
Syntax
-------






Comments
========






Keywords
========




---------
Variables
---------




----------
Data Types
----------


Numbers
=======






Strings
=======



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

.. table:: Arithmetic Operators
   :align: left
   :widths: 2, 10

   ===========  ================
     Operator    Description
   ===========  ================
        \+       Addition
        \-       Subtraction
        \*       Multiplication
        /        Division
        %        Modulus
        ^        Exponent
        \-       Unary
   ===========  ================


Examples


.. code:: lua

  a, b, c, d = 1, 2, 3, 4
  a + b
  3


Relational Operators
====================

.. table:: Relational Operators
   :align: left
   :widths: 2, 10

   ===========  ============================
     Operator    Description
   ===========  ============================
        ==       Equals
        ~=       Not Equals
        >        Greater than
        <        Less than
        >=       Greater than or equals to
        <=       Less than or equals to
   ===========  ============================

Examples


Logical Operators
=================

.. table:: Logical Operators
   :align: left
   :widths: 2, 10

   ===========  ============================
     Operator    Description
   ===========  ============================
        and       Logical AND
        or        Logical OR
        not       Logical NOT
   ===========  ============================

Examples

.. code:: nodejs

  >



Misc Operators
==============


.. table:: Misc Operators
   :align: left
   :widths: 2, 10

   ===========  =========================================
     Operator    Description
   ===========  =========================================
        \..       Concatenates two strings
        \#        Returns the length of a string or table
   ===========  =========================================

Examples



Operator Precedence
===================


.. table:: Operator Precedence
   :align: left
   :widths: 2, 10

   ===========  =========================================
     Operator    Description
   ===========  =========================================
   ===========  =========================================





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

.. code:: lua

  print(type("Hello"))
  print(type(10))
  print(type(nil))
  print(type(print))





