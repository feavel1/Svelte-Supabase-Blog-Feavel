---
layout: post
author: Feavel
date: 2023年7月16日
title: Learn Rust part 2
---

# Functions

A function is a named sequence of statements that takes a set of inputs, performs computations or actions, and optionally returns a value. The inputs to a function are called parameters, and the output it returns is called its return value.

## Defining and Calling a Function

Functions are defined with the `fn` keyword. The general form of a function looks like this:

```rust
fn function_name(param1: Type1, param2: Type2, ...) -> ReturnType {
    // function body
}
```

Here's an example of a simple function that takes two integers and returns their sum:

```rust
fn add_two_numbers(x: i32, y: i32) -> i32 {
    x + y  // no semicolon here, this is a return statement
}
```

And here's how you would call this function:

```rust
let sum = add_two_numbers(5, 6);
println!("The sum is: {}", sum);
```

## Function Parameters

Parameters are a way to pass values into functions. The parameters are specified in the function definition, and when the function is called, these parameters will contain the values that are passed in.

Here's an example of a function with parameters:

```rust
fn print_sum(a: i32, b: i32) {
    let sum = a + b;
    println!("The sum of {} and {} is: {}", a, b, sum);
}
```

## Returning Values from Functions

Functions can return values. In Rust, the return value of a function is synonymous with the value of the final expression in the block of the body of a function. You can return early from a function by using the `return` keyword and specifying a value, but most functions return the last expression implicitly.

Here's a function that returns a boolean value:

```rust
fn is_even(num: i32) -> bool {
    num % 2 == 0
}
```

In Rust, functions create a new scope for variables, which can lead to concepts such as shadowing and ownership, which are crucial aspects of Rust's system for managing memory.

# Error Handling

Rust groups errors into two major categories: recoverable and unrecoverable errors. For a recoverable error, such as a file not found error, it’s reasonable to report the problem to the user and retry the operation. Unrecoverable errors are always symptoms of bugs, like trying to access a location beyond the end of an array.

Rust doesn’t have exceptions. Instead, it has the type `Result<T, E>` for recoverable errors and the `panic!` macro that stops execution when the program encounters an unrecoverable error.

Here's a basic example of using `Result`:

```rust
fn division(dividend: f64, divisor: f64) -> Result<f64, String> {
    if divisor == 0.0 {
        Err(String::from("Can't divide by zero"))
    } else {
        Ok(dividend / divisor)
    }
}
```

And here's how you might handle the `Result`:

```rust
match division(4.0, 2.0) {
    Ok(result) => println!("The result is {}", result),
    Err(msg) => println!("Error: {}", msg),
}
```

However, Rust provides the `?` operator that can be used in functions that return `Result`, which makes error handling more straightforward:

```rust
fn main() -> Result<(), Box<dyn std::error::Error>> {
    let result = division(4.0, 0.0)?;
    println!("The result is {}", result);
    Ok(())
}
```

In the example above, if the `division` function returns `Err`, the error will be returned from the `main` function. If it returns `Ok`, the value inside the `Ok` will get assigned to `result`.

In addition to the standard error types provided by Rust, you can define your own error types.

```rust
enum MyError {
    Io(std::io::Error),
    Parse(std::num::ParseIntError),
}

impl From<std::io::Error> for MyError {
    fn from(err: std::io::Error) -> MyError {
        MyError::Io(err)
    }
}

impl From<std::num::ParseIntError> for MyError {
    fn from(err: std::num::ParseIntError) -> MyError {
        MyError::Parse(err)
    }
}
```

# Advanced Error Handling

For more advanced error handling, we can leverage the `thiserror` crate to simplify the process. The `thiserror` crate automates much of the process of creating custom error types and implementing the `Error` trait for them.

First, add `thiserror` to your `Cargo.toml` dependencies:

```toml
[dependencies]
thiserror = "1.0.40"
```

Then, you can use `#[derive(thiserror::Error)]` to create your own custom error type:

```rust
use thiserror::Error;

#[derive(Error, Debug)]
pub enum MyError {
    #[error("I/O error: {0}")]
    Io(#[from] std::io::Error),
    #[error("Parse error: {0}")]
    Parse(#[from] std::num::ParseIntError),
    // Add other error variants here as needed
}
```

