const express = require('express');
const parser = require('body-parser');
const path = require('path');
const port = process.env.port || 8000;
const app = express();

app.use(parser.urlencoded({extended: true}));
app.use(parser.json());
app.use(express.static(path.join(__dirname, 'dist')));

require('./server/config/database');

app.use('/api/players', require('./server/config/routes/player.routes'));

const catchAll = require('./server/config/routes/catch-all.routes');
app.use(catchAll);

app.listen(port, () => console.log(`listening on port ${ port }`));