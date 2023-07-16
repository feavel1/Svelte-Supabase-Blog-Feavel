---
layout: post
author: Feavel
date: 2023年7月16日
title: Learn Rust - Part 1
---

# Basic Syntax & Concepts

1. **Hello World**

    Here's the standard "Hello, world!" program in Rust.

    ```rust
    fn main() {
        println!("Hello, world!");
    }
    ```

2. **Variables and Mutability**

    Variables are immutable by default in Rust. To make a variable mutable, use the `mut` keyword.

    ```rust
    let x = 5; // immutable variable
    let mut y = 5; // mutable variable
    y = 6; // this is okay
    ```

3. **Data Types**

    Rust is a statically typed language, which means that it must know the types of all variables at compile time.

    ```rust
    let x: i32 = 5; // integer type
    let y: f64 = 3.14; // floating-point type
    let z: bool = true; // boolean type
    let s: &str = "Hello"; // string slice type
    ```

4. **Control Flow**

    Rust's control flow keywords include `if`, `else`, `while`, `for`, and `match`.

    ```rust
    if x < y {
        println!("x is less than y");
    } else if x > y {
        println!("x is greater than y");
    } else {
        println!("x is equal to y");
    }
    ```

5. **Functions**

    Functions in Rust are defined with the `fn` keyword.

    ```rust
    fn greet() {
        println!("Hello, world!");
    }
    ```

6. **Structs**

    Structs are used to create complex data types in Rust.

    ```rust
    struct Point {
        x: i32,
        y: i32,
    }
    let p = Point { x: 0, y: 0 }; // instantiate a Point struct
    ```

7. **Enums**

    Enums in Rust are types that can have several different variants.

    ```rust
    enum Direction {
        Up,
        Down,
        Left,
        Right,
    }
    let d = Direction::Up; // use a variant of the Direction enum
    ```

8. **Pattern Matching**

    Rust has powerful pattern-matching capabilities, typically used with the `match` keyword.

    ```rust
    match d {
        Direction::Up => println!("We're heading up!"),
        Direction::Down => println!("We're going down!"),
        Direction::Left => println!("Turning left!"),
        Direction::Right => println!("Turning right!"),
    }
    ```

9. **Error Handling**

    Rust uses the `Result` and `Option` types for error handling.

    ```rust
    let result: Result<i32, &str> = Ok(42); // a successful result
    let option: Option<i32> = Some(42); // an optional value
    ```


This is just a taste of Rust's syntax and concepts. The language has many more features to explore as you continue learning.

# Variables & Data Types

Rust is a statically typed language, which means it must know the types of all variables at compile time. The compiler can usually infer what type we want to use based on the value and how we use it.

## Variables

By default, variables in Rust are immutable, meaning their values can't be changed after they're declared. If you want a variable to be mutable, you can use the `mut` keyword.

### Immutable variable:

```rust
let x = 5;
```

### Mutable variable:

```rust
let mut y = 5;
y = 6;  // This is allowed because y is mutable
```

## Data Types

Rust has several data types built into the language, which can be grouped into:

* Scalar Types: Represent a single value. Examples are integers, floating-point numbers, Booleans, and characters.

* Compound Types: Group multiple values into one type. Examples are tuples and arrays.


**Scalar Types**

### Integer:

```rust
let a: i32 = 5;  // i32 is the type for a 32-bit integer
```

### Float:

```rust
let b: f64 = 3.14;  // f64 is the type for a 64-bit floating point number
```

### Boolean:

```rust
let c: bool = true;  // bool is the type for a boolean
```

### Character:

```rust
let d: char = 'R';  // char is the type for a character. Note that it's declared using single quotes
```

### **Compound Types**

### Tuple:

```rust
let e: (i32, f64, char) = (500, 6.4, 'J');  // A tuple with three elements
```

### Array:

```rust
let f: [i32; 5] = [1, 2, 3, 4, 5];  // An array of i32s with 5 elements
```

These are some of the most basic data types and variable declarations in Rust. As you continue learning, you'll encounter more complex types and learn how to create your own.

## Advanced-Data Types

### Structs

Structs, or structures, allow you to create custom data types. They are a way of creating complex types from simpler ones.

Defining a struct:

```rust
struct User {
    username: String,
    email: String,
    sign_in_count: u64,
    active: bool,
}
```

Creating an instance of a struct:

```rust
let user1 = User {
    email: String::from("someone@example.com"),
    username: String::from("someusername123"),
    active: true,
    sign_in_count: 1,
};
```

### **Enums**

Enum, short for enumeration, is a type that represents data that is one of several possible variants. Each variant in the enum can optionally have data associated with it.

Defining an enum:

```rust
enum IpAddrKind {
    V4,
    V6,
}
```

Creating an instance of an enum:

```rust
let four = IpAddrKind::V4;
let six = IpAddrKind::V6;
```

### Option

The Option enum is a special enum provided by Rust as part of its standard library. It's used when a value could be something or nothing.

