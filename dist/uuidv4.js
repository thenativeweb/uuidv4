'use strict';

var sha1 = require('sha-1'),
    uuid = require('uuid/v4');

var uuidv4 = function uuidv4() {
  return uuid();
};

uuidv4.regex = /^[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[89aAbB][a-f0-9]{3}-[a-f0-9]{12}$/;

uuidv4.is = function (value) {
  if (!value) {
    return false;
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

  var hash = sha1(text),
      uuidFromString = hash.substring(0, 8) + '-' + hash.substring(8, 12) + '-4' + hash.substring(13, 16) + '-8' + hash.substring(17, 20) + '-' + hash.substring(20, 32);

  return uuidFromString;
};

module.exports = uuidv4;