const CheckInOut = require("../models/checkInOutSchema");

const checkIn = async (req, res) => {
    try {
        const { instructorId, checkIn } = req.body;

        const checkInOut = new CheckInOut({
            instructorId,
            checkIn,
        });
        await checkInOut.save();
    } catch (err) {
        console.log(err)
    }
}

const checkOut = async (req, res) => {
    try {
        const { instructorId, checkOut } = req.body;

        const checkInOut = await CheckInOut.findOneAndUpdate(
            { instructorId, checkOut: { $exists: false } },
            { checkOut },
            { new: true }
        );
        if (!checkInOut) {
            return res.status(400).json({ error: 'No check-in' });
        }
        res.status(200).json({ message: 'Check out record sucessfully' });
    } catch (err) {
        console.log(err)
    }
}

const getinstuctorMonthReport = async (req, res) => {
    try {
        const { month, year } = req.params;
        const startDate = new Date(year, month - 1, 1);
        const endDate = new Date(year, month, 0, 23, 59, 59);

        const monthlyReport = await CheckInOut.aggregate([
            {
                $match: {
                    checkIn: { $gte: startDate, $lt: endDate },
                },
            },
            {
                $group: {
                    _id: '$instructorId',
                    totalCheckedInTime: {
                        $sum: {
                            $divide: [{ $subtract: ['$checkOut', '$checkIn'] }, 3600000],
                        },
                    },
                },
            },
        ]);

        res.status(200).json(monthlyReport);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = {checkIn, checkOut, getinstuctorMonthReport}
