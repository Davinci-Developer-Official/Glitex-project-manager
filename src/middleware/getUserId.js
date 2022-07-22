const User = require("../models/User");

const getUserId = async (req, res, next) => {
    const {
        params: { userId },
    } = req;

    let user

    if (!userId) {
        return res.status(400).json({message: "Parameter ':userId' can not be empty"});
    }
    try {
        user = await User.findById(userId);
        if (user === null) return res.status(404).json({ message: "This user is not available" })
    }
    catch (error) {
        return res.status(error?.status || 500).json({message: error.message});
    }

    res.user = user;
    next()
}

module.exports = getUserId;