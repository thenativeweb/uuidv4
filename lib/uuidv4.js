'use strict';

const sha1 = require('sha-1');

// See http://stackoverflow.com/a/2117523/1333873 for details.
const uuidv4 = function () {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, character => {
    /* eslint-disable no-bitwise */
    const randomNumber = Math.random() * 16 | 0,
          result =
            character === 'x' ?
              randomNumber :
              randomNumber & 0x3 | 0x8;
    /* eslint-enable no-bitwise */

    return result.toString(16);
  });
};

uuidv4.regex = /^[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[89aAbB][a-f0-9]{3}-[a-f0-9]{12}$/;

uuidv4.is = function (value) {
  if (!value) {
    throw new Error('Value is missing.');
  }

  return uuidv4.regex.test(value);
};

uuidv4.empty = function () {
  return '00000000-0000-0000-0000-000000000000';
};

uuidv4.fromString = function (text) {
  if (!text) {
    throw new Error('Text is missing.');
  }

  const hash = sha1(text),
        uuid = `${hash.substring(0, 8)}-${hash.substring(8, 12)}-4${hash.substring(13, 16)}-8${hash.substring(17, 20)}-${hash.substring(20, 32)}`;

  return uuid;
};

module.exports = uuidv4;
