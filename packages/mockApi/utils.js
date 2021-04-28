const R = require('ramda');
const faker = require('faker');

const { MESSAGES } = require('./constants');

const { fake, random } = faker;

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
      callback: (item) => item,
    },
    options
  );

  return R.times(() => {
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

    return callback(genItem(schema));
  }, random.number({ min, max }));
};

module.exports = {
  errorResp,
  successResp,
  generator,
};
