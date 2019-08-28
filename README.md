# uuid

uuid creates v4 UUIDs.

## Installation

```shell
$ npm install uuidv4
```

## Quick start

First you need to integrate uuidv4 into your project by using the `require` function:

```javascript
const uuid = require('uuidv4').default;
```

If you use TypeScript, use the following code instead:

```typescript
import uuid from 'uuidv4';
```

Then you can create UUIDs. To do so simply call the `uuid` function:

```javascript
console.log(uuid());
// => '11bf5b37-e0b8-42e0-8dcf-dc8c4aefc000'
```

### Verifying a UUID

To verify whether a given value is a UUID, use the `is` function:

```javascript
console.log(uuid.is('75442486-0878-440c-9db1-a7006c25a39f'));
// => true
```

_Please note that the `is` function returns `true` for both, `v4` and `v5` UUIDs. In addition, `is` returns `true` for `uuid.empty()`._

If you want to perform the verification on your own, use the `regex` property, and access its `v4` or `v5` property, depending on what you need:

```javascript
console.log(uuid.regex.v4);
console.log(uuid.regex.v5);
```

_Please note that the regular expressions also consider `uuid.empty()` to be a valid UUID._

### Getting a UUID from a string

From time to time you need an identifier that looks like a UUID, but is actually inferred from a string. For that, use the `fromString` function, which returns a UUID `v5`:

```javascript
console.log(uuid.fromString('the native web'));
// => 'cdb63720-9628-5ef6-bbca-2e5ce6094f3c'
```

### Getting the empty UUID

If you need a UUID that consists only of zeros, use the `empty` function:

```javascript
console.log(uuid.empty());
// => '00000000-0000-0000-0000-000000000000'
```

## Running the build

To build this module use [roboter](https://www.npmjs.com/package/roboter).

```shell
$ npx roboter
```

## License

The MIT License (MIT)
Copyright (c) 2014-2019 the native web.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
