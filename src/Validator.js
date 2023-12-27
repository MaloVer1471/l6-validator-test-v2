import StringSchema from './StringSchema.js';
import FunctionSchema from './FunctionSchema.js';
import ObjectSchema from './ObjectSchema.js';

export default class Validator {
  string() {
    const validator = (value) => typeof value === 'string';
    return new StringSchema([validator]);
  }

  function() {
    return new FunctionSchema();
  }

  object() {
    return new ObjectSchema();
  }
}
