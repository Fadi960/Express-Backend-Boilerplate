const express = require('express');
const { register, list } = require('../controllers/user.controller');
const validate = require('../middlewares/validate');
const { createUser } = require('../validations/user.validation');

const router = express.Router();
router.post('/', validate(createUser), register);
router.get('/', list);
module.exports = router;