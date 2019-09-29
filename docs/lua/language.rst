========
Language
========

Lua is an embedded lightweight language written in C.

Lua is a dynamically typed programming language

Written in C...
Has an interactive interpreter...

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

Inline comments start with a **--** for the entire line. Block comments start with **--[[** and end with **]]**.
However, the convention is to end with **--]]** so we can uncomment the entire block by adding a hyphen to the start of
the block comment.

.. code:: bash

  --[[ This is a block comment
  a = 1
  while(a < 10) do
    print(a)
    a = a + 1
  end
  --]]

To uncomment this **chunk** of code we add a hyphen.

.. code:: bash

  ---[[ This is a block comment
  a = 1
  while(a < 10) do
    print(a)
    a = a + 1
  end
  --]]





.. code:: bash

  a, b, c = 1, 2,3  -- This is a list of variable declarations












Keywords
========
Reserved words and can not bused as variable names

.. code:: bash

  and, break, do, else, elseif, end, false, for, function, if, in, local, nil, not, or, repeat, return, then, true, until, while











---------------------------
Types, Values and Variables
---------------------------

LValues & RValues
=================

* **lvalue** Expressions that refer to the memory location
* **rvalue** Refers to the value stored in a memory location

Variables are lvalues and appear on teh left side

.. code:: bash

  a = 10


It's possible to have multiple lvalues and rvalues in a statement

.. code:: bash

  a, b = 10,20



Global and Local
=================

As with many other dynamically typed languages, variables don't have types only values have types.
Values are stored in variables, passed are parameters and returned. The variable types are **global**, **local**, and
table fields. By default variables not declared **local** are global.



.. code:: bash

  a = 1         --> a is a global variable
  local b = 1   --> b is a local variable


Variables point to **nil** if they are not initialized with a value.

.. code:: lua

  local a, b, c         --> nil, nil, nil
  d, e, f = 1, 2, 3     --> initialized values



Initializing a variable with a value

.. code:: lua

  a = 10        --> global variables
  b = 20
  c = 30

  print("Value of a:", a)
  print("Value of b:", b)
  print("Value of c:", c)


Swapping variable values

.. code:: lua

  a, b = 10, 20

  a, b = b, a

  print("Value of a:", a)
  print("Value of b:", b)




.. code:: lua

  c = 10/20

  print(c)

----------
Data Types
----------

Value types


:nil:       Values that dont' have data
:boolean:   Values are **true** or **false**
:number:    Double precision floating numbers
:string:    An array of characters
:function:  Method or functions writen in C or Lua
:userdata:  Arbitrary C data
:thread:    Independent threads of code execution. Used for coroutines
:table:     Values can be arrays, symbol tables, sets, graphs, trees, and more


Using the **type** function to identify teh variable type

.. code:: lua

> print(type("hello people"))     --> string
string
> print(type(type(ABC)))          --> string
string
> print(type(nil))                --> nil
nil
> print(type(print))              --> function
function
> print(type(true))               --> boolean
boolean
>
> a = 30
> print(type(5.8*a))






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


.. code:: lua

  > 1 == 1.0
  true
  > -1 == -1.00
  true
  > 0.1e5
  10000.0
  > 0.1e4
  1000.0
  > 0.1e4 == 1000.00
  true
  > 0.1e4 == 1000
  true
  >


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

.. code:: lua

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


.. code:: lua

  >


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



If statement example

.. code:: lua

  x = 40
  if (a > 20)
  then
    -- If a is bigger then 20 print the following
    print("a is bigger then 20")
  end


If else statement example

.. code:: lua

  x = 30
  if ( a < 30)
  then
    -- ...
    print("")
  else
    -- ...
    print("")
  end


If else if else if...


.. code:: lua

  x = 400
  if ( x == 400 )
  then
    -- ...
    print("")
  elseif (x == 400)
  then
    -- ...
    print("")
  elseif (a == 30)
  then
    -- ...
  else
    print("..")
  end


.. code:: lua

    --[ local variable definition --]
    a = 100;
    b = 200;

    --[ check the boolean condition --]

    if( a == 100 )
    then
       --[ if condition is true then check the following --]
       if( b == 200 )
       then
          --[ if condition is true then print the following --]
          print("Value of a is 100 and b is 200" );
       end
    end

    print("Exact value of a is :", a );
    print("Exact value of b is :", b );




While Loop
__________


Continuously executes a statement if the condition is true

.. code:: lua

  while ( true )
   do
     print("This loops forever")
  end



.. code:: lua

  a = 10
  while (a < 20)
   do

   print("value of a is:", a)
   a = a +1
  end






For Loop
________






Repeat Until Loop
_________________


Nested Loops
____________








Object Oriented
---------------







.. sidebar:: Sidebar Title
   :subtitle: Optional Sidebar Subtitle

   Subsequent indented lines comprise
   the body of the sidebar, and are
   interpreted as body elements.














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





