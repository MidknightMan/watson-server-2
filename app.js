const apiRouter = require('./Router/apiRouter');
const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());

app.use('/api', apiRouter);
// app.use(customErrorHandling);
// app.use(PSQLerrors);
// app.use(errorCatcher);
app.all('/*', (req, res, next) => {
  return res.status(404).send('route not found');
});
// app.use(invalidMethod);
module.exports = app;
