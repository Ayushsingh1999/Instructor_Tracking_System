const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config()
const { checkIn, checkOut, getinstuctorMonthReport } = require('./controller/instructors');
const db = require('./config/db')

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/checkin', checkIn)
app.post('/checkout', checkOut)
app.get('/monthly-report/:month/:year', getinstuctorMonthReport)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});