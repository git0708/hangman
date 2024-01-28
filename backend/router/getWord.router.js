const express = require("express");
const router = express.Router();

const { getWord,getWordBySessionId } = require('../controller/getWord.controller.js')

router.route('/').get(getWord)
router.route('/:sessionId').get(getWordBySessionId)

module.exports = router