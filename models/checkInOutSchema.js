const { mongoose } = require("mongoose");

const checkInOutSchema = new mongoose.Schema({
    instructorId: String,
    checkIn: Date,
    checkOut: Date,
});
const CheckInOut = mongoose.model('CheckInOut', checkInOutSchema);
module.exports = CheckInOut