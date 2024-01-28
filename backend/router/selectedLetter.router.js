const express = require("express");
const router = express.Router();

const { insertSelectedLetters,updateSelectedLetter,getSelectedLetters } = require('../controller/selectedLetter.controller.js')

router.route('/').post(insertSelectedLetters)
router.route('/:sessionId').get(getSelectedLetters)
router.route('/:sessionId').put(updateSelectedLetter)
module.exports = router