'use strict';

var assert = require('node-assertthat');

var uuid = require('../lib/uuid');

suite('uuid', function () {
  test('returns a UUID.', function () {
    var uuidRegex = /[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[89aAbB][a-f0-9]{3}-[a-f0-9]{12}/;

    var actual = uuid();

    assert.that(actual, is.ofType('string'));
    assert.that(uuidRegex.test(actual), is.true());
  });

  test('returns a different UUID on each call.', function () {
    var actualFirst = uuid(),
        actualSecond = uuid();

    assert.that(actualFirst, is.not.equalTo(actualSecond));
  });
});
