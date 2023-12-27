export default class FunctionSchema {
  constructor() {
    this.validator = (value) => ({}.toString.call(value) === '[object Function]');
    this.context = {};
    this.expected = null;
    this.args = [];
  }

  isValid(value) {
    if (!this.validator(value)) return false;
    if (this.expected) {
      return value.call(this.context, this.args) === this.expected;
    }
    return true;
  }

  expect(result) {
    this.expected = result;
    return this;
  }

  callWith(context) {
    this.context = context;
    return this;
  }

  arguments(args) {
    this.args = args;
    return this;
  }
}
