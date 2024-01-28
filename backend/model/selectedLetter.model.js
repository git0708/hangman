const SelectedLetterModel = require('../schema/selectedLetter.schema');

async function insertSelectedLettersModel(payload) {
    try{
        await SelectedLetterModel.createCollection()
        let insert = await SelectedLetterModel.create(payload)
        return insert
    }catch(e){
        console.log('insertSelectedLetter',e);
        throw Error('Connection issue')
    }
}

async function updateSelectedLetters(sessionId,payload) {
    try{
        let update = await SelectedLetterModel.updateOne({sessionId:sessionId},{...payload})
        return update
    }catch(e){
        console.log('insertSelectedLetter',e);
        throw Error('Connection issue')
    }

}

async function getFindSelectedLetters(sessionId){
    try{
        let selectedLetter = await SelectedLetterModel.find({'sessionId':sessionId,status:'Pending'})
        return selectedLetter
    }catch(e){
        console.log('getFindSelectedLetter',e);
        throw Error('Connection issue')
    }
}


module.exports = { insertSelectedLettersModel,updateSelectedLetters,getFindSelectedLetters }