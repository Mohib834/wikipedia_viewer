const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.resolve(__dirname, 'dist');
const port = process.env.PORT;

app.use(express.static(publicPath));

app.listen(port, () => console.log('Server Initialized'));