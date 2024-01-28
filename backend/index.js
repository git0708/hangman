const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyparser = require('body-parser')
const cors = require('cors');
const dotenv = require('dotenv');
const router = require('./router/index');
const { connectDB, errorHandlerMiddle } = require('./utils/util');

app.use(bodyparser.json())
app.use(cors());
dotenv.config();
connectDB(mongoose.connect);
app.use(errorHandlerMiddle);
router(app);

app.listen(process.env.PORT)