const express = require('express');
const parser = require('body-parser');
const path = require('path');
const port = process.env.PORT || 8088;
const app  = express();
// const dateformat = require('date-format');

app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());
app.use(express.static(path.join(__dirname, 'dist')));

require('./server/config/database');

app.use('/api/notes', require('./server/config/routes/note.routes'));
const catchAll = require('./server/config/routes/catch-all.routes');
app.use(catchAll);

app.listen(port, () => console.log(`listening on port ${ port }`));