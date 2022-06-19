const express = require('express');
const router = express.Router();
const userController = require('../../controllers/userController');
const getUser = require("../../middleware/getUserId");

router.get('/', userController.getAllUsers);

router.get('/:userId', getUser, userController.getUser);

router.post('/', userController.addUser);

router.patch('/:userId', getUser, userController.updateUser);

module.exports = router;