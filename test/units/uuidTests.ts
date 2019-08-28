import assert from 'assertthat';
import uuidv4 from '../../lib/uuidv4';

suite('uuidv4', (): void => {
  test('is a function.', async (): Promise<void> => {
    assert.that(uuidv4).is.ofType('function');
  });

  test('returns a v4 UUID.', async (): Promise<void> => {
    const uuid = uuidv4();

    assert.that(uuid).is.ofType('string');
    assert.that(uuidv4.regex.v4.test(uuid)).is.true();
  });

  test('returns a different v4 UUID on each call.', async (): Promise<void> => {
    const uuid = uuidv4(),
          uuidOther = uuidv4();

    assert.that(uuid).is.not.equalTo(uuidOther);
  });

  suite('regex', (): void => {
    test('is an object.', async (): Promise<void> => {
      assert.that(uuidv4.regex).is.ofType('object');
    });

    suite('v4', (): void => {
      test('is a regular expression that describes a UUID v4.', async (): Promise<void> => {
        assert.that(uuidv4.regex.v4).is.equalTo(/^(?:[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12})|(?:0{8}-0{4}-0{4}-0{4}-0{12})$/u);
      });
    });

    suite('v5', (): void => {
      test('is a regular expression that describes a UUID v5.', async (): Promise<void> => {
        assert.that(uuidv4.regex.v5).is.equalTo(/^(?:[a-f0-9]{8}-[a-f0-9]{4}-5[a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12})|(?:0{8}-0{4}-0{4}-0{4}-0{12})$/u);
      });
    });
  });

  suite('is', (): void => {
    test('returns true if a UUID v4 is given.', async (): Promise<void> => {
      assert.that(uuidv4.is('9afb733b-5001-4275-a099-03a1d2cca51e')).is.true();
    });

    test('returns true if a UUID v5 is given.', async (): Promise<void> => {
      assert.that(uuidv4.is('cdb63720-9628-5ef6-bbca-2e5ce6094f3c')).is.true();
    });

    test('returns true if an empty UUID is given.', async (): Promise<void> => {
      assert.that(uuidv4.is('00000000-0000-0000-0000-000000000000')).is.true();
    });

    test('returns false if no UUID v4 or v5 is given.', async (): Promise<void> => {
      assert.that(uuidv4.is('definitely-not-a-uuid')).is.false();
    });
  });

  suite('fromString', (): void => {
    test('is a function.', async (): Promise<void> => {
      assert.that(uuidv4.fromString).is.ofType('function');
    });

    test('returns a UUID v5 that is derived from the given text.', async (): Promise<void> => {
      const uuid = uuidv4.fromString('the native web');

      assert.that(uuid).is.equalTo('cdb63720-9628-5ef6-bbca-2e5ce6094f3c');
      assert.that(uuidv4.regex.v5.test(uuid)).is.true();
    });
  });

  suite('empty', (): void => {
    test('is a function.', async (): Promise<void> => {
      assert.that(uuidv4.empty).is.ofType('function');
    });

    test('returns 00000000-0000-0000-0000-000000000000.', async (): Promise<void> => {
      assert.that(uuidv4.empty()).is.equalTo('00000000-0000-0000-0000-000000000000');
    });
  });
});
