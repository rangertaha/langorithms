# Lua 


0. Language
    - [ ] Tools
        - [ ] ...
        - [ ] ...
        - [ ] ...
        - [ ] ...
    - [ ] Syntax
    - [ ] Variables
    - [ ] Data Types
    - [ ] Operators
    - [ ] Control Structures
    - [ ] Object Oriented Programming

1. Data Structures

2. Algorithms

3. Libraries
    - [ ] Standard Libraries
    - [ ] Third Party Libraries
    
4. Patterns 





Lua Programming
===============






Lua is built in C, opensource and fast.
* Dynamically Typed

* Case Sensitive

* Writen in C


* Tools
* Syntax
* Variables
* Data Types
* Operators
* Control Structures
* Object Oriented Programming








## Tools


* Visual Studio Code
* Lua and Ravi 5.3 Debugger

## Environment

Installed on Mac with the following.
```bash
brew install lua
```




## Syntax















## Overview
## Implementation

Writen in C...
Has an interactive interpreter...





## Syntax














## Keywords
Reserved words and can not bused as variable names

```bash
and, break, do, else, elseif, end, false, for, function, if, in, local, nil, not, or, repeat, return, then, true, until, while
```


## Comments

Inline comments
```bash
a, b, c = 1, 2,3  -- This is a list of variable declarations

```
Block comments

```bash
--[[ this is a comment --]]

```

## LValues & RValues

* **lvalue** Expressions that refer to the memory location
* **rvalue** Refers to the value stored in a memory location

Variables are lvalues and appear on teh left side
```bash
a = 10
```

It's possible to have multiple lvalues and rvalues in a statement
```bash
a, b = 10,20
```




## Variables

Variables don't have types only values have types as with other dynamically typed programming languages.
Values are stored in variables, passed are parameters and returned. The variable types are:

* Global variables
* Local variables
* Table fields

### Declaration

Local variable definition. Variables point to **nil** if they are not initialized with a value.
```bash
local a, b, c
```

Initializing a variable

```bash
a = 10
b = 20
c = 30

print("Value of a:", a)
print("Value of b:", b)
print("Value of c:", c)
```

Swapping variables

```bash
a, b = 10, 20

a, b = b, a

print("Value of a:", a)
print("Value of b:", b)


```

```bash
c = 10/20

print(c)

```
### Local

Define variables, allocating memory and scope(local)
```bash
local a, b, c, d

```
### Global
By default variables are global unless explicitly declared as **local**

```bash
a, b = 1, 2
```



## Value Types

Values have types

* **nil**       Values that dont' have data
* **boolean**   Values are **true** or **false**
* **number**    Double precision floating numbers
* **string**    An array of characters
* **function**  Method or functions writen in C or Lua
* **userdata**  Arbitrary C data
* **thread**    Independent threads of code execution. Used for coroutines
* **table**     Values can be arrays, symbol tables, sets, graphs, trees, and more



# Operators

Operators tell the interpreter to perform a specific mathematical or logical manipulation


## Arithmetic Operators

| Operator        | Description      |
| --------------: | ---------------: |
| +               | Addition         |
| -               | Subtraction      |
| *               | Multiplication   |
| /               | Division         |
| %               | Modulus          |
| ^               | Exponent         |
| -               | Unary            |


### Examples



```bash
> a,b,c,d = 1,2,3,4
>
> a+b
3

```

```bash

```

```bash

```

```bash

```

```bash

```

```bash

```


## Relational Operators

| Operator        | Description               |
|                 |                           |
| --------------: | ---------------:          |
| ==              | Equals                    |
| ~=              | Not Equals                |
| >               | Greater than              |
| <               | Less than                 |
| >=              | Greater than or equals to |
| <=              | Less than or equals to    |
|                 |                           |

### Examples

```bash

```

```bash

```

```bash

```

```bash

```

```bash

```

```bash

```




## Logical Operators
| Operator        | Description      |
|                 |                  |
| --------------: | ---------------: |
| and             | Logical AND      |
| or              | Logical OR       |
| not             | Logical NOT      |


### Examples

```bash

```

```bash

```

```bash

```

```bash

```

```bash

```

```bash

```




## Misc Operators
| Operator        | Description                              |
|                 |                                          |
| --------------: | ---------------------------------------: |
| ..              | Concatenates two strings                 |
| #               | Returns the length of a string or table  |



### Operator Precedence

| Operator        | Description      | Example      |
|                 |                  |              |
| --------------: | ---------------: | -----------: |
|                 |                  |              |
|                 |                  |              |
|                 |                  |              |
|                 |                  |              |
|                 |                  |              |
|                 |                  |              |
|                 |                  |              |


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



```bash

```


```bash

```

```bash

```

```bash

```

```bash

```

```bash

```

Build-In Functions

Type
```bash
print(type("Hello"))
print(type(10))
print(type(nil))
print(type(print))
```






# Control Structures

## While Loop

Continuously executes a statement if the condition is true
```text
while(<condition>)

do
<statement>
end

```


### Examples



#### Infinite Loop
```bash
> while ( true )
>> do
>>     print("This loops forever")
>> end
```


```bash
> a = 10
> while (a < 20)
>> do
>>
>> print("value of a is:", a)
>> a = a +1
>> end
```





## For Loop




```bash


```

## Repeat Until Loop
## Nested Loops















