import { v4, v5 } from 'uuid';

const uuidv4 = function (): string {
  return v4();
};

const regex = {
  v4: /(?:^[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}$)|(?:^0{8}-0{4}-0{4}-0{4}-0{12}$)/u,
  v5: /(?:^[a-f0-9]{8}-[a-f0-9]{4}-5[a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}$)|(?:^0{8}-0{4}-0{4}-0{4}-0{12}$)/u
};

const jsonSchema = {
  /* eslint-disable @typescript-eslint/no-base-to-string */
  v4: { type: 'string', pattern: regex.v4.toString().slice(1, -1) },
  v5: { type: 'string', pattern: regex.v5.toString().slice(1, -1) }
  /* eslint-enable @typescript-eslint/no-base-to-string */
};

const isUuid = function (value: string): boolean {
  return regex.v4.test(value) || regex.v5.test(value);
};

const empty = function (): string {
  return '00000000-0000-0000-0000-000000000000';
};

const fromString = function (text: string): string {
  const namespace = 'bb5d0ffa-9a4c-4d7c-8fc2-0a7d2220ba45';

  const uuidFromString = v5(text, namespace);

  return uuidFromString;
};

export {
  uuidv4 as uuid,
  regex,
  isUuid,
  empty,
  fromString,
  jsonSchema
};
