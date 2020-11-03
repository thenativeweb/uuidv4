# uuidv4

uuidv4 creates v4 UUIDs.

## Status

| Category         | Status                                                                                              |
| ---------------- | --------------------------------------------------------------------------------------------------- |
| Version          | [![npm](https://img.shields.io/npm/v/uuidv4)](https://www.npmjs.com/package/uuidv4)                 |
| Dependencies     | ![David](https://img.shields.io/david/thenativeweb/uuidv4)                                          |
| Dev dependencies | ![David](https://img.shields.io/david/dev/thenativeweb/uuidv4)                                      |
| Build            | ![GitHub Actions](https://github.com/thenativeweb/uuidv4/workflows/Release/badge.svg?branch=master) |
| License          | ![GitHub](https://img.shields.io/github/license/thenativeweb/uuidv4)                                |

## Please note

This module will be deprecated in the future in favour of module [uuid](https://www.npmjs.com/package/uuid). Most of the functionality of this module is already included in `uuid` since version `8.3.0`, so most of the functions of this module have already been marked as deprecated.

## Installation

```shell
$ npm install uuidv4
```

## Quick start

First you need to integrate uuidv4 into your project by using the `require` function:

```javascript
const { uuid } = require('uuidv4');
```

If you use TypeScript, use the following code instead:

```typescript
import { uuid } from 'uuidv4';
```

Then you can create UUIDs. To do so simply call the `uuid` function:

```javascript
console.log(uuid());
// => '11bf5b37-e0b8-42e0-8dcf-dc8c4aefc000'
```

### Verifying a UUID

To verify whether a given value is a UUID, use the `isUuid` function:

```javascript
import { isUuid } from 'uuidv4';

console.log(isUuid('75442486-0878-440c-9db1-a7006c25a39f'));
// => true
```

_Please note that the `isUuid` function returns `true` for both, `v4` and `v5` UUIDs. In addition, `isUuid` returns `true` for `empty()`._

#### Using a regular expression

If you want to perform the verification on your own using a regular expression, use the `regex` property, and access its `v4` or `v5` property, depending on what you need:

```javascript
import { regex } from 'uuidv4';

console.log(regex.v4);
console.log(regex.v5);
```

_Please note that the regular expressions also consider `empty()` to be a valid UUID._

#### Using a JSON schema

If you want to perform the verification on your own using a JSON schema, use the `jsonSchema` property, and access its `v4` or `v5` property, depending on what you need:

```javascript
import { jsonSchema } from 'uuidv4';

console.log(jsonSchema.v4);
console.log(jsonSchema.v5);
```

_Please note that the JSON schemas also consider `empty()` to be a valid UUID._

### Getting a UUID from a string

From time to time you need an identifier that looks like a UUID, but is actually inferred from a string. For that, use the `fromString` function, which returns a UUID `v5`:

```javascript
import { fromString } from 'uuidv4';

console.log(fromString('the native web'));
// => 'cdb63720-9628-5ef6-bbca-2e5ce6094f3c'
```

By default, the `fromString` function uses a pre-configured namespace. If you want to use your own namespace, provide a UUID as second parameter:

```javascript
import { fromString } from 'uuidv4';

console.log(fromString('the native web', '004aadf4-8e1a-4450-905b-6039179f52da'));
// => 'b1c4a89e-4905-5e3c-b57f-dc92627d011e'
```

### Getting the empty UUID

If you need a UUID that consists only of zeros, use the `empty` function:

```javascript
import { empty } from 'uuidv4';

console.log(empty());
// => '00000000-0000-0000-0000-000000000000'
```

## Running quality assurance

To run quality assurance for this module use [roboter](https://www.npmjs.com/package/roboter):

```shell
$ npx roboter
```
