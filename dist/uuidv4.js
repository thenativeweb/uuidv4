'use strict';

var v4 = require('uuid/v4'),
    v5 = require('uuid/v5');

var uuidv4 = function uuidv4() {
  return v4();
};

uuidv4.regex = {
  v4: /^[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}$/,
  v5: /^[a-f0-9]{8}-[a-f0-9]{4}-5[a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}$/
};

uuidv4.is = function (value) {
  if (!value) {
    return false;
  }

  return uuidv4.regex.v4.test(value) || uuidv4.regex.v5.test(value);
};

uuidv4.empty = function () {
  return '00000000-0000-0000-0000-000000000000';
};

uuidv4.fromString = function (text) {
  if (!text) {
    throw new Error('Text is missing.');
  }

  var namespace = 'bb5d0ffa-9a4c-4d7c-8fc2-0a7d2220ba45';
  var uuidFromString = v5(text, namespace);
  return uuidFromString;
};

module.exports = uuidv4;