---
layout: post
author: Feavel
date: 2023年7月16日
title: Learn Rust part 5
---


# Rust's Built-In Traits

Rust has several built-in traits that have special meaning to the Rust compiler, such as `Copy`, `Drop`, `Deref`, and more.

For instance, the `Copy` trait signifies that a type's values can be duplicated simply by copying bits. If a type implements `Copy`, it can be duplicated without the original value being "moved". On the other hand, the `Drop` trait is used to specify what happens when a value of the type goes out of scope.

1. `Clone` and `Copy`: The `Clone` trait is used for types that need to implement a method for creating a duplicate of an instance. If the duplication process is straightforward (i.e., just copying bits), the `Copy` trait can be used.

    ```rust
    #[derive(Clone, Copy)]
    struct Point {
        x: i32,
        y: i32,
    }
    ```

2. `Drop`: This trait allows you to customize what happens when a value goes out of scope. This is particularly useful when your type is managing a resource (like memory or a file) and you need to clean up when you're done with it.

    ```rust
    struct Droppable {
        name: &'static str,
    }

    impl Drop for Droppable {
        fn drop(&mut self) {
            println!("{} is being dropped.", self.name);
        }
    }
    ```

3. `Deref` and `DerefMut`: These traits are used for overloading dereference operators. `Deref` is used for overloading immutable dereference operators, while `DerefMut` is used for overloading mutable dereference operators.

    ```rust
    use std::ops::Deref;
    struct DerefExample<T> {
        value: T,
    }

    impl<T> Deref for DerefExample<T> {
        type Target = T;
        fn deref(&self) -> &T {
            &self.value
        }
    }
    ```

4. `PartialEq` and `Eq`: These traits are used for comparing objects for equivalence. `PartialEq` allows partial comparison, while `Eq` requires full equivalence (i.e., it requires that every value must be equivalent to itself).

    ```rust
    #[derive(PartialEq, Eq)]
    struct EquatableExample {
        x: i32,
    }
    ```

5. `PartialOrd` and `Ord`: These traits are used for comparing objects for ordering. `PartialOrd` allows partial comparison, while `Ord` requires a total ordering.

    ```rust
    #[derive(PartialOrd, Ord)]
    struct OrderableExample {
        x: i32,
    }
    ```

6. `AsRef` and `AsMut`: These traits are used for cheap reference-to-reference conversions. `AsRef` is used for converting to an immutable reference, while `AsMut` is used for converting to a mutable reference.

    ```rust
    fn print_length<T: AsRef<str>>(s: T) {
        println!("{}", s.as_ref().len());
    }
    ```


These are just a few examples of the built-in traits available in Rust. There are many more, each serving a specific purpose. It's one of the ways Rust enables polymorphism.

# Iterators and Closures

An iterator is a way of producing a sequence of values, usually in a loop. Here's an example:

```rust
let v1 = vec![1, 2, 3];
let v1_iter = v1.iter();

for val in v1_iter {
    println!("Got: {}", val);
}
```

A closure is an anonymous function that can capture its environment. Here's an example:

```rust
let x = 4;
let equal_to_x = |z| z == x;
let y = 4;
assert!(equal_to_x(y));
```

# Async Programming with Rust

Rust's `async/.await` syntax makes asynchronous programming in Rust much more ergonomic. Here's an example:

```rust
async fn hello_world() {
    println!("hello, world!");
}

fn main() {
    let future = hello_world(); // Nothing is printed
    futures::executor::block_on(future); // "hello, world!" is printed
}
```

# Pin and Unpin in Rust

`Pin` is a marker type that indicates that the value it wraps must not be moved out of it. This is useful for self-referential structs and other cases where it is not to be moved.

`Unpin` is an auto trait that indicates that the type it is implemented for can be safely moved out of.

1. `Pin`: The `Pin` type is a wrapper which makes the value it wraps unmovable. This means that, once a value is pinned, it can no longer be moved elsewhere, and its memory address will not change. This can be useful when working with certain kinds of unsafe code that needs to have stable addresses, such as when building self-referential structs or when dealing with async programming.

    Here's an example of pinning a value:

    ```rust
    let mut x = 5;
    let mut y = Box::pin(x);

    let mut z = y.as_mut();
    *z = 6;

    assert_eq!(*y, 6);
    ```

    In the above example, `y` is a pinned `Box` containing the value `5`. When we get a mutable reference to `y` with `y.as_mut()`, we can change the value in the `Box`, but we can't change `y` to point to something else. The value inside `y` is "pinned".

2. `Unpin`: The `Unpin` trait is an "auto trait" (a trait automatically implemented by the Rust compiler) that is implemented for all types which do not have any pinned fields, essentially making it safe to move these types around.

    Here's an example of an `Unpin` type:

    ```rust
    struct MyStruct {
        field: i32,
    }
    ```

    In the above example, `MyStruct` is `Unpin` because all of its fields are `Unpin`. This means that it is safe to move `MyStruct` around in memory.


The `Pin` and `Unpin` traits are key parts of Rust's ability to safely handle memory and ensure that references to objects remain valid. They are used extensively in advanced Rust programming, such as when working with `async/await` or other forms of 'self-referential' structures.