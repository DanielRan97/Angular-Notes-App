const express = require('express');
const cors = require('cors');
const app = express();
const notesRouter = require('./Routers/notes');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.use('/notes', notesRouter);

app.listen(3000, () => console.log('server is runing...'));
