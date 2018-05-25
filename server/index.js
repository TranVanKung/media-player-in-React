const express = require('express');
const path = require('path');

const app = express();
app.use(express.static(path.join(__dirname, '..', 'build')));

const { PORT } = require('./host');

const port = process.env.PORT || PORT;

app.listen(port, (req, res) => {
  console.log(`Server is running on port ${port}`);
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

app.disable('x-powered-by');
