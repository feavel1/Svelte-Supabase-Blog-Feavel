---
layout: post
author: Feavel
date: 2023年7月16日
title: Learn Rust part 4
---

# Concurrency: Threads and Message Passing

Concurrency is a complex but important part of many programs, and Rust provides a number of ways to handle concurrent programming. One approach is to use threads with message passing for communication between them.

Here's how you can create a new thread:

```rust
use std::thread;
use std::time::Duration;

fn main() {
    thread::spawn(|| {
        for i in 1..10 {
            println!("hi number {} from the spawned thread!", i);
            thread::sleep(Duration::from_millis(1));
        }
    });

    for i in 1..5 {
        println!("hi number {} from the main thread!", i);
        thread::sleep(Duration::from_millis(1));
    }
}
```

In this example, we use `thread::spawn` to create a new thread. The new thread prints a message and sleeps for a millisecond in a loop.

But how do we handle communication between threads? Rust's standard library provides channels for this purpose:

```rust
use std::thread;
use std::sync::mpsc;  // mpsc stands for multiple producer, single consumer.

fn main() {
    let (tx, rx) = mpsc::channel();

    thread::spawn(move || {
        let val = String::from("hi");
        tx.send(val).unwrap();
        // println!("val is {}", val);  // This won't compile because `val` has been moved.
    });

    let received = rx.recv().unwrap();
    println!("Got: {}", received);
}
```

In this example, `mpsc::channel` creates a new channel. The `tx` (transmitter) is moved into the new thread, and it sends the string "hi" down the channel. The `rx` (receiver) in the main thread receives the string and prints it.

Rust's threads and message-passing concurrency model enforce that all data sent between threads is thread-safe. The compile-time checks ensure that you don't have data races or other common concurrency problems, which can lead to safer and easier to reason about concurrent code.

# Concurrency: Shared State Concurrency

In addition to message passing, Rust also allows for shared state concurrency through the use of `Mutex` (short for "mutual exclusion") and `Arc` (Atomic Reference Counter).

A `Mutex` provides mutual exclusion, meaning it ensures that only one thread can access some data at any given time. To access the data, a thread must first signal that it wants access by asking the mutex.

`Arc`, on the other hand, is a type of smart pointer that allows multiple owners of the same data and ensures that the data gets cleaned up when all references to it are out of scope.

Here's an example of how to use `Mutex` and `Arc`:

```rust
use std::sync::{Mutex, Arc};
use std::thread;

fn main() {
    let counter = Arc::new(Mutex::new(0));
    let mut handles = vec![];

    for _ in 0..10 {
        let counter = Arc::clone(&counter);
        let handle = thread::spawn(move || {
            let mut num = counter.lock().unwrap();

            *num += 1;
        });
        handles.push(handle);
    }

    for handle in handles {
        handle.join().unwrap();
    }

    println!("Result: {}", *counter.lock().unwrap());
}
```

In this example, we create a counter inside an `Arc<Mutex<T>>` that can be safely shared and mutated across multiple threads. Each thread acquires a lock, increments the counter, and then releases the lock when the `MutexGuard` goes out of scope.

Using these tools, Rust can ensure safe concurrency through compile-time checks, helping to avoid common pitfalls associated with shared state concurrency like race conditions.

# Error Handling: Panic vs. Expect vs. Unwrap

Error handling is crucial in any programming language, and Rust provides several tools for this:

* `panic!`: This macro causes the program to terminate execution, unwinding and cleaning up the stack as it goes.


```rust
fn main() {
    panic!("crash and burn");
}
```

* `unwrap`: This method returns the value inside an `Ok` if the `Result` is `Ok`, and calls the `panic!` macro if the `Result` is `Err`.


```rust
let x: Result<u32, &str> = Err("emergency failure");
x.unwrap(); // This will call panic!
```

* `expect`: This method is similar to `unwrap`, but allows you to specify a panic message.


```rust
let x: Result<u32, &str> = Err("emergency failure");
x.expect("failed to get the value"); // This will call panic with the provided message.
```

While `unwrap` and `expect` are straightforward, they should be used less frequently, as they can cause your program to abruptly terminate. In most cases, you should aim to handle errors gracefully using pattern matching and propagating errors when appropriate.

# Testing

Testing is an essential part of software development, and Rust has first-class support for writing automated tests with the `#[test]` attribute:

```rust
#[cfg(test)]
mod tests {
    #[test]
    fn it_works() {
        assert_eq!(2 + 2, 4);
    }
}
```

In the above code, `#[test]` marks the function as a test function, and `assert_eq!` is a macro that checks if the two arguments are equal, and panics if they're not.

# FFI (Foreign Function Interface)

Rust provides a Foreign Function Interface (FFI) to allow Rust code to interact with code written in other languages. Here's an example of calling a C function from Rust:

```rust
extern "C" {
    fn abs(input: i32) -> i32;
}

fn main() {
    unsafe {
        println!("Absolute value of -3 according to C: {}", abs(-3));
    }
}
```

In this example, the `extern "C"` block defines an interface to the C `abs` function. It's marked `unsafe` because it's up to the programmer to ensure the correctness of the foreign code.

# Macros

Macros in Rust are a way of defining reusable chunks of code. Macros look like functions, except they operate on the code tokens specified as their argument, rather than the values of those tokens.

Here's an example of a simple macro:

```rust
macro_rules! say_hello {
    () => (
        println!("Hello, world!");
    )
}

fn main() {
    say_hello!();
}
```

In this example, `say_hello!` is a macro that prints "Hello, world!". Macros use a different syntax from regular Rust functions, and they're denoted by a `!` after their name. They're a powerful tool for code reuse and metaprogramming in Rust.

# Procedural Macros

Procedural macros in Rust are like functions: they take in code as an input, operate on that code, and produce code as an output. They are more flexible than declarative macros. Here's an example of a derive macro, which is a specific type of procedural macro:

```rust
use proc_macro::TokenStream;
use quote::quote;
use syn::{parse_macro_input, DeriveInput};

#[proc_macro_derive(HelloWorld)]
pub fn hello_world_derive(input: TokenStream) -> TokenStream {
    let ast = parse_macro_input!(input as DeriveInput);

    let gen = quote! {
        impl HelloWorld for #ast {
            fn hello_world() {
                println!("Hello, World! My name is {}", stringify!(#ast));
            }
        }
    };

    gen.into()
}
```

In this example, we create a procedural macro that generates an implementation of a `HelloWorld` trait for the type it's given.

To use this macro, you would first add the crate to your dependencies in your `Cargo.toml`:

```toml
[dependencies]
HelloMacro = "0.1.0"
```

Then, in your Rust code, you would import the macro and apply it to a struct or enum:

```rust
use HelloMacro::HelloMacro;

#[derive(HelloMacro)]
struct Pancakes;

fn main() {
    Pancakes::hello_macro();
}
```

In this example, the `HelloMacro` procedural macro generates a function called `hello_macro` for the `Pancakes` struct. When called, this function prints "Hello, Macro! My name is Pancakes".

Please note that creating a procedural macro involves more complexity than this example shows. Defining the `HelloMacro` procedural macro would require creating a separate crate of type `proc-macro`, and implementing a function that generates the desired code. The `syn` and `quote` crates are commonly used to parse and generate Rust code within procedural macros.
