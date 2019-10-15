import React from 'react'
import './WrongLetter.css'
export default function WrongLetter({guessedLetters , word}) {
    function getWrongLetters()  {
        const wrong = guessedLetters.filter(l =>{
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