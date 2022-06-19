const User = require("../models/User");

const getUserId = async (req, res, next) => {
    const {
        params: { userId },
    } = req;

    let user

    if (!userId) {
        res.status(400).json("Parameter ':userId' can not be empty");
    }
    try {
        user = await User.findById(userId);
        if (user === null) return res.status(404).json({ message: "This user is not available" })
    }
    catch (error) {
        res.status(error?.status || 500).json(error.message);
    }

    res.user = user;
    next()
}

module.exports = getUserId;