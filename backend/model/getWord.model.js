const GetWordModel = require('../schema/getWord.schema');

async function insertGetWordModel(sessionId, word, hints) {
    try {
        let createCollection = await GetWordModel.createCollection();
        let insert = await GetWordModel.create({ sessionId: sessionId, word: word, hints:hints })
        return insert
    } catch (e) {
        console.log('insertGetWordModel', e);
        throw Error('Connection issue')
    }
}

async function getWordHintsModel(sessionID) {
    try {
        let getWord = await GetWordModel.find({ sessionId: sessionID }).sort({createdOn:-1})
        return { word: getWord[0]?.word, hints: getWord[0]?.hints }
    } catch (error) {
        console.log('getWordHintsModel', error);
        throw Error('Connection issue')
    }
}

module.exports = { insertGetWordModel, getWordHintsModel }