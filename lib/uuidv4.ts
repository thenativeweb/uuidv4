import v4 from 'uuid/v4';
import v5 from 'uuid/v5';

const uuidv4 = function (): string {
  return v4();
};

uuidv4.regex = {
  v4: /^(?:[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12})|(?:0{8}-0{4}-0{4}-0{4}-0{12})$/u,
  v5: /^(?:[a-f0-9]{8}-[a-f0-9]{4}-5[a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12})|(?:0{8}-0{4}-0{4}-0{4}-0{12})$/u
};

uuidv4.is = function (value: string): boolean {
  return uuidv4.regex.v4.test(value) || uuidv4.regex.v5.test(value);
};

uuidv4.empty = function (): string {
  return '00000000-0000-0000-0000-000000000000';
};

uuidv4.fromString = function (text: string): string {
  const namespace = 'bb5d0ffa-9a4c-4d7c-8fc2-0a7d2220ba45';

  const uuidFromString = v5(text, namespace);

  return uuidFromString;
};

export default uuidv4;