With this error type, the `Io` and `Parse` variants are automatically created from `std::io::Error` and `std::num::ParseIntError` respectively thanks to the `#[from]` attribute. The `#[error("...")]` attribute specifies the error message.

You can use this custom error type in functions that return `Result`:

```rust
use std::fs::File;

fn read_file() -> Result<(), MyError> {
    let _file = File::open("non_existent_file.txt")?;
    Ok(())
}
```

To ensure your code is future-proof against changes to the `Error` enum, Rust has the `#[non_exhaustive]` attribute. When this is added to your enum, it becomes non-exhaustive, and can therefore be extended with additional variants in future versions of the library:

```rust
#[non_exhaustive]
pub enum Error {
    Io(std::io::Error),
    Parse(std::num::ParseIntError),
    // potentially more variants in the future
}
```

Now, when matching on this `Error` enum outside of the crate it's defined in, Rust will enforce that a `_` case is included:

```rust
match error {
    Error::Io(err) => println!("I/O error: {}", err),
    Error::Parse(err) => println!("Parse error: {}", err),
    _ => println!("Unknown error"),
}
```

This advanced error handling approach provides a robust and flexible way to manage errors in Rust, particularly for library authors.

# Enums and Pattern Matching

Enums, short for enumerations, allow you to define a type by enumerating its possible values. Here's a basic example of an enum:

```rust
enum Direction {
    North,
    South,
    East,
    West,
}
```

Each variant of an enum is a type on its own. You can associate data with enum variants:

```rust
enum OptionalInt {
    Value(i32),
    Missing,
}
```

Rust has a powerful feature called pattern matching which allows you to check for different cases with a clean syntax. Here's how you can use pattern matching with enums:

```rust
let direction = Direction::North;

match direction {
    Direction::North => println!("We are heading north!"),
    Direction::South => println!("We are heading south!"),
    Direction::East => println!("We are heading east!"),
    Direction::West => println!("We are heading west!"),
}
```

Pattern matching in Rust is exhaustive: we must exhaust every last possibility in order for the code to be valid, otherwise the code will not compile. This feature is especially useful when dealing with enums as we are forced to handle all variants.

Rust also provides the `if let` construct as a more concise alternative to `match` where only one case is of interest:

```rust
let optional = OptionalInt::Value(5);

if let OptionalInt::Value(i) = optional {
    println!("Value is: {}", i);
} else {
    println!("Value is missing");
}
```

In the example above, `if let` allows you to extract `Value(i)` from `optional` and print it, or print "Value is missing" if `optional` is `OptionalInt::Missing`.

Enum variants can also have methods with the `impl` keyword:

```rust
enum Message {
    Quit,
    ChangeColor(i32, i32, i32),
    Write(String),
}

impl Message {
    fn call(&self) {
        // method body
    }
}

let m = Message::Write(String::from("hello"));
m.call();
```

In this example, we define a method named `call` on the `Message` enum and then use it for a `Message::Write` instance.

Enums in Rust are extremely versatile and with pattern matching, they offer a high degree of control flow in your program.

## Non-exhaustive Enums and Structs

The `#[non_exhaustive]` attribute in Rust is a useful feature that ensures an enum or a struct is not exhaustively matched upon outside of the crate it is defined in. This is particularly useful for library authors who may need to add more variants or fields to an enum or struct in the future without breaking existing code.

```rust
#[non_exhaustive]
pub enum Error {
    Io(std::io::Error),
    Parse(std::num::ParseIntError),
    // potentially more variants in the future
}
```

In the example above, the `Error` enum is non-exhaustive, which means it can be extended with additional variants in future versions of the library it's defined in. When matching on a non-exhaustive enum outside of its defining crate, you must include a `_` case to handle potential future variants:

```rust
match error {
    Error::Io(err) => println!("I/O error: {}", err),
    Error::Parse(err) => println!("Parse error: {}", err),
    _ => println!("Unknown error"),
}
```

If the `_` case is not included, the code won't compile. This helps to ensure that your code is future-proof against changes to the `Error` enum.

The `#[non_exhaustive]` attribute can also be used with structs to prevent them from being destructured outside their defining crate, ensuring future fields can be added without breaking existing code.

This feature of Rust provides a degree of forward compatibility and makes it possible to extend enums and structs in libraries without causing breaking changes.
