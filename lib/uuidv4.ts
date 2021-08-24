import { deprecate } from 'util';
import { NIL as nil, v4, v5, validate, version } from 'uuid';

const regex = {
  v4: /(?:^[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}$)|(?:^0{8}-0{4}-0{4}-0{4}-0{12}$)/u,
  v5: /(?:^[a-f0-9]{8}-[a-f0-9]{4}-5[a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}$)|(?:^0{8}-0{4}-0{4}-0{4}-0{12}$)/u
};

const jsonSchema = {
  v4: { type: 'string', pattern: regex.v4.toString().slice(1, -2) },
  v5: { type: 'string', pattern: regex.v5.toString().slice(1, -2) }
};

const uuidv4 = deprecate(
  (): string => v4(),
  'uuidv4() is deprecated. Use v4() from the uuid module instead.'
);

const isUuid = deprecate(
  (value: string): boolean => validate(value) && (version(value) === 4 || version(value) === 5),
  'isUuid() is deprecated. Use validate() from the uuid module instead.'
);

const empty = deprecate(
  (): string => nil,
  'empty() is deprecated. Use NIL from the uuid module instead.'
);

const fromString = deprecate(
  (text: string, namespace = 'bb5d0ffa-9a4c-4d7c-8fc2-0a7d2220ba45'): string => v5(text, namespace),
  'fromString() is deprecated. Use v5() from the uuid module instead.'
);

export {
  uuidv4 as uuid,
  regex,
  isUuid,
  empty,
  fromString,
  jsonSchema
};
