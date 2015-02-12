'use strict';

var assert = require('assertthat');

var uuidv4 = require('../lib/uuidv4');

suite('uuidv4', function () {
  test('returns a v4 UUID.', function (done) {
    var uuidRegex = /[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[89aAbB][a-f0-9]{3}-[a-f0-9]{12}/;

    var actual = uuidv4();

    assert.that(actual).is.ofType('string');
    assert.that(uuidRegex.test(actual)).is.true();
    done();
  });

  test('returns a different v4 UUID on each call.', function (done) {
    var actualFirst = uuidv4(),
        actualSecond = uuidv4();

    assert.that(actualFirst).is.not.equalTo(actualSecond);
    done();
  });

  suite('empty', function () {
    test('returns 00000000-0000-0000-0000-000000000000.', function (done) {
      assert.that(uuidv4.empty()).is.equalTo('00000000-0000-0000-0000-000000000000');
      done();
    });
  });
});
