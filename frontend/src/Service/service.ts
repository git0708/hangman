import AxiosAPI from 'utils/AxiosAPI'

class Service {
    private axios;
    constructor() {
        this.axios = new AxiosAPI('http://localhost:5000/');
    }
    async getUUID() {
        return await this.axios.getMethod('generateuuid', '');
    }
    async getWordsHints() {
        return await this.axios.getMethod('getword', '',{'headers':{'sessionId':sessionStorage.getItem('sessionId')}});
    }
    async getWordsHintsBySessionID(){
        return await this.axios.getMethod(`getword/${sessionStorage.getItem('sessionId')}`,'')
    }
    async getSelectedLetters(){
        return await this.axios.getMethod(`selectedletters/${sessionStorage.getItem('sessionId')}`,'')
    }
    async insertSelectedLetters(payload:object){
        console.log('payload',payload);
        return await this.axios.postMethod('selectedletters',JSON.stringify(payload), {
            headers: {
              'Content-Type': 'application/json'
            }
          })
    }
    async updateSelectedLetters(payload:object){
        return await this.axios.putMethod(`selectedletters/${sessionStorage.getItem('sessionId')}`,JSON.stringify(payload), {
            headers: {
              'Content-Type': 'application/json'
            }
          })
    }
}



export default new Service();
