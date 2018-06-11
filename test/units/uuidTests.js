'use strict';

const assert = require('assertthat');

const uuidv4 = require('../../src/uuidv4');

suite('uuidv4', () => {
  test('is a function', async () => {
    assert.that(uuidv4).is.ofType('function');
  });

  test('returns a v4 UUID.', async () => {
    const uuid = uuidv4();

    assert.that(uuid).is.ofType('string');
    assert.that(uuidv4.regex.test(uuid)).is.true();
  });

  test('returns a different v4 UUID on each call.', async () => {
    const uuid = uuidv4(),
          uuidOther = uuidv4();

    assert.that(uuid).is.not.equalTo(uuidOther);
  });

  suite('regex', () => {
    test('is a regular expression that describes a v4 UUID.', async () => {
      assert.that(uuidv4.regex).is.equalTo(/[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[89aAbB][a-f0-9]{3}-[a-f0-9]{12}/);
    });
  });

  suite('is', () => {
    test('throws an error if value is missing.', async () => {
      assert.that(() => {
        uuidv4.is();
      }).is.throwing('Value is missing.');
    });

    test('returns true if a v4 UUID is given.', async () => {
      assert.that(uuidv4.is('9afb733b-5001-4275-a099-03a1d2cca51e')).is.true();
    });

    test('returns false if no v4 UUID is given.', async () => {
      assert.that(uuidv4.is('definitely-not-a-uuid')).is.false();
    });
  });

  suite('fromString', () => {
    test('is a function.', async () => {
      assert.that(uuidv4.fromString).is.ofType('function');
    });

    test('throws an error if no text is given.', async () => {
      assert.that(() => {
        uuidv4.fromString();
      }).is.throwing('Text is missing.');
    });

    test('returns a v4 UUID that is derived from the SHA1 of the given text.', async () => {
      const uuid = uuidv4.fromString('the native web');

      assert.that(uuid).is.equalTo('cc762e69-089e-4239-8b06-1ab26a005319');
      assert.that(uuidv4.regex.test(uuid)).is.true();
    });
  });

  suite('empty', () => {
    test('is a function.', async () => {
      assert.that(uuidv4.empty).is.ofType('function');
    });

    test('returns 00000000-0000-0000-0000-000000000000.', async () => {
      assert.that(uuidv4.empty()).is.equalTo('00000000-0000-0000-0000-000000000000');
    });
  });
});
