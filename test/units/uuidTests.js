'use strict';

const assert = require('assertthat');

const uuidv4 = require('../../lib/uuidv4');

suite('uuidv4', () => {
  test('returns a v4 UUID.', done => {
    const uuidRegex = /[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[89aAbB][a-f0-9]{3}-[a-f0-9]{12}/;

    const uuid = uuidv4();

    assert.that(uuid).is.ofType('string');
    assert.that(uuidRegex.test(uuid)).is.true();
    done();
  });

  test('returns a different v4 UUID on each call.', done => {
    const uuid = uuidv4(),
          uuidOther = uuidv4();

    assert.that(uuid).is.not.equalTo(uuidOther);
    done();
  });

  suite('empty', () => {
    test('returns 00000000-0000-0000-0000-000000000000.', done => {
      assert.that(uuidv4.empty()).is.equalTo('00000000-0000-0000-0000-000000000000');
      done();
    });
  });
});
