const { WordsService, HintsService } = require('../service/index')
const { insertGetWordModel,getWordHintsModel } = require('../model/getWord.model')
const { promiseHandler } = require('../utils/util')

async function getWord(req, res, next) {
    try {
        let wordResponse = await promiseHandler(WordsService.getWords.bind(WordsService));
        let words = wordResponse?.data.length ? wordResponse?.data[0] : ""
        let hintsResponse = await promiseHandler(HintsService.getHints.bind(HintsService, wordResponse.data[0]));
        let hints = hintsResponse?.data.length ? hintsResponse?.data[0]?.shortdef : [];
        await insertGetWordModel(req.get('sessionId'), words, hints?.length ? hints[0] : "");
        return res.status(200).json({ word: words, hints: hints });
    } catch (err) {
        console.log('err', err);
        return res.status(400).send('Somethings went wrong')
    }
}

async function getWordBySessionId(req, res, next) {
    try {
        let getWordResponse = await getWordHintsModel(req.params.sessionId)
        return res.status(200).json({ word: getWordResponse.word, hints: [getWordResponse.hints] });
    } catch (err) {
        console.log('err', err);
        return res.status(400).send('Somethings went wrong')
    }
}

module.exports = { getWord, getWordBySessionId };