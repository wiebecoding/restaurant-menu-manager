const express = require('express');
const cors = require("cors");
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoBD databasees connection establish successfully")
})

const itemsRouter = require('./routes/items');
const hoursRouter = require('./routes/hours');

app.use('/items', itemsRouter);
app.use('/hours', hoursRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});