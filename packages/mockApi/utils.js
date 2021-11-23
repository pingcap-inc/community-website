const _ = require('lodash');
const faker = require('faker');

const { MESSAGES } = require('./constants');

const { fake, datatype } = faker;

const errorResp =
  ({ code = 400, detail = MESSAGES.INVALID_PARAMS, errors, ...rest } = {}) =>
  (req, res) => {
    res.status(code).json({ detail, errors, ...rest });
  };

const successResp =
  ({ code = 200, detail = MESSAGES.SUCCESS, ...rest } = {}) =>
  (req, res) => {
    res.status(code).json({
      detail,
      ...rest,
    });
  };

const generator = (schema, options) => {
  const {
    min,
    max = min,
    callback,
  } = _.assign(
    {
      min: 20,
      callback: (item, idx) => item,
    },
    options
  );

  return _.times(datatype.number({ min, max }), (idx) => {
    const genItem = (schema) =>
      _.toPairs(schema).reduce((acc, [key, value]) => {
        acc[key] = (() => {
          if (_.isString(value)) {
            return fake(value);
          } else if (_.isObject(value)) {
            return genItem(value);
          }
          return value;
        })();

        if (['{{datatype.number}}', '{{finance.amount}}'].includes(value)) {
          acc[key] = Number(acc[key]);
        }

        if (value === '{{datatype.boolean}}') {
          acc[key] = acc[key] === 'true';
        }

        return acc;
      }, {});

    return callback(genItem(schema), idx);
  });
};

const sample = (array) => array[Math.floor(Math.random() * array.length)];

const wait = (ms = 1000) => new Promise((resolve) => setTimeout(resolve, ms));

const repeat = (num, callback) => _.times(num).map((i) => callback(i + 1));

const getValueOrNull = (value) => {
  return datatype.boolean() ? value : null;
};

const oneOf = (...arr) => arr[ONE_OF_ONLY_FIRST ? 0 : Math.floor(Math.random() * arr.length)];

const waitMiddleware = (ms) => (req, res, next) => setTimeout(next, ms ?? Math.random() * 1000 + 1000);

const oneOfMiddleware =
  (...arr) =>
  (req, res) =>
    oneOf(...arr)(req, res);

const middlewares = {
  wait: waitMiddleware,
  oneOf: oneOfMiddleware,
};

module.exports = {
  errorResp,
  successResp,
  generator,
  sample,
  wait,
  repeat,
  getValueOrNull,
  oneOf,
  middlewares,
};

// toggle this to control oneOf to always return first item.
const ONE_OF_ONLY_FIRST = true;
