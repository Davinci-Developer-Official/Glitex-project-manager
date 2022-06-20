const Role = require("../models/Role");

const getRoleId = async (req, res, next) => {
    const {
        params: {roleId },
    } = req;

    let role

    if (!roleId) {
        res.status(400).json("Parameter ':roleId' can not be empty");
    }
    try {
        role = await Role.findById(roleId);
        if (role === null) return res.status(404).json({ message: "This role is not available" })
    }
    catch (error) {
        res.status(error?.status || 500).json(error.message);
    }

    res.role = role;
    next()
}

module.exports = getRoleId;