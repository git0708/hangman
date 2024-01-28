const express = require('express');
const router = express.Router();

const {generateUUID} = require('../controller/generateUUID.controller')

router.route("/").get(generateUUID)

module.exports = router