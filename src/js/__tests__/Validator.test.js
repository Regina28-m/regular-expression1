import Validator from '../Validator';

test('check Symbol', () => {
  const val1 = new Validator('incorrect1#@');
  const result = () => val1.validateUsername();
  expect(result).toThrow('Допустимы только латинские буквы, символы тире -, подчёркивания _ и цифры (0-9)');
});

test('check first character', () => {
  const val1 = new Validator('_namepls');
  const result = () => val1.validateUsername();
  expect(result).toThrow('Имя не должно содержать подряд более трёх цифр, а также начинаться и заканчиваться цифрами, символами подчёркивания или тире.');
});

test('check last character', () => {
  const val1 = new Validator('namepls8');
  const result = () => val1.validateUsername();
  expect(result).toThrow('Имя не должно содержать подряд более трёх цифр, а также начинаться и заканчиваться цифрами, символами подчёркивания или тире.');
});

test('check 4 and more number', () => {
  const val1 = new Validator('nam8423eplsk');
  const result = () => val1.validateUsername();
  expect(result).toThrow('Имя не должно содержать подряд более трёх цифр, а также начинаться и заканчиваться цифрами, символами подчёркивания или тире.');
});
