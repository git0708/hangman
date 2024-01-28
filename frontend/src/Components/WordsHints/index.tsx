import { FC } from 'react';
import './index.css';
interface Props {
    words: string
    hints: string
    selectedLetters: any

}
const WordsHints: FC<Props> = ({ words, hints, selectedLetters }: Props) => {
    return <div className='wordsHints'><div className="hints"><span style={{ color: '1a1a1a', fontSize: "22px", fontWeight: "800" }}>Hints:</span>{hints[0].toUpperCase() + hints.substring(1)}</div>
        <div className="answer">
            {Array.from(({ length: words.length }), (x: number) => x + 1).map((el, i) => <div key={i} className="underscore">{`${selectedLetters[i] ? selectedLetters[i].toUpperCase() : ''}`}</div>)}
        </div></div>
}

export default WordsHints