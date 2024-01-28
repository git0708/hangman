import React, { useEffect, useState } from 'react';
import Service from 'Service/service';
import { promiseHandler } from 'utils/utils'

interface selectedLetters {
    [key: number]: string
}


function useGetSelectedLetterHooks() {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [selectedLetters, setSelectedLetters] = useState<selectedLetters | null>(null)
    const [mistakesCount, setMistakesCount] = useState<number>(0)
    useEffect(() => {
        async function getSelectedLetters() {
            let data = await promiseHandler(Service.getSelectedLetters.bind(Service))
            setSelectedLetters(data?.selectedLetter)
            setMistakesCount(data?.mistakesCount)
            setIsLoading(false);
        }

        setIsLoading(true);
        getSelectedLetters();
    }, [])
    async function captureAction(selectedLetter: any, mistakesCount: number, status: string) {
        let req = {
            selectedLetter: selectedLetter,
            status: status,
            mistakesCount: mistakesCount
        }
        let data = await promiseHandler(Service.updateSelectedLetters.bind(Service, req))
    }
    return { captureAction, selectedLetters, mistakesCount }
}

export default useGetSelectedLetterHooks;