const Role = require("../models/Role");

const getRoleId = async (req, res, next) => {
    const {
        params: {roleId },
    } = req;

    let role

    if (!roleId) {
        return res.status(400).json({ message: "Parameter ':roleId' can not be empty"});
    }
    try {
        role = await Role.findById(roleId);
        if (role === null) return res.status(404).json({ message: "This role is not available" })
    }
    catch (error) {
        return res.status(error?.status || 500).json({message: error.message});
    }

    res.role = role;
    next()
}

module.exports = getRoleId;