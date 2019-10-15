import React from 'react'
import './DisplayWord.css'
export default function DisplayWord({word,guessedLetters}) {
    var wordLettersUnderscore = word.split('')
    var answer = wordLettersUnderscore.map(l=>{
        let letterState = ' '
        if(guessedLetters.includes(l))
        {
            letterState = l
        }
        return letterState
    }) 
    
    return (
        <div className="wordWrapper">
            {answer}
        </div>
    )
}
