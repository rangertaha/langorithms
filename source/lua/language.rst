Language
========

Setup
-----

Installed on Mac with the following.

.. code:: bash

  brew install lua




Syntax
------


Writen in C...
Has an interactive interpreter...



## Comments

Inline comments

.. code:: bash

  a, b, c = 1, 2,3  -- This is a list of variable declarations







Block comments

.. code:: bash

  --[[ this is a comment --]]



## LValues & RValues

* **lvalue** Expressions that refer to the memory location
* **rvalue** Refers to the value stored in a memory location

Variables are lvalues and appear on teh left side

.. code:: bash

  a = 10


It's possible to have multiple lvalues and rvalues in a statement

.. code:: bash

  a, b = 10,20




## Keywords
Reserved words and can not bused as variable names

```bash
and, break, do, else, elseif, end, false, for, function, if, in, local, nil, not, or, repeat, return, then, true, until, while
```





Variables
---------


Variables don't have types only values have types as with other dynamically typed programming languages.
Values are stored in variables, passed are parameters and returned. The variable types are:

* Global variables
* Local variables
* Table fields

Declaration
___________

Local variable definition. Variables point to **nil** if they are not initialized with a value.

.. code:: lua

  local a, b, c



Initializing a variable

.. code:: lua

  a = 10
  b = 20
  c = 30

  print("Value of a:", a)
  print("Value of b:", b)
  print("Value of c:", c)


Swapping variables

.. code:: lua

  a, b = 10, 20

  a, b = b, a

  print("Value of a:", a)
  print("Value of b:", b)




.. code:: lua

  c = 10/20

  print(c)






Local
_____

Define variables, allocating memory and scope(local)

.. code:: lua

  local a, b, c, d





Global
______

By default variables are global unless explicitly declared as **local**

.. code:: lua

  a, b = 1, 2





Value Types
___________


Value types are:




:nil:       Values that dont' have data
:boolean:   Values are **true** or **false**
:number:    Double precision floating numbers
:string:    An array of characters
:function:  Method or functions writen in C or Lua
:userdata:  Arbitrary C data
:thread:    Independent threads of code execution. Used for coroutines
:table:     Values can be arrays, symbol tables, sets, graphs, trees, and more



















Data Types
----------



Operators
---------


Operators tell the interpreter to perform a specific mathematical or logical manipulation


Arithmetic Operators
++++++++++++++++++++

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
++++++++++++++++++++

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

  >


Logical Operators
+++++++++++++++++

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
++++++++++++++


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
+++++++++++++++++++


.. table:: Operator Precedence
   :align: left
   :widths: 2, 10

   ===========  =========================================
     Operator    Description
   ===========  =========================================
   ===========  =========================================





Control Structures
------------------




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





