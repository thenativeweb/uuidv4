import { assert } from 'assertthat';
import { empty, fromString, isUuid, regex, uuid } from '../../lib/uuidv4';

suite('uuid', (): void => {
  test('returns a v4 UUID.', async (): Promise<void> => {
    const someUuid = uuid();

    assert.that(someUuid).is.ofType('string');
    assert.that(regex.v4.test(someUuid)).is.true();
  });

  test('returns a different v4 UUID on each call.', async (): Promise<void> => {
    const someUuid = uuid(),
          someUuidOther = uuid();

    assert.that(someUuid).is.not.equalTo(someUuidOther);
  });

  suite('regex', (): void => {
    suite('v4', (): void => {
      test('is a regular expression that describes a UUID v4.', async (): Promise<void> => {
        assert.that(regex.v4).is.equalTo(/^(?:[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12})|(?:0{8}-0{4}-0{4}-0{4}-0{12})$/u);
      });
    });

    suite('v5', (): void => {
      test('is a regular expression that describes a UUID v5.', async (): Promise<void> => {
        assert.that(regex.v5).is.equalTo(/^(?:[a-f0-9]{8}-[a-f0-9]{4}-5[a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12})|(?:0{8}-0{4}-0{4}-0{4}-0{12})$/u);
      });
    });
  });

  suite('isUuid', (): void => {
    test('returns true if a UUID v4 is given.', async (): Promise<void> => {
      assert.that(isUuid('9afb733b-5001-4275-a099-03a1d2cca51e')).is.true();
    });

    test('returns true if a UUID v5 is given.', async (): Promise<void> => {
      assert.that(isUuid('cdb63720-9628-5ef6-bbca-2e5ce6094f3c')).is.true();
    });

    test('returns true if an empty UUID is given.', async (): Promise<void> => {
      assert.that(isUuid('00000000-0000-0000-0000-000000000000')).is.true();
    });

    test('returns false if no UUID v4 or v5 is given.', async (): Promise<void> => {
      assert.that(isUuid('definitely-not-a-uuid')).is.false();
    });
  });

  suite('fromString', (): void => {
    test('returns a UUID v5 that is derived from the given text.', async (): Promise<void> => {
      const someUuid = fromString('the native web');

      assert.that(someUuid).is.equalTo('cdb63720-9628-5ef6-bbca-2e5ce6094f3c');
      assert.that(regex.v5.test(someUuid)).is.true();
    });
  });

  suite('empty', (): void => {
    test('returns 00000000-0000-0000-0000-000000000000.', async (): Promise<void> => {
      assert.that(empty()).is.equalTo('00000000-0000-0000-0000-000000000000');
    });
  });
});
