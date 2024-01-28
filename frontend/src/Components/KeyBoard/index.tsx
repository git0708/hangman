import React,{FC,MouseEvent} from 'react';
import './index.css';

interface Props{
    getSelectedLetters:(val:string)=>void
}
const KeyBoard:FC<Props> = ({getSelectedLetters}:Props) => {

    let onClickBoard = (e:MouseEvent<HTMLUListElement>):void => {
        e.preventDefault();
        let val = (e.target as HTMLLIElement).dataset.value;
        val && getSelectedLetters(val);
    }
    let alphabets:number[] = Array.from({length:26},(i,x)=>(x+65));
    
    return <ul id="alphabets" className="alphabets" onClick={onClickBoard}>
        {alphabets.map((el:number,i:number)=>{
            return <li key={i} data-value={String.fromCharCode(el)}>{String.fromCharCode(el)}</li>
        })}    
    </ul>
}

export default KeyBoard;