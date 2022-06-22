const Role = require('../models/Role');
const { validateRole } = require('../utils/validation');

const getAllRoles = async (req, res) => {
    try {
        //Get all roles
        const roles = await Role.find();
        //Roles not found
        if (!roles) return res.status(204).json({ 'message': 'No users found' });
        res.status(200).json(roles);
    }
    catch (error) {
        res.status(500).json({ 'message': error.message });
    }
}

const getRole = async (req, res) => {
    res.status(200).json(res.role);
}

const addRole = async (req, res) => {
    const { body } = req;
    const { error } = validateRole(body);
    //if valid, return 400 - Bad request
    if (error) return res.status(400).json(error.details[0].message);

    // check for duplicate usernames in the db
    const duplicate = await Role.findOne({ role: body.role }).exec();
    if (duplicate) return res.sendStatus(409); //Conflict 

    try {
        //create and store the new user
        const newRole = new Role({
            "name": body.roleName,
            "role": body.role,
        });

        await newRole.save();

        res.status(201).json({ 'success': 'New role created!' });
    } catch (error) {
        res.status(500).json({ 'message': error.message });
    }
}

const updateRole = async (req, res) => {
    const { body } = req;
    
    try {
        //update user status
        res.role.role = body.role;

        //Update user status in db
        const updatedRole = await res.role.save();
        res.status(200).json(updatedRole);
    }
    catch (error) {
        res.status(500).json({ 'message': error.message });
    }
}

const deleteOneRole = async (req, res) => {
    try {
        await res.role.remove();
        res.status(204).json({ status: "OK" });
    }
    catch (error) {
        res.status(500).json({'message': error.message});
    }
}

module.exports = {
    getAllRoles,
    getRole,
    addRole,
    updateRole,
    deleteOneRole
};