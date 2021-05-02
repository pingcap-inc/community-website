const R = require('ramda');
const faker = require('faker');

const { MESSAGES } = require('./constants');

const { fake, datatype } = faker;

const errorResp = ({ code = 400, detail = MESSAGES.INVALID_PARAMS, errors } = {}) => (req, res) => {
  res.status(code).json({ detail, errors });
};

const successResp = ({ code = 200, data, detail = MESSAGES.SUCCESS, ...rest } = {}) => (req, res) => {
  res.status(code).json({
    data,
    detail,
    ...rest,
  });
};

const generator = (schema, options) => {
  const { min, max = min, callback } = R.mergeRight(
    {
      min: 20,
      callback: (item, idx) => item,
    },
    options
  );

  return R.times((idx) => {
    const genItem = (schema) =>
      R.toPairs(schema).reduce((acc, [key, value]) => {
        acc[key] = (() => {
          if (R.is(String, value)) {
            return fake(value);
          } else if (R.is(Object, value)) {
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
  }, datatype.number({ min, max }));
};

const sample = (array) => array[Math.floor(Math.random() * array.length)];

module.exports = {
  errorResp,
  successResp,
  generator,
  sample,
};
