import React from 'react'
import './WrongLetter.css'
export default function WrongLetter({guessedLetters , word,update_guessedRemaining}) {
    function getWrongLetters()  {
        const wrong = guessedLetters.filter(l =>{
            if( !guessedLetters.includes(l) && !word.split('').includes(l) ) (update_guessedRemaining())
            return !word.split('').includes(l)
        })
        return wrong
    }
    return (
        <div className="WrongLetters">
            {getWrongLetters()}
        </div>
    )
}