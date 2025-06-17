---
postUuid: 514c12ba-cf6a-4f62-a788-aab101621070
title: From JavaScript to TypeScript
slug: from-javascript-to-typescript
tags:
  - TypeScript
  - TS
  - JavaScript
  - JS
categories:
  - Frontend
---

When there is a reference to `terminal` in the text below and Windows is used as an operating system, it means that the command needs to be executed in `Git Bash`. If CTRL+V does not work to paste the copied content in the terminal, try SHIFT+INSERT.

## What is TypeScript?

TypeScript is a `strongly typed` programming language. Unlike JavaScript, which is a `weakly typed` programming language.
Does this mean there is a need to learn a whole new language from scratch? Not at all! All JavaScript code is also valid TypeScript code. TypeScript is a superset of JavaScript, it provides extra syntax on top of JavaScript to achieve `type safety`.

An example.

JavaScript - index.js

```js
let fullName;
fullName = "Bart";

function sayHello(name, age) {
  return `Hello ${name}, you are ${age} years old!`;
}

const result = sayHello(fullName, 30);
console.log(result);
```

TypeScript - index.ts

```js
let fullName: string;
fullName = "Bart";

function sayHello(name: string, age: number): string {
  return `Hello ${name}`;
}

const result = sayHello(fullName, 30);
console.log(result);
```

There are two differences between TypeScript and JavaScript.

1. Types got assigned to variables:

- `: string` behind the variable `fullName`, the parameter `name` and the function `sayHello`.
- `: number` behind the parameter `age`.

2. The file name extension is `.ts` instead of `.js`.

## But the web browser only works with HTML, CSS and JavaScript, right?

Correct! TypeScript will be compiled into JavaScript. In most modern frameworks this will be done automatically. To get a better understanding of this, let's look at an example.

**Create a new directory to work in and cd into it.**

```sh
mkdir typescript-example && cd $_
```

Explaining the command:

- `mkdir typescript-example` create a new directory named `typescript-example`.
- `&&` will execut both commands one after the other.
- `cd` is **c**hange **d**irectory.
- `$_` refers to the directory that was created.

**Make the directory an `npm` project.**

```sh
npm init
```

Hit `Enter` on all the questions that occur.

There is a `package.json` file present, this means this is an `npm` project which allows the installation of dependencies. Dependencies are software created by other developers, available on [npm](https://www.npmjs.com/).

In order to be able to use TypeScript, it is necessary to install the `typescript` package.

```sh
npm install --save-dev typescript
```

Note: In case a dependency is only necessary for development, it is possible to install it as a `devDependency`. This can be done by using `--save-dev`. In case it is also necessary in production, install it without the `--save-dev` flag. This will add the dependency to the property `dependencies` in the `package.json` file`

This provides the `tsc` command, which is available in `npm` scripts.

An extra script can be added to the `package.json` file.

```sh
{
  "name": "test",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "compile": "tsc index.ts",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}
```

The line `"compile": "tsc index.ts",` is new.

Note: A `package-lock.json` has been added. This file is used to keep track of the dependencies of the project, and is automatically updated when the dependencies change.
Note: A `node_modules` directory has been added. This directory is used to store the dependencies of the project. This contains the software that got installed when `npm install --save-dev typescript` was executed.
Note: In case no `node_modules` directory is present, but there is a `package.json` that contains `dependencies` or `devDependencies`, then `npm install` will install the dependencies and save them in the `node_modules` directory.

**Add an `index.ts` file.**

```sh
touch index.ts
```

Since all JavaScript is valid TypeScript, JavaScript can be placed in the `index.ts` file.

```js
let fullName;
fullName = "Bart";

function sayHello(name, age) {
  return `Hello ${name}, you are ${age} years old!`;
}

const result = sayHello(fullName);
console.log(result);
```

Then the TypeScript file can be compiled using the TypeScript compiler to get a JavaScript file.

```sh
npm run compile
```

The output in the terminal after executing the command above:

```sh
> test@1.0.0 compile
> tsc index.ts

index.ts:8:19 - error TS2554: Expected 2 arguments, but got 1.

8 const result = sayHello(fullName);
                 ~~~~~~~~~~~~~~~~~

  index.ts:4:25
    4 function sayHello(name, age) {
                              ~~~
    An argument for 'age' was not provided.


Found 1 error.
```

The TypeScript comiler sees that two parameters are necessary for the function `sayHello`, but only one is provided. Even though this shows an error, the compiler still compiles the code and the resulting JavaScript file `index.js` is created.

The content of this file:

```js
var fullName;
fullName = "Bart";
function sayHello(name, age) {
  return "Hello " + name + ", you are " + age + " years old!";
}
var result = sayHello(fullName);
console.log(result);
```

JavaScript can be executed with `NodeJS`:

```sh
node index.js
```

This gives the following as output in the terminal:

```sh
Hello Bart, you are undefined years old!
```

The `undefined` is not the output developers want to see!

Here the power of TypeScript becomes clear, even without adding typings. The TypeScript compiler already mentioned that two parameters were expected and that only one was provided. Even before JavaScript is executed, the developer can see that something is wrong.

Content of index.ts after adding the second parameter:

```js
let fullName;
fullName = "Bart";

function sayHello(name, age) {
  return `Hello ${name}, you are ${age} years old!`;
}

const result = sayHello(fullName, 30);
console.log(result);
```

Compile the TypeScript file again with the TypeScript compiler:

```sh
npm run compile
```

This has the following output in the terminal:

```sh
> test@1.0.0 compile
> tsc index.ts
```

No errors anymore! And executing the JavaScript file again no longer has `undefined` in the result:

```sh
node index.js
```

Output:

```sh
Hello Bart, you are 30 years old!
```

**Adding typings in the TypeScript file.**

Changes in the file:

- `: string` and `: number` typings have beend added to the variable `fullName`, the parameters `name` and `age` and a type has beend add to the function `sayHello`.
- The arguments have been swapped when calling the function.
- The second parameter has a spelling error, it says `fulName` instead of `fullName`.

```js
let fullName: string;
fullName = "Bart";

function sayHello(name: string, age: number): string {
  return `Hello ${name}, you are ${age} years old!`;
}

const result = sayHello(30, fulName);
console.log(result);
```

Compile the `index.ts` file, this has the following output:

```sh
> test@1.0.0 compile
> tsc index.ts

index.ts:8:28 - error TS2345: Argument of type 'number' is not assignable to parameter of type 'string'.

8 const result = sayHello(30, fulName);
                          ~~

index.ts:8:32 - error TS2552: Cannot find name 'fulName'. Did you mean 'fullName'?

8 const result = sayHello(30, fulName);
                              ~~~~~~~

  index.ts:1:5
    1 let fullName: string;
          ~~~~~~~~
    'fullName' is declared here.


Found 2 errors.
```

Because the parameters now have types assigned to them, the compiler can now check the types. The compiler notices that it is not possible to assign a number to the first argument. The compiler also notices that `fulName` does not exist and has the suggestion to change it to `fullName`.

Changes in the file:

- The arguments are swapped when calling the function.
- `fulName` has been changed into `fullName`.

```js
let fullName: string;
fullName = "Bart";

function sayHello(name: string, age: number): string {
  return `Hello ${name}, you are ${age} years old!`;
}

const result = sayHello(fullName, 30);
console.log(result);
```

Compiling no longer gives any errors.

## Conclusion

All JavaScript is valid TypeScript. TypeScript adds extra functionality to make the life of developers easier, mistakes like passing wrong types are detected at compile time. Since browsers only support JavaScript, not TypeScript, it is necessary to compile TypeScript to JavaScript.
