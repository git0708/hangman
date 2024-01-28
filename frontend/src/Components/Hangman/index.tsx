import React, { FC } from 'react';
import './index.css';

interface Props {
    mistakeCount: number
}
const Hangman: FC<Props> = ({ mistakeCount }: Props) => {
    let mistakes = ['rop', 'head', 'body', 'leftArm', 'rightArm', 'leftLeg', 'rightLeg']
    return <div id="hangman">
        <img src={`${process.env.PUBLIC_URL}/images/hangman.png`} width="300" height="300" alt="" />
        <>{
            Array.from({ length: mistakeCount }, (i, x) => x + 1).map((el: number, i: number) => {
                return <div className={mistakes[i]} key={`${i}_${mistakes[i]}`}></div>
            })
        }
        </>
    </div>
}

export default Hangman;