require('dotenv').config();
const path = require('node:path');
const fsPromises = require('node:fs/promises');

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3500;

app.use(express.static(path.resolve(__dirname, 'public')));
app.set('view engine', 'ejs');

const mainRoutes = require('./routes/mainRoutes');
app.use('/', mainRoutes);

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
