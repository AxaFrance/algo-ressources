# Code golfing

According to wikipedia:

> Code golf is a type of recreational computer programming competition in which participants strive to achieve the shortest possible source code that implements a certain algorithm.

## Tips in JS

### Casting

To cast a string into an integer you can divide by one:

```js
input="2";
console.log(input / 1 + 2); //will print 4
console.log(input + 2); //will print 22
```

### Use print instead of console.log

```js
print("test"); //shorter than console.log("test")
```

### Tagged templates

You can cleverly use [tag templates](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#Tagged_templates) to save a few characters when calling functions with string parameters:

```js
r="string".split``; //equivalent to "string".split("")
print(r); //(6) ["s", "t", "r", "i", "n", "g"]
```

### Saving readline if used several times (or other functions)

readline is 8 characters long. If you need to use it more than twice, save it in a variable:

```js
r=readline;
a=r();
b=r();
```

You can also save a series of calls:

```js
r=()=>readline().split` `;
a=r();
b=r();
```