```rust
let some_number = Some(5);
let some_string = Some("a string");
let absent_number: Option<i32> = None;  // Note that we need to provide the type of None here
```

### Result

The Result enum is another special enum from the standard library, primarily used for error handling. It has two variants, Ok (for success) and Err (for error).

```rust
enum Result<T, E> {
    Ok(T),
    Err(E),
}
```

These are some of the more advanced data types in Rust. Understanding these concepts will allow you to write more robust and flexible Rust programs.

## Standard Collections

Collections are data structures that hold multiple values. Rust's standard library includes several versatile collections: `Vec<T>`, `HashMap<K, V>`, and `HashSet<T>`.

### Vectors

Vector, or `Vec<T>`, is a resizable array type provided by Rust's standard library. It allows you to store more than one value in a single data structure that puts all the values next to each other in memory.

Creating a vector and adding elements to it:

```rust
let mut v: Vec<i32> = Vec::new();  // creates an empty vector of i32s
v.push(5);
v.push(6);
v.push(7);
v.push(8);
```

### HashMap

HashMap, or `HashMap<K, V>`, is a collection of key-value pairs, similar to a dictionary in other languages. It allows you to store data as a series of key-value pairs where each key must be unique.

Creating a HashMap and adding elements to it:

```rust
use std::collections::HashMap;

let mut scores = HashMap::new();
scores.insert(String::from("Blue"), 10);
scores.insert(String::from("Yellow"), 50);
```

### HashSet

HashSet, or `HashSet<T>`, is a collection of unique elements. It's implemented as a hash table where the value of each key is a meaningless (), because the only value we care about is the key.

Creating a HashSet and adding elements to it:

```rust
use std::collections::HashSet;

let mut hs = HashSet::new();
hs.insert("a");
hs.insert("b");
```

These are some of the main collection types in Rust. Each of them can be quite useful depending on what you're trying to achieve in your program.

### BTreeMap

A `BTreeMap` is a map sorted by its keys. It allows you to get a range of entries on-demand, which is useful when you're interested in the smallest or largest key-value pair, or you want to find the largest or smallest key that is smaller or larger than a certain value.

```rust
use std::collections::BTreeMap;

let mut btree_map = BTreeMap::new();
btree_map.insert(3, "c");
btree_map.insert(2, "b");
btree_map.insert(1, "a");

for (key, value) in &btree_map {
    println!("{}: {}", key, value);
}
```

In the example above, the keys are sorted in ascending order when printed out, despite being inserted in a different order.

### BTreeSet

The `BTreeSet` is essentially a `BTreeMap` where you just want to remember which keys you've seen and there's no meaningful value to associate with your keys. It's useful when you just want a set.

```rust
use std::collections::BTreeSet;

let mut btree_set = BTreeSet::new();
btree_set.insert("orange");
btree_set.insert("banana");
btree_set.insert("apple");

for fruit in &btree_set {
    println!("{}", fruit);
}
```

In the example above, the fruits are printed out in lexicographic order (i.e., alphabetical order), despite being inserted in a different order.

### BinaryHeap

A `BinaryHeap` is a priority queue. It allows you to store a bunch of elements but only ever process the "biggest" or "most important" one at any given time. This structure is useful when you want a priority queue.

```rust
use std::collections::BinaryHeap;

let mut binary_heap = BinaryHeap::new();
binary_heap.push(1);
binary_heap.push(5);
binary_heap.push(2);

println!("{}", binary_heap.peek().unwrap());  // prints: 5
```

In the example above, despite being inserted in a different order, the "peek" operation retrieves the largest number in the heap.

# Control Flow

Rust provides several constructs to control the flow of execution in your program, including `if`, `else`, `loop`, `while`, `for`, and `match`.

## if-else

The `if` keyword allows you to branch your code depending on conditions. `else` and `else if` can be used for alternative conditions.

```rust
let number = 7;

if number < 5 {
    println!("condition was true");
} else {
    println!("condition was false");
}
```

## loop

The `loop` keyword gives you an infinite loop. To stop the loop, you can use the `break` keyword.

```rust
let mut counter = 0;

loop {
    counter += 1;

    if counter == 10 {
        break;
    }
}
```

## while

The `while` keyword can be used to loop while a condition is true.

```rust
let mut number = 3;

while number != 0 {
    println!("{}!", number);

    number -= 1;
}
```

## for

The `for` keyword allows you to loop over elements of a collection.

```rust
let a = [10, 20, 30, 40, 50];

for element in a.iter() {
    println!("the value is: {}", element);
}
```

## match

The `match` keyword allows you to compare a value against a series of patterns and then execute code based on which pattern matches.

```rust
let value = 1;

match value {
    1 => println!("one"),
    2 => println!("two"),
    _ => println!("something else"),
}
```

Each of these control flow constructs can be used to control the path of execution in your Rust programs, making them more flexible and dynamic.
