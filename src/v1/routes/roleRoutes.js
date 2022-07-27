const express = require('express');
const router = express.Router();
const rolesController = require('../../controllers/rolesController');
const getRole = require("../../middleware/getRoleId");
const JWT = require('../../middleware/verifyJWT');

router.get('/',JWT, rolesController.getAllRoles);

router.get('/:roleId', getRole, rolesController.getRole);

router.post('/', rolesController.addRole);

router.patch('/:roleId', getRole, rolesController.updateRole);

router.delete('/:roleId', getRole, rolesController.deleteOneRole);

module.exports = router;