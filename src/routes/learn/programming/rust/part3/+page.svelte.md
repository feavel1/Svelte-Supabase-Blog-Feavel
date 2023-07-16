---
layout: post
author: Feavel
date: 2023年7月16日
title: Learn Rust part 3
---

# Ownership, Borrowing, and Lifetimes

Ownership is a key concept in Rust that ensures memory safety without the need for garbage collection. It revolves around three main rules:

1. Each value in Rust has a variable that's called its owner.

2. There can only be one owner at a time.

3. When the owner goes out of scope, the value will be dropped.


```rust
let s1 = String::from("hello");  // s1 becomes the owner of the string.
let s2 = s1;  // s1's ownership is moved to s2.
// println!("{}", s1);  // This won't compile because s1 no longer owns the string.
```

Borrowing is another key concept in Rust, which allows you to have multiple references to a value as long as they're not conflicting. There are two types of borrows: mutable and immutable.

```rust
let s = String::from("hello");
let r1 = &s;  // immutable borrow
let r2 = &s;  // another immutable borrow
// let r3 = &mut s;  // This won't compile because you can't have a mutable borrow while having an immutable one.
```

Lifetimes are a way for the Rust compiler to ensure that references are always valid. It's an advanced concept in Rust and usually, the compiler can infer lifetimes in most cases. But sometimes, you might have to annotate lifetimes yourself:

```rust
fn longest<'a>(x: &'a str, y: &'a str) -> &'a str {
    if x.len() > y.len() {
        x
    } else {
        y
    }
}
```

In the example above, the function `longest` returns the longest of two string slices. The lifetime annotation `'a` indicates that the returned reference will live at least as long as the shortest of the two input lifetimes.

Ownership, Borrowing, and Lifetimes are crucial to understanding how Rust manages memory and ensures safety. The Rust compiler enforces these rules at compile time, which allows for efficient and safe programs.

# Generics

Generics are a way of creating functions or data types that have a broad applicability across different types. They're a fundamental tool for creating reusable code in Rust.

Here's an example of a function that uses generics:

```rust
fn largest<T: PartialOrd>(list: &[T]) -> T {
    let mut largest = list[0];

    for &item in list.iter() {
        if item > largest {
            largest = item;
        }
    }

    largest
}
```

In this example, `T` is the name of our generic data type. `T: PartialOrd` is a trait bound, it means that this function works for any type `T` that implements the `PartialOrd` trait (or in other words, types that can be ordered).

Generics can also be used in struct definitions:

```rust
struct Point<T> {
    x: T,
    y: T,
}
```

In this example, `Point` is a struct that has two fields of type `T`. It means that a `Point` can have any type for `x` and `y` as long as they're the same type.

Generics are checked at compile time, so you have all the power of generics without any runtime cost. They are a powerful tool for writing flexible, reusable code without sacrificing performance.

# Traits

Traits in Rust are a way to define shared behavior across types. You can think of them like interfaces in other languages.

Here's an example of defining a trait and implementing it:

```rust
trait Speak {
    fn speak(&self);
}

struct Dog;
struct Cat;

impl Speak for Dog {
    fn speak(&self) {
        println!("Woof!");
    }
}

impl Speak for Cat {
    fn speak(&self) {
        println!("Meow!");
    }
}
```

In the example above, `Speak` is a trait that defines a method named `speak`. `Dog` and `Cat` are structs that implement the `Speak` trait. This means that we can call the `speak` method on instances of `Dog` and `Cat`.

# Structs

Structs, or structures, are custom data types that let you name and package together multiple related values.

Here's how you can define a struct:

```rust
struct User {
    username: String,
    email: String,
    sign_in_count: u64,
    active: bool,
}
```

And here's how you can create an instance of a struct:

```rust
let user = User {
    email: String::from("someone@example.com"),
    username: String::from("someusername"),
    active: true,
    sign_in_count: 1,
};
```

Structs are used to create complex data types in your program, and they're a fundamental part of any Rust program.

# Modules and Namespaces

Modules in Rust allow you to organize your code into different namespaces. This is useful for readability and preventing naming conflicts.

Here's an example of how to define a module:

```rust
mod front_of_house {
    pub mod hosting {
        pub fn add_to_waitlist() {}
    }
}
```

In the example above, `front_of_house` is a module that contains another module `hosting`. `add_to_waitlist` is a function defined in the `hosting` module.

You can use the `use` keyword to bring a path into scope:

```rust
use crate::front_of_house::hosting;

fn main() {
    hosting::add_to_waitlist();
}
```

In the example above, we use `use` to bring `hosting` into scope, which allows us to call `add_to_waitlist` without the `front_of_house` prefix.

Modules and namespaces are crucial for managing larger codebases and reusing code across different parts of your program.
