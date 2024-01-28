export function anagram(word) {
    let obj = {};
    for (let i = 0; i < word.length; i++) {
        if (obj[word[i]]) {
            obj[word[i]].count++; obj[word[i]].index.push(i);
        } else {
            obj[word[i]] = {}; obj[word[i]]['index'] = [i]; obj[word[i]]['count'] = 1
        }
    }
    return function (l) {
        let index
        if (obj[l]) {
            index = obj[l].index[obj[l].count - 1]
            if (obj[l].count === 1) { obj[l].index = []; delete obj[l] }
            else { obj[l].count--; }
            return index
        }
        return -1;
    }
}

export const promiseHandler = async (fn) => {
    try {
        let response = await fn();
        if (response?.status === 200) {
            return response.data;
        }
        throw Error(response)
    } catch (error) {
        console.log('error', error);
        throw Error('Network error')
    }
}