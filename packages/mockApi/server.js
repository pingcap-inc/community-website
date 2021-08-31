const bodyParser = require('body-parser');
const chalk = require('chalk');
const cors = require('cors');
const express = require('express');
const morgan = require('morgan');

const routes = require('./routes');

const { log } = console;
const port = 4000;
const app = express();

app.disable('x-powered-by');

app.use(
  cors({
    credentials: true,
    origin: (origin, cb) => cb(null, origin),
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
  log(`Mock server is running at ${chalk.blue(`http://localhost:${port}`)}`);
});
