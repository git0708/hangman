import React, { useState, useEffect } from 'react';
import Service from 'Service/service'
import { promiseHandler } from 'utils/utils'

interface response {
    word: string,
    hints: string[]
}

function useGetWordsHook() {
    const [isLoading, setIsloading] = useState<boolean>(false)
    const [word, setWord] = useState<string>('')
    const [hints, setHints] = useState<string>('');
    async function getWordFn() {
        setIsloading(true);
        try {
            let data = await promiseHandler(Service.getWordsHints.bind(Service));
            setIsloading(false); setWord(data?.word);
            if (data?.hints?.length) {
                setHints(data?.hints[0]);
                let insert = await promiseHandler(Service.insertSelectedLetters.bind(Service, { selectedLetter:{},status:'Pending',mistakesCount:0, sessionId: sessionStorage.getItem('sessionId') }))
                sessionStorage.setItem('inserted', "1")
            }
        } catch (error) {
            setIsloading(false);
            throw Error('Something went wrong.')
        }
    }
    async function getWordsBySessionId() {
        try {
            let data = await promiseHandler(Service.getWordsHintsBySessionID.bind(Service));
            setIsloading(false);
            if (!data?.word) { getWordFn() } else { setWord(data?.word); setHints(data?.hints[0]) }
        } catch (error) { setIsloading(false); throw Error('Something went wrong.') }
    }
    useEffect(() => {
        setIsloading(true); getWordsBySessionId()
    }, [])

    return { getWordFn, word, hints, isLoading }
}
export default useGetWordsHook
