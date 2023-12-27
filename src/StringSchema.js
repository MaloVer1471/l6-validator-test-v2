export default class StringSchema {
  constructor(validators) {
    this.validators = validators;
  }

  isValid(value) {
    return this.validators.every((validator) => validator(value));
  }

  hasSpaces() {
    // const validator = (value) => value.split('').filter((el) => el === ' ').length;
    const validator = (value) => value.match(/\s/);
    return new StringSchema([...this.validators, validator]);
  }
}
