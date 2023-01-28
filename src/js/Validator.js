export default class Validator {
  constructor(name) {
    this.name = name;
  }

  validateUsername() {
    const checkSymbol = /^[a-zA-Z0-9-_]+$/;
    const checkOrder = /^[A-Z][A-Z0-9-_]+[A-Z]$/i;
    if (!checkSymbol.test(this.name)) {
      throw new Error('Допустимы только латинские буквы, символы тире -, подчёркивания _ и цифры (0-9)');
    }
    if (!checkOrder.test(this.name) || this.name.search(/\d{4,}/)) {
      throw new Error('Имя не должно содержать подряд более трёх цифр, а также начинаться и заканчиваться цифрами, символами подчёркивания или тире.');
    }
  }
}
