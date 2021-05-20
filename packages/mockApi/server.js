const bodyParser = require('body-parser');
const chalk = require('chalk');
const cors = require('cors');
const express = require('express');
const morgan = require('morgan');

const routes = require('./routes');

const port = 4000;
const app = express();

app.disable('x-powered-by');

app.use(
  cors({
    credentials: true,
    origin: 'http://localhost:3000',
  })
);
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(routes);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Mock server is running at ${chalk.blue(`http://localhost:${port}`)}`);
});
