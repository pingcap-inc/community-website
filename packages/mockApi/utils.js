const _ = require('lodash');
const faker = require('faker');

const { MESSAGES } = require('./constants');

const { fake, datatype } = faker;

const errorResp =
  ({ code = 400, detail = MESSAGES.INVALID_PARAMS, errors } = {}) =>
  (req, res) => {
    res.status(code).json({ detail, errors });
  };

const successResp =
  ({ code = 200, data, detail = MESSAGES.SUCCESS, ...rest } = {}) =>
  (req, res) => {
    res.status(code).json({
      data,
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

        if (['{{rdatatype.number}}', '{{finance.amount}}'].includes(value)) {
          acc[key] = Number(acc[key]);
        }

        return acc;
      }, {});

    return callback(genItem(schema), idx);
  });
};

const sample = (array) => array[Math.floor(Math.random() * array.length)];

const wait = (ms = 1000) => new Promise((resolve) => setTimeout(resolve, ms));

const repeat = (num, callback) => _.times(num).map((i) => callback(i + 1));

module.exports = {
  errorResp,
  successResp,
  generator,
  sample,
  wait,
  repeat,
};
