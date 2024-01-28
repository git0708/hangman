import { useState, useMemo, useEffect } from 'react';
import useGetWordsHook from 'Hooks/getWords.hooks';
import useGetUUIDHooks from 'Hooks/getUUID.hooks';
import useGetSelectedLetterHooks from 'Hooks/getSelectedLetters.hooks'
import Loader from 'Components/Loader';
import WordsHints from 'Components/WordsHints'
import KeyBoard from 'Components/KeyBoard';
import Hangman from 'Components/Hangman';
import { anagram } from 'utils/utils'
import Model from 'Components/Model';

interface selectedLetters {
    [key: number]: string
}

enum status {
    Pending = 'Pending',
    Success = 'Success',
    Failure = 'Failure'
}

function Home() {
    const { uuid, isLoading: isLoadingUUID } = useGetUUIDHooks()
    const { getWordFn, word, hints, isLoading: iaLoadingWord } = useGetWordsHook();
    const { captureAction, selectedLetters: selectedLetterFromDB, mistakesCount: mistakesCountFromDB } = useGetSelectedLetterHooks()
    const [selectedLetters, setSelectedLetters] = useState<selectedLetters>({})
    const [mistakeCount, setMistakeCount] = useState<number>(0);
    const [success, setSuccess] = useState<boolean>(false);
    const [isModelShow, setIsModelShow] = useState<boolean>(false)

    let getPosition = useMemo(() => anagram(word), [word]);

    useEffect(() => {
        if (mistakeCount === 7) {
            captureAction(selectedLetters, mistakeCount, status.Failure);
            reset(false)
        } else if (word && Object.keys(selectedLetters).length === word.length) {
            captureAction(selectedLetters, mistakeCount, status.Success)
            reset(true)
        } else if (uuid && sessionStorage.getItem('inserted') && (Object.keys(selectedLetters).length || mistakeCount)) {
            captureAction(selectedLetters, mistakeCount, status.Pending)
        }
    }, [uuid, mistakeCount, selectedLetters])

    function reset(status:boolean) {
        setIsModelShow(true); setSuccess(status);
        setSelectedLetters({})
        setMistakeCount(0);
        sessionStorage.removeItem('inserted')
    }

    useEffect(() => {
        if (selectedLetterFromDB) {
            setSelectedLetters(selectedLetterFromDB)
            setMistakeCount(mistakesCountFromDB)
        }
    }, [selectedLetterFromDB, mistakesCountFromDB])

    const getSelectedLetters = (val: string): void => {
        let currentPos = getPosition(val.toLowerCase());
        if (currentPos === -1) { setMistakeCount((prev: number) => prev + 1); }
        else { setSelectedLetters((prev: selectedLetters) => ({ ...prev, [currentPos]: val.toLowerCase() })) }
    };

    return (
        <div className="App">
            {isModelShow && <Model success={success} failure={!success} onClick={() => { setIsModelShow(false); getWordFn() }} />}
            {(isLoadingUUID || iaLoadingWord) && <Loader />}
            <Hangman mistakeCount={mistakeCount} />
            {word && hints && <WordsHints words={word} hints={hints} selectedLetters={selectedLetters} />}
            <KeyBoard getSelectedLetters={getSelectedLetters} />
        </div>
    );
}

export default Home;
