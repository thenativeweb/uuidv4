import { assert } from 'assertthat';
import { empty, fromString, isUuid, jsonSchema, regex, uuid } from '../../lib/uuidv4';

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
    let uuidv4: string,
        uuidv5: string;

    setup(async (): Promise<void> => {
      uuidv4 = uuid();
      uuidv5 = fromString('the native web');
    });

    suite('v4', (): void => {
      test('is a regular expression that matches a UUID v4.', async (): Promise<void> => {
        assert.that(uuidv4).is.matching(regex.v4);
      });

      test('is a regular expression that correctly matches the start of a UUID v4.', async (): Promise<void> => {
        assert.that(`31${uuidv4}`).is.not.matching(regex.v4);
      });

      test('is a regular expression that correctly matches the end of a UUID v4.', async (): Promise<void> => {
        assert.that(`${uuidv4}31`).is.not.matching(regex.v4);
      });
    });

    suite('v5', (): void => {
      test('is a regular expression that matches a UUID v5.', async (): Promise<void> => {
        assert.that(uuidv5).is.matching(regex.v5);
      });

      test('is a regular expression that correctly matches the start of a UUID v5.', async (): Promise<void> => {
        assert.that(`31${uuidv5}`).is.not.matching(regex.v5);
      });

      test('is a regular expression that correctly matches the end of a UUID v5.', async (): Promise<void> => {
        assert.that(`${uuidv5}31`).is.not.matching(regex.v5);
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

    test('returns false if an empty UUID is given.', async (): Promise<void> => {
      assert.that(isUuid('00000000-0000-0000-0000-000000000000')).is.false();
    });

    test('returns false if no UUID v4 or v5 is given.', async (): Promise<void> => {
      assert.that(isUuid('definitely-not-a-uuid')).is.false();
    });

    test('returns false if a UUID v1 is given.', async (): Promise<void> => {
      assert.that(isUuid('d9428888-122b-11e1-b85c-61cd3cbb3210')).is.false();
    });

    test('returns false if a UUID v3 is given.', async (): Promise<void> => {
      assert.that(isUuid('a981a0c2-68b1-35dc-bcfc-296e52ab01ec')).is.false();
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

  suite('jsonSchema', (): void => {
    test('v4 is based on the v4 regex.', async (): Promise<void> => {
      assert.that(jsonSchema.v4).is.equalTo({ type: 'string', pattern: regex.v4.toString().slice(1, -2) });
    });

    test('v5 is based on the v5 regex.', async (): Promise<void> => {
      assert.that(jsonSchema.v5).is.equalTo({ type: 'string', pattern: regex.v5.toString().slice(1, -2) });
    });
  });
});
