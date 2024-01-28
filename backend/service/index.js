const {AxiosAPI} = require('../utils/axiosAPI')

class WordsService{
    constructor(){
        this.axios = new AxiosAPI('https://random-word-api.herokuapp.com') 
    }
    async getWords(){
        return await this.axios.getMethod('/word','number=1'); 
    }
}

class HintsService{
    constructor(){
        this.axios = new AxiosAPI('https://www.dictionaryapi.com')
    }
    async getHints(word){
        return await this.axios.getMethod(`/api/v3/references/collegiate/json/${word}`,'key=27f927fa-fa4e-47c0-b6a8-a83eb72c66aa');
    }

}
const wordsInstance = new WordsService();
const hintInstance = new HintsService();

module.exports = {WordsService:wordsInstance,HintsService:hintInstance}